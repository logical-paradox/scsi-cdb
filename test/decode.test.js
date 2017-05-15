var chai = require('chai');
var expect = chai.expect;
var ScsiCdb = require('../scsi-cdb');
var scsiCdb = new ScsiCdb();

describe('scsi-cdb', function() {
  describe('decode()', function() {
    describe('invalid input handling', function() {
      it('throws an exception if no input is specified', function(done) {
        expect(function(){
          var output = scsiCdb.decode();
        }).to.throw('Invalid input');
        done();
      });

      it('throws an exception if the input is not an array', function(done) {
        expect(function(){
          var output = scsiCdb.decode(0);
        }).to.throw('Invalid input');
        done();
      });

      it('throws an exception if any values in the input array are not between 0 and 255', function(done) {
        expect(function() {
          var output = scsiCdb.decode([ -1 ]);
        }).to.throw('Invalid input');
        expect(function() {
          var output = scsiCdb.decode([ 'a' ]);
        }).to.throw('Invalid input');
        expect(function() {
          var output = scsiCdb.decode([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 'a' ]);
        }).to.throw('Invalid input');
        done();
      });
    });

    describe('unknown message handling', function() {
      it('throws an exception if the message type is unknown', function(done) {
        expect(function() {
          var output = scsiCdb.decode([ 255 ]);
        }).to.throw('Unknown CDB');
        done();
      });
    });

    describe('known message handling', function() {
      it('successfully decodes a TEST UNIT READY command', function(done) {
        var output = scsiCdb.decode([ 0, 0, 0, 0, 0, 0 ]);
        expect(output).to.deep.equal({
          name: "TEST UNIT READY",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x0", reserved: false, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0x0", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a BACKGROUND CONTROL command', function(done) {
        var output = scsiCdb.decode([ 0x9e, 0x15, 0xc0, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "BACKGROUND CONTROL",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x15", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "BO_CTL", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "BO_TIME", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "Reserved", bits: 88, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a COMPARE AND WRITE command', function(done) {
        var output = scsiCdb.decode([ 0x89, 0xf8, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0xff, 0x3f, 0xff ]);
        expect(output).to.deep.equal({
          name: "COMPARE AND WRITE",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x89", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "NUMBER OF LOGICAL BLOCKS", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
            { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a FORMAT UNIT command', function(done) {
        var output = scsiCdb.decode([ 0x04, 0xff, 0xff, 0x00, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "FORMAT UNIT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x4", reserved: false, obsolete: false },
            { name: "DEFECT LIST FORMAT", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "CMPLST", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "FMTDATA", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "LONGLIST", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "FMTPINFO", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "Vendor specific", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a GET LBA STATUS command', function(done) {
          var output = scsiCdb.decode([ 0x9e, 0x12, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "GET LBA STATUS",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x12", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "STARTING LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a GET STREAM STATUS command', function(done) {
          var output = scsiCdb.decode([ 0x9e, 0x16, 0x00, 0x00, 0x12, 0x34, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0x56, 0x78, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "GET STREAM STATUS",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x16", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "STARTING STREAM IDENTIFIER", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a ORWRITE (16) command', function(done) {
          var output = scsiCdb.decode([ 0x8b, 0xf8, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "ORWRITE (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x8b", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "ORPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xfedcba9876543210", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a ORWRITE (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0xff, 0x07, 0x0f, 0x00, 0x00, 0x3f, 0x18, 0x00, 0x0e, 0xf8, 0x00, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10, 0xfe, 0xdc, 0xba, 0x98, 0x12, 0x34, 0x56, 0x78, 0xfe, 0xdc, 0xba, 0x98 ]);
          expect(output).to.deep.equal({
              name: "ORWRITE (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
                  { name: "BMOP", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 5, value: "0x0", reserved: true, obsolete: false },
                  { name: "PREVIOUS GENERATION PROCESSING", bits: 4, value: "0xf", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 4, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0xe", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "ORPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xfedcba9876543210", reserved: false, obsolete: false },
                  { name: "EXPECTED ORWGENERATION", bits: 32, value: "0xfedcba98", reserved: false, obsolete: false },
                  { name: "NEW ORWGENERATION", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0xfedcba98", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a POPULATE TOKEN command', function(done) {
          var output = scsiCdb.decode([ 0x83, 0x10, 0x00, 0x00, 0x00, 0x00, 0x76, 0x54, 0x32, 0x10, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "POPULATE TOKEN",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x83", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x10", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "LIST IDENTIFIER", bits: 32, value: "0x76543210", reserved: false, obsolete: false },
                  { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a PRE-FETCH (10) command', function(done) {
          var output = scsiCdb.decode([ 0x34, 0x02, 0x76, 0x54, 0x32, 0x10, 0x3f, 0x32, 0x10, 0xff ]);
          expect(output).to.deep.equal({
              name: "PRE-FETCH (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x34", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0x76543210", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "PREFETCH LENGTH", bits: 16, value: "0x3210", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a PRE-FETCH (16) command', function(done) {
          var output = scsiCdb.decode([ 0x90, 0x02, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10, 0x76, 0x54, 0x32, 0x10, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "PRE-FETCH (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x90", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xfedcba9876543210", reserved: false, obsolete: false },
                  { name: "PREFETCH LENGTH", bits: 32, value: "0x76543210", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a PREVENT ALLOW MEDIUM REMOVAL command', function(done) {
          var output = scsiCdb.decode([ 0x1e, 0x00, 0x00, 0x00, 0x03, 0xff ]);
          expect(output).to.deep.equal({
              name: "PREVENT ALLOW MEDIUM REMOVAL",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x1e", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "PREVENT", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ (10) command', function(done) {
          var output = scsiCdb.decode([ 0x28, 0xfc, 0x12, 0x34, 0x56, 0x78, 0x3f, 0xde, 0xad, 0xff ]);
          expect(output).to.deep.equal({
              name: "READ (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x28", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "RARC", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "RDPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ (12) command', function(done) {
          var output = scsiCdb.decode([ 0xa8, 0xfc, 0x12, 0x34, 0x56, 0x78, 0xde, 0xad, 0xbe, 0xef, 0xbf, 0xff ]);
          expect(output).to.deep.equal({
              name: "READ (12)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0xa8", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "RARC", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "RDPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Restricted for MMC-6", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ (16) command', function(done) {
          var output = scsiCdb.decode([ 0x88, 0xfd, 0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xff, 0xff ]);
          expect(output).to.deep.equal({
              name: "READ (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x88", reserved: false, obsolete: false },
                  { name: "DLD2", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "RARC", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "RDPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0x123456789abcdef", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "DLD0", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DLD1", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0xff, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x18, 0x00, 0x09, 0xfc, 0x00, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10, 0x10, 0x20, 0x30, 0x40, 0x12, 0x34, 0x56, 0x78, 0xde, 0xad, 0xbe, 0xef ]);
          expect(output).to.deep.equal({
              name: "READ (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0x9", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "RARC", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "RDPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xfedcba9876543210", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x10203040", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0x5678", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ CAPACITY (10) command', function(done) {
          var output = scsiCdb.decode([ 0x25, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "READ CAPACITY (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x25", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 32, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ CAPACITY (16) command', function(done) {
          var output = scsiCdb.decode([ 0x9e, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]); 
          expect(output).to.deep.equal({
              name: "READ CAPACITY (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x10", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 64, value: "0x0", reserved: false, obsolete: true },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ DEFECT DATA (10) command', function(done) {
          var output = scsiCdb.decode([ 0x37, 0x00, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0xff ]);
          expect(output).to.deep.equal({
              name: "READ DEFECT DATA (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x37", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "DEFECT LIST FORMAT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "REQ_GLIST", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "REQ_PLIST", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a READ DEFECT DATA (12) command', function(done) {
          var output = scsiCdb.decode([ 0xb7, 0x1f, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "READ DEFECT DATA (12)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0xb7", reserved: false, obsolete: false },
                  { name: "DEFECT LIST FORMAT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "REQ_GLIST", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "REQ_PLIST", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDRESS DESCRIPTOR INDEX", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      // READ LONG (10)

      // READ LONG (16)

      it('successfully decodes a REASSIGN BLOCKS command', function(done) {
          var output = scsiCdb.decode([ 0x07, 0x3, 0x00, 0x00, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "REASSIGN BLOCKS",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7", reserved: false, obsolete: false },
                  { name: "LONGLIST", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "LONGLBA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      // RECEIVE ROD TOKEN INFORMATION - TBD, POPULATE TOKEN or WRITE USING TOKEN

      it('successfully decodes a REPORT REFERRALS command', function(done) {
          var output = scsiCdb.decode([ 0x9e, 0x13, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x01, 0xff ]);
          expect(output).to.deep.equal({
              name: "REPORT REFERRALS",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x13", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "ONE_SEG", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a REPORT REFERRALS command', function(done) {
          var output = scsiCdb.decode([ 0x9e, 0x13, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x01, 0xff ]);
          expect(output).to.deep.equal({
              name: "REPORT REFERRALS",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x13", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "ONE_SEG", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a REPORT PROVISIONING INITIALZATION PATTERN command', function(done) {
          var output = scsiCdb.decode([ 0x3a, 0x1d, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0x56, 0x78, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "REPORT PROVISIONING INITIALZATION PATTERN",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x3a", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x1d", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "ALLOCATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a SANITIZE command', function(done) {
          var output = scsiCdb.decode([ 0x48, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xff ]);
          expect(output).to.deep.equal({
              name: "SANITIZE",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x48", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x1f", reserved: false, obsolete: false },
                  { name: "AUSE", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "ZNR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 40, value: "0x0", reserved: true, obsolete: false },
                  { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a START STOP UNIT command', function(done) {
          var output = scsiCdb.decode([ 0x1b, 0x01, 0x00, 0x0f, 0xf7, 0xff ]);
          expect(output).to.deep.equal({
              name: "START STOP UNIT",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x1b", reserved: false, obsolete: false },
                  { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "POWER CONDITION MODIFIER", bits: 4, value: "0xf", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 4, value: "0x0", reserved: true, obsolete: false },
                  { name: "START", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "LOEJ", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "NO_FLUSH", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "POWER CONDITION", bits: 4, value: "0xf", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a STREAM CONTROL command', function(done) {
          var output = scsiCdb.decode([ 0x9e, 0x74, 0x00, 0x00, 0xde, 0xad, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "STREAM CONTROL",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x14", reserved: false, obsolete: false },
                  { name: "STR_CTL", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "STR_ID", bits: 16, value: "0xdead", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 72, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });
 
      it('successfully decodes a SYNCHRONIZE CACHE (10) command', function(done) {
          var output = scsiCdb.decode([ 0x35, 0x02, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0xde, 0xad, 0xff ]);
          expect(output).to.deep.equal({
              name: "SYNCHRONIZE CACHE (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x35", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 5, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "NUMBER OF LOGICAL BLOCKS", bits: 16, value: "0xdead", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a SYNCHRONIZE CACHE (16) command', function(done) {
          var output = scsiCdb.decode([ 0x91, 0x02, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "SYNCHRONIZE CACHE (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x91", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 5, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "NUMBER OF LOGICAL BLOCKS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a UNMAP command', function(done) {
          var output = scsiCdb.decode([ 0x42, 0x01, 0x00, 0x00, 0x00, 0x00, 0x3f, 0xde, 0xad, 0xff ]);
          expect(output).to.deep.equal({
              name: "UNMAP",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x42", reserved: false, obsolete: false },
                  { name: "ANCHOR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a VERIFY (10) command', function(done) {
          var output = scsiCdb.decode([ 0x2f, 0xf6, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0x2b, 0xb2, 0x12 ]);
          expect(output).to.deep.equal({
              name: "VERIFY (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x2f", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "VRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Restricted for MMC-6", bits: 1, value: "0x0", reserved: false, obsolete: false },
                  { name: "VERIFICATION LENGTH", bits: 16, value: "0x2bb2", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0x12", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a VERIFY (12) command', function(done) {
          var output = scsiCdb.decode([ 0xaf, 0xf6, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "VERIFY (12)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0xaf", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "VRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "VERIFICATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a VERIFY (16) command', function(done) {
          var output = scsiCdb.decode([ 0x8f, 0xf6, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "VERIFY (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x8f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "VRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "VERIFICATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a VERIFY (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0xff, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x18, 0x00, 0x0a, 0xf6, 0x00, 0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0, 0x10, 0x20, 0x30, 0x40, 0x50, 0x60, 0xff, 0xff, 0x12, 0x34, 0x56, 0x78 ]);
          expect(output).to.deep.equal({
              name: "VERIFY (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0xa", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "VRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0x123456789abcdef0", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x10203040", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x5060", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "VERIFICATION LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE (10) command', function(done) {
          var output = scsiCdb.decode([ 0x2a, 0xf8, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0x12, 0x34, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x2a", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE (12) command', function(done) {
          var output = scsiCdb.decode([ 0xaa, 0xf8, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0xbf, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE (12)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0xaa", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Restricted for MMC-6", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE (16) command', function(done) {
          var output = scsiCdb.decode([ 0x8a, 0xf9, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0xff, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x8a", reserved: false, obsolete: false },
                  { name: "DLD2", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "DLD0", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DLD1", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x0b, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0xff, 0xff, 0x00, 0x00, 0x00, 0x08 ]);
          expect(output).to.deep.equal({
              name: "WRITE (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0xb", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x0", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x0", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0x200", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x1020304", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x506", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x8", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE AND VERIFY (10) command', function(done) {
          var output = scsiCdb.decode([ 0x2e, 0xf6, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0x12, 0x34, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE AND VERIFY (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x2e", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE AND VERIFY (12) command', function(done) {
          var output = scsiCdb.decode([ 0xae, 0xf6, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE AND VERIFY (12)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0xae", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE AND VERIFY (16) command', function(done) {
          var output = scsiCdb.decode([ 0x8e, 0xf6, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE AND VERIFY (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x8e", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "BYTCHK", bits: 2, value: "0x3", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE AND VERIFY (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x0c, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0xff, 0xff, 0x00, 0x00, 0x00, 0x08 ]);
          expect(output).to.deep.equal({
              name: "WRITE AND VERIFY (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0xc", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "BYTCHK", bits: 2, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x0", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0x200", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x1020304", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x506", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x8", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE ATOMIC (16) command', function(done) {
          var output = scsiCdb.decode([ 0x9c, 0xf8, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x2b, 0x2b, 0xb2, 0xb2, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE ATOMIC (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9c", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "ATOMIC BOUNDARY", bits: 16, value: "0x2b2b", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0xb2b2", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE ATOMIC (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0xff, 0x00, 0x00, 0xff, 0xff, 0x3f, 0x18, 0x00, 0x0f, 0xf8, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0xff, 0xff, 0x00, 0x00, 0x00, 0x08 ]);
          expect(output).to.deep.equal({
              name: "WRITE ATOMIC (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "ATOMIC BOUNDARY", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0xf", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x1020304", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x506", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x8", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE LONG (10) command', function(done) {
          var output = scsiCdb.decode([ 0x3f, 0x40, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE LONG (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 4, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "WR_UNCOR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 16, value: "0x0", reserved: false, obsolete: true },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE LONG (16) command', function(done) {
          var output = scsiCdb.decode([ 0x9f, 0x51, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE LONG (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9f", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x11", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "WR_UNCOR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "Obsolete", bits: 16, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE SAME (10) command', function(done) {
          var output = scsiCdb.decode([ 0x41, 0xf8, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0x12, 0x34, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE SAME (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x41", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 3, value: "0x0", reserved: false, obsolete: true },
                  { name: "UNMAP", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "ANCHOR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "NUMBER OF LOGICAL BLOCKS", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE SAME (16) command', function(done) {
          var output = scsiCdb.decode([ 0x93, 0xf9, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x56, 0x78, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE SAME (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x93", reserved: false, obsolete: false },
                  { name: "NDOB", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 2, value: "0x0", reserved: false, obsolete: true },
                  { name: "UNMAP", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "ANCHOR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "NUMBER OF LOGICAL BLOCKS", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE SAME (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x0d, 0xf9, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x10, 0x20, 0x30, 0x40, 0x50, 0x60, 0xff, 0xff, 0x12, 0x34, 0x56, 0x78 ]);
          expect(output).to.deep.equal({
              name: "WRITE SAME (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0xd", reserved: false, obsolete: false },
                  { name: "NDOB", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 2, value: "0x0", reserved: false, obsolete: true },
                  { name: "UNMAP", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "ANCHOR", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x10203040", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x5060", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "NUMBER OF LOGICAL BLOCKS", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE STREAM (16) command', function(done) {
          var output = scsiCdb.decode([ 0x9a, 0xf8, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34, 0x2b, 0xb2, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE STREAM (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x9a", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "STR_ID", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0x2bb2", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE STREAM (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0x00, 0x00, 0x00, 0x12, 0x34, 0x00, 0x18, 0x00, 0x10, 0xf8, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x10, 0x20, 0x30, 0x40, 0x50, 0x60, 0xff, 0xff, 0x12, 0x34, 0x56, 0x78 ]);
          expect(output).to.deep.equal({
              name: "WRITE STREAM (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
                  { name: "STR_ID", bits: 16, value: "0x1234", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0x10", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", bits: 32, value: "0x10203040", reserved: false, obsolete: false },
                  { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", bits: 16, value: "0x5060", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK APPLICATION TAG MASK", bits: 16, value: "0xffff", reserved: false, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a WRITE USING TOKEN command', function(done) {
          var output = scsiCdb.decode([ 0x83, 0x11, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0x56, 0x78, 0x2b, 0xb2, 0x2b, 0xb2, 0x3f, 0xff ]);
          expect(output).to.deep.equal({
              name: "WRITE USING TOKEN",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x83", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 5, value: "0x11", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "LIST IDENTIFIER", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "PARAMETER LIST LENGTH", bits: 32, value: "0x2bb22bb2", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a XDWRITEREAD (10) command', function(done) {
          var output = scsiCdb.decode([ 0x53, 0xfd, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0x2b, 0xb2, 0xff ]);
          expect(output).to.deep.equal({
              name: "XDWRITEREAD (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x53", reserved: false, obsolete: false },
                  { name: "XORPINFO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "DISABLE WRITE", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0x2bb2", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a XDWRITEREAD (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0xff, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x18, 0x00, 0x07, 0xfd, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0x56, 0x78 ]);
          expect(output).to.deep.equal({
              name: "XDWRITEREAD (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0x7", reserved: false, obsolete: false },
                  { name: "XORPINFO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "DISABLE WRITE", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "WRPROTECT", bits: 3, value: "0x7", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 64, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a XPWRITE (10) command', function(done) {
          var output = scsiCdb.decode([ 0x51, 0x19, 0xde, 0xad, 0xbe, 0xef, 0x3f, 0x2b, 0xb2, 0xff ]);
          expect(output).to.deep.equal({
              name: "XPWRITE (10)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x51", reserved: false, obsolete: false },
                  { name: "XORPINFO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 16, value: "0x2bb2", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('successfully decodes a XPWRITE (32) command', function(done) {
          var output = scsiCdb.decode([ 0x7f, 0xff, 0x00, 0x00, 0x00, 0x00, 0x3f, 0x18, 0x00, 0x06, 0x19, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0x56, 0x78 ]);
          expect(output).to.deep.equal({
              name: "XPWRITE (32)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x7f", reserved: false, obsolete: false },
                  { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
                  { name: "GROUP NUMBER", bits: 6, value: "0x3f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
                  { name: "ADDITIONAL CDB LENGTH", bits: 8, value: "0x18", reserved: false, obsolete: false },
                  { name: "SERVICE ACTION", bits: 16, value: "0x6", reserved: false, obsolete: false },
                  { name: "XORPINFO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "FUA", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x1", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
                  { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0xdeadbeefdeadbeef", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 64, value: "0x0", reserved: true, obsolete: false },
                  { name: "TRANSFER LENGTH", bits: 32, value: "0x12345678", reserved: false, obsolete: false },
              ],
              truncated: false,
          });
          done();
      });

      it('partially decodes a truncated VERIFY (16) command', function(done) {
          var output = scsiCdb.decode([ 0x8f, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x34, 0x56, 0x78, 0x00, 0x00, 0x00, 0x07 ]);
          expect(output).to.deep.equal({
              name: "VERIFY (16)",
              fields: [
                  { name: "OPERATION CODE", bits: 8, value: "0x8f", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "BYTCHK", bits: 2, value: "0x0", reserved: false, obsolete: false },
                  { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
                  { name: "DPO", bits: 1, value: "0x0", reserved: false, obsolete: false },
                  { name: "VRPROTECT", bits: 3, value: "0x0", reserved: false, obsolete: false },
                  { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0x12345678", reserved: false, obsolete: false },
                  { name: "VERIFICATION LENGTH", bits: 32, value: "0x7", reserved: false, obsolete: false },
              ],
              truncated: true,
          });
          done();
      });
    });
  });
});
