var chai = require('chai');
var expect = chai.expect;
var ScsiCdb = require('../scsi-cdb');
var scsiCdb = new ScsiCdb(); // { 'logLevel': 'debug' });

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

    describe('SCSI Primary Commands', function() {
      it('successfully decodes a BIND command', function(done) {
        var output = scsiCdb.decode([ 0x9f, 0x0e, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0x00, 0x2b ]);
        expect(output).to.deep.equal({
          name: "BIND",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9f", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xe", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "NRD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 72, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0x2b", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a CHANGE ALIASES command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x0b, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "CHANGE ALIASES",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xb", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a COPY OPERATION ABORT command', function(done) {
        var output = scsiCdb.decode([ 0x83, 0x1c, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "COPY OPERATION ABORT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x83", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1c", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "LIST IDENTIFIER", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 72, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a COPY OPERATION CLOSE command', function(done) {
        var output = scsiCdb.decode([ 0x83, 0x1d, 0xde, 0xad, 0xbe, 0xef, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "COPY OPERATION CLOSE",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x83", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1d", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "LIST IDENTIFIER", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "IMMED", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "TO_MED", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 64, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes an EXTENDED COPY command', function(done) {
        var output = scsiCdb.decode([ 0x83, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "EXTENDED COPY",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x83", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 64, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes an INQUIRY command', function(done) {
        var output = scsiCdb.decode([ 0x12, 0x01, 0xff, 0xde, 0xad, 0x2b ]);
        expect(output).to.deep.equal({
          name: "INQUIRY",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x12", reserved: false, obsolete: false },
            { name: "EVPD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "PAGE CODE", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0x2b", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a LOG SELECT command', function(done) {
        var output = scsiCdb.decode([ 0x4c, 0x03, 0xff, 0x2b, 0x00, 0x00, 0x00, 0xde, 0xad, 0xff ]);
        expect(output).to.deep.equal({
          name: "LOG SELECT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x4c", reserved: false, obsolete: false },
            { name: "SP", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "PCR", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "PAGE CODE", bits: 6, value: "0x3f", reserved: false, obsolete: false },
            { name: "PC", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "SUBPAGE CODE", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a LOG SENSE command', function(done) {
        var output = scsiCdb.decode([ 0x4d, 0x01, 0xff, 0x2b, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xff ]);
        expect(output).to.deep.equal({
          name: "LOG SENSE",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x4d", reserved: false, obsolete: false },
            { name: "SP", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "PAGE CODE", bits: 6, value: "0x3f", reserved: false, obsolete: false },
            { name: "PC", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "SUBPAGE CODE", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER POINTER", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 16, value: "0xbeef", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a MANAGEMENT PROTOCOL IN command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x10, 0x2b, 0xde, 0xad, 0xbe, 0x2b, 0xb2, 0x1c, 0xc1, 0x2b, 0xff ]);
        expect(output).to.deep.equal({
          name: "MANAGEMENT PROTOCOL IN",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x10", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "MANAGEMENT PROTOCOL", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "MANAGEMENT PROTOCOL SPECIFIC1", bits: 24, value: "0xdeadbe", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0x2bb21cc1", reserved: false, obsolete: false },
            { name: "MANAGEMENT PROTOCOL SPECIFIC2", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a MANAGEMENT PROTOCOL OUT command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x10, 0x2b, 0xde, 0xad, 0xbe, 0x2b, 0xb2, 0x1c, 0xc1, 0x2b, 0xff ]);
        expect(output).to.deep.equal({
          name: "MANAGEMENT PROTOCOL OUT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x10", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "MANAGEMENT PROTOCOL", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "MANAGEMENT PROTOCOL SPECIFIC1", bits: 24, value: "0xdeadbe", reserved: false, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0x2bb21cc1", reserved: false, obsolete: false },
            { name: "MANAGEMENT PROTOCOL SPECIFIC2", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a MODE SELECT (6) command', function(done) {
        var output = scsiCdb.decode([ 0x15, 0x13, 0x00, 0x00, 0x2b, 0xff ]);
        expect(output).to.deep.equal({
          name: "MODE SELECT (6)",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x15", reserved: false, obsolete: false },
            { name: "SP", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "RTD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
            { name: "PF", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a MODE SELECT (10) command', function(done) {
        var output = scsiCdb.decode([ 0x55, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xff ]);
        expect(output).to.deep.equal({
          name: "MODE SELECT (10)",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x55", reserved: false, obsolete: false },
            { name: "SP", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "RTD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 2, value: "0x0", reserved: true, obsolete: false },
            { name: "PF", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 40, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a MODE SENSE (6) command', function(done) {
        var output = scsiCdb.decode([ 0x1a, 0x08, 0xff, 0x2b, 0xb2, 0xff ]);
        expect(output).to.deep.equal({
          name: "MODE SENSE (6)",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x1a", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "DBD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 4, value: "0x0", reserved: true, obsolete: false },
            { name: "PAGE CODE", bits: 6, value: "0x3f", reserved: false, obsolete: false },
            { name: "PC", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "SUBPAGE CODE", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 8, value: "0xb2", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a MODE SENSE (10) command', function(done) {
        var output = scsiCdb.decode([ 0x5a, 0x18, 0xff, 0x2b, 0x00, 0x00, 0x00, 0xbe, 0xef, 0xff ]);
        expect(output).to.deep.equal({
          name: "MODE SENSE (10)",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x5a", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "DBD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "LLBAA", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "PAGE CODE", bits: 6, value: "0x3f", reserved: false, obsolete: false },
            { name: "PC", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "SUBPAGE CODE", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 16, value: "0xbeef", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a PERSISTENT RESERVE IN command', function(done) {
        var output = scsiCdb.decode([ 0x5e, 0x1f, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xff ]);
        expect(output).to.deep.equal({
          name: "PERSISTENT RESERVE IN",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x5e", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1f", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 40, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a PERSISTENT RESERVE OUT command', function(done) {
        var output = scsiCdb.decode([ 0x5f, 0x1f, 0xff, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0xff ]);
        expect(output).to.deep.equal({
          name: "PERSISTENT RESERVE OUT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x5f", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1f", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "TYPE", bits: 4, value: "0xf", reserved: false, obsolete: false },
            { name: "SCOPE", bits: 4, value: "0xf", reserved: false, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a PREPARE BINDING REPORT command', function(done) {
        var output = scsiCdb.decode([ 0x9f, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "PREPARE BINDING REPORT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9f", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xc", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 80, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a READ ATTRIBUTE command', function(done) {
        var output = scsiCdb.decode([ 0x8c, 0x1f, 0x00, 0x00, 0x00, 0x2b, 0x00, 0xb2, 0xde, 0xad, 0xbe, 0xef, 0xfe, 0xed, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "READ ATTRIBUTE",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x8c", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1f", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Restricted (see SMC-3)", bits: 24, value: "0x0", reserved: false, obsolete: false },
            { name: "LOGICAL VOLUME NUMBER", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "PARTITION NUMBER", bits: 8, value: "0xb2", reserved: false, obsolete: false },
            { name: "FIRST ATTRIBUTE IDENTIFIER", bits: 16, value: "0xdead", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xbeeffeed", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a READ BUFFER (10) command', function(done) {
        var output = scsiCdb.decode([ 0x3c, 0xff, 0x2b, 0xfe, 0xed, 0xfa, 0xce, 0xbe, 0xef, 0xff ]);
        expect(output).to.deep.equal({
          name: "READ BUFFER (10)",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x3c", reserved: false, obsolete: false },
            { name: "MODE", bits: 5, value: "0x1f", reserved: false, obsolete: false },
            { name: "MODE SPECIFIC", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "BUFFER ID", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "BUFFER OFFSET", bits: 24, value: "0xfeedfa", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 24, value: "0xcebeef", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a READ BUFFER (16) command', function(done) {
        var output = scsiCdb.decode([ 0x9b, 0xff, 0xde, 0xad, 0xbe, 0xef, 0xfe, 0xed, 0xfa, 0xce, 0x2b, 0xb2, 0x1c, 0xc1, 0x2b, 0xff ]);
        expect(output).to.deep.equal({
          name: "READ BUFFER (16)",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9b", reserved: false, obsolete: false },
            { name: "MODE", bits: 5, value: "0x1f", reserved: false, obsolete: false },
            { name: "MODE SPECIFIC", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "BUFFER OFFSET", bits: 64, value: "0xdeadbeeffeedface", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0x2bb21cc1", reserved: false, obsolete: false },
            { name: "BUFFER ID", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },

          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a READ MEDIA SERIAL NUMBER command', function(done) {
        var output = scsiCdb.decode([ 0xab, 0x01, 0x00, 0x00, 0x00, 0x00, 0xfe, 0xed, 0xfa, 0xce, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "READ MEDIA SERIAL NUMBER",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xab", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xfeedface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a RECEIVE BINDING REPORT command', function(done) {
        var output = scsiCdb.decode([ 0x9e, 0x0f, 0x00, 0x00, 0xfe, 0xed, 0xfa, 0xce, 0x00, 0x00, 0x00, 0x00, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE BINDING REPORT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9e", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xf", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "BINDING LIST IDENTIFIER", bits: 32, value: "0xfeedface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 16, value: "0xbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a RECEIVE COPY DATA command', function(done) {
        var output = scsiCdb.decode([ 0x84, 0x06, 0xfe, 0xed, 0xfa, 0xce, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE COPY DATA",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x84", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x6", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "LIST IDENTIFIER", bits: 32, value: "0xfeedface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a RECEIVE COPY STATUS command', function(done) {
        var output = scsiCdb.decode([ 0x84, 0x05, 0xfe, 0xed, 0xfa, 0xce, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE COPY STATUS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x84", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x5", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "LIST IDENTIFIER", bits: 32, value: "0xfeedface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a RECEIVE DIAGNOSTIC RESULTS command', function(done) {
        var output = scsiCdb.decode([ 0x1c, 0x01, 0x2b, 0xfe, 0xed, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE DIAGNOSTIC RESULTS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x1c", reserved: false, obsolete: false },
            { name: "PCV", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "PAGE CODE", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a RECEIVE ROD TOKEN INFORMATION command', function(done) {
        var output = scsiCdb.decode([ 0x84, 0x07, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00, 0x00, 0x00, 0x2b, 0xb2, 0x3c, 0xc3, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE ROD TOKEN INFORMATION",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x84", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x7", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "LIST IDENTIFIER", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0x2bb23cc3", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REMOVE I_T NEXUS command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x0c, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE I_T NEXUS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xc", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT ALIASES command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x0b, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT ALIASES",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xb", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT ALL ROD TOKENS command', function(done) {
        var output = scsiCdb.decode([ 0x84, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "RECEIVE ALL ROD TOKENS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x84", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x8", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 64, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT IDENTIFYING INFORMATION command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x05, 0x00, 0x00, 0xaa, 0xbb, 0xde, 0xad, 0xbe, 0xef, 0xfe, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT IDENTIFYING INFORMATION",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x5", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "Restricted (see SCC-2)", bits: 16, value: "0xaabb", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
            { name: "IDENTIFYING INFORMATION TYPE", bits: 7, value: "0x7f", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT LUNS command', function(done) {
        var output = scsiCdb.decode([ 0xa0, 0x00, 0xff, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT LUNS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa0", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "SELECT REPORT", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT PRIORITY command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x0e, 0xc0, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT PRIORITY",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xe", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "PRIORITY REPORTED", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT SUPPORTED OPERATION CODES command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x0c, 0x87, 0x2b, 0xfe, 0xed, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT SUPPORTED OPERATION CODES",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xc", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "REPORTING OPTIONS", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "Reserved", bits: 4, value: "0x0", reserved: true, obsolete: false },
            { name: "RCTD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "REQUESTED OPERATION CODE", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "REQUESTED SERVICE ACTION", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT SUPPORTED TASK MANAGEMENT FUNCTIONS command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x0d, 0x80, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT SUPPORTED TASK MANAGEMENT FUNCTIONS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xd", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "REPD", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT TARGET PORT GROUPS command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0xea, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT TARGET PORT GROUPS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xa", reserved: false, obsolete: false },
            { name: "PARAMETER DATA FORMAT", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REPORT TIMESTAMP command', function(done) {
        var output = scsiCdb.decode([ 0xa3, 0x0f, 0x00, 0x00, 0x00, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "REPORT TIMESTAMP",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa3", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xf", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a REQUEST SENSE command', function(done) {
        var output = scsiCdb.decode([ 0x03, 0x01, 0x00, 0x00, 0x2b, 0xff ]);
        expect(output).to.deep.equal({
          name: "REQUEST SENSE",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x3", reserved: false, obsolete: false },
            { name: "DESC", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SECURITY PROTOCOL IN command', function(done) {
        var output = scsiCdb.decode([ 0xa2, 0xff, 0xfe, 0xed, 0x80, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "SECURITY PROTOCOL IN",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa2", reserved: false, obsolete: false },
            { name: "SECURITY PROTOCOL", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "SECURITY PROTOCOL SPECIFIC", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "INC_512", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "ALLOCATION LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SECURITY PROTOCOL OUT command', function(done) {
        var output = scsiCdb.decode([ 0xb5, 0xff, 0xfe, 0xed, 0x80, 0x00, 0xde, 0xad, 0xbe, 0xef, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "SECURITY PROTOCOL OUT",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xb5", reserved: false, obsolete: false },
            { name: "SECURITY PROTOCOL", bits: 8, value: "0xff", reserved: false, obsolete: false },
            { name: "SECURITY PROTOCOL SPECIFIC", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "INC_512", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "TRANSFER LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SEND DIAGNOSTIC command', function(done) {
        var output = scsiCdb.decode([ 0x1d, 0xf7, 0x00, 0xfe, 0xed, 0xff ]);
        expect(output).to.deep.equal({
          name: "SEND DIAGNOSTIC",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x1d", reserved: false, obsolete: false },
            { name: "UNITOFFL", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "DEVOFFL", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "SELFTEST", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
            { name: "PF", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "SELF-TEST CODE", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SET AFFILIATION command', function(done) {
        var output = scsiCdb.decode([ 0x9f, 0x0d, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xfe, 0xed, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "SET AFFILIATION",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9f", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xd", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 64, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SET IDENTIFYING INFORMATION command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x06, 0x00, 0x00, 0xfe, 0xed, 0xfa, 0xce, 0xd0, 0x0d, 0xfe, 0xff ]);
        expect(output).to.deep.equal({
          name: "SET IDENTIFYING INFORMATION",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0x6", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "Restricted (see SCC-2)", bits: 16, value: "0xfeed", reserved: false, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xfaced00d", reserved: false, obsolete: false },
            { name: "Reserved", bits: 1, value: "0x0", reserved: true, obsolete: false },
            { name: "IDENTIFYING INFORMATION TYPE", bits: 7, value: "0x7f", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SET PRIORITY command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x0e, 0xc0, 0x00, 0x00, 0x00, 0xfa, 0xce, 0xd0, 0x0d, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "SET PRIORITY",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xe", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 6, value: "0x0", reserved: true, obsolete: false },
            { name: "I_T_L NEXUS TO SET", bits: 2, value: "0x3", reserved: false, obsolete: false },
            { name: "Reserved", bits: 24, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xfaced00d", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SET TARGET PORT GROUPS command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x0a, 0x00, 0x00, 0x00, 0x00, 0xfa, 0xce, 0xd0, 0x0d, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "SET TARGET PORT GROUPS",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xa", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xfaced00d", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a SET TIMESTAMP command', function(done) {
        var output = scsiCdb.decode([ 0xa4, 0x0f, 0x00, 0x00, 0x00, 0x00, 0xfa, 0xce, 0xd0, 0x0d, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "SET TIMESTAMP",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0xa4", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xf", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 32, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xfaced00d", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a TEST BIND command', function(done) {
        var output = scsiCdb.decode([ 0x9f, 0x0b, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xfa, 0xce, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "TEST BIND",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9f", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xb", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 80, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

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

      it('successfully decodes a UNBIND command', function(done) {
        var output = scsiCdb.decode([ 0x9f, 0x0f, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xfa, 0xce, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "UNBIND",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x9f", reserved: false, obsolete: false },
            { name: "SERVICE ACTION", bits: 5, value: "0xf", reserved: false, obsolete: false },
            { name: "Reserved", bits: 3, value: "0x0", reserved: true, obsolete: false },
            { name: "ALL CONG", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "Reserved", bits: 72, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 16, value: "0xface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a WRITE ATTRIBUTE command', function(done) {
        var output = scsiCdb.decode([ 0x8d, 0x01, 0x0d, 0xd0, 0x0d, 0x2b, 0x00, 0xb2, 0x00, 0x00, 0xfe, 0xed, 0xfa, 0xce, 0x00, 0xff ]);
        expect(output).to.deep.equal({
          name: "WRITE ATTRIBUTE",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x8d", reserved: false, obsolete: false },
            { name: "WTC", bits: 1, value: "0x1", reserved: false, obsolete: false },
            { name: "Reserved", bits: 7, value: "0x0", reserved: true, obsolete: false },
            { name: "Restricted (see SMC-3)", bits: 24, value: "0xdd00d", reserved: false, obsolete: false },
            { name: "LOGICAL VOLUME NUMBER", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "PARTITION NUMBER", bits: 8, value: "0xb2", reserved: false, obsolete: false },
            { name: "Reserved", bits: 16, value: "0x0", reserved: true, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 32, value: "0xfeedface", reserved: false, obsolete: false },
            { name: "Reserved", bits: 8, value: "0x0", reserved: true, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

      it('successfully decodes a WRITE BUFFER command', function(done) {
        var output = scsiCdb.decode([ 0x3b, 0xff, 0x2b, 0x0d, 0xd0, 0x0d, 0x2b, 0xb2, 0x2b, 0xff ]);
        expect(output).to.deep.equal({
          name: "WRITE BUFFER",
          fields: [
            { name: "OPERATION CODE", bits: 8, value: "0x3b", reserved: false, obsolete: false },
            { name: "MODE", bits: 5, value: "0x1f", reserved: false, obsolete: false },
            { name: "MODE SPECIFIC", bits: 3, value: "0x7", reserved: false, obsolete: false },
            { name: "BUFFER ID", bits: 8, value: "0x2b", reserved: false, obsolete: false },
            { name: "BUFFER OFFSET", bits: 24, value: "0xdd00d", reserved: false, obsolete: false },
            { name: "PARAMETER LIST LENGTH", bits: 24, value: "0x2bb22b", reserved: false, obsolete: false },
            { name: "CONTROL", bits: 8, value: "0xff", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });
    });

    describe('SCSI Block Commands', function() {
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
