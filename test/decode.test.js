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
      it('successfully decodes a Test Unit Ready message', function(done) {
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

        it('should decode a READ (16) message successfully', function(done) {
            var output = scsiCdb.decode([ 0x88, 0x00, 0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00 ]);
            expect(output).to.deep.equal({
                name: "READ (16)",
                fields: [
                    { name: "OPERATION CODE", bits: 8, value: "0x88", reserved: false, obsolete: false },
                    { name: "DLD2", bits: 1, value: "0x0", reserved: false, obsolete: false },
                    { name: "Obsolete", bits: 1, value: "0x0", reserved: false, obsolete: true },
                    { name: "RARC", bits: 1, value: "0x0", reserved: false, obsolete: false },
                    { name: "FUA", bits: 1, value: "0x0", reserved: false, obsolete: false },
                    { name: "DPO", bits: 1, value: "0x0", reserved: false, obsolete: false },
                    { name: "RDPROTECT", bits: 3, value: "0x0", reserved: false, obsolete: false },
                    { name: "LOGICAL BLOCK ADDRESS", bits: 64, value: "0x123456789abcdef", reserved: false, obsolete: false },
                    { name: "TRANSFER LENGTH", bits: 32, value: "0xdeadbeef", reserved: false, obsolete: false },
                    { name: "GROUP NUMBER", bits: 6, value: "0x0", reserved: false, obsolete: false },
                    { name: "DLD0", bits: 1, value: "0x0", reserved: false, obsolete: false },
                    { name: "DLD1", bits: 1, value: "0x0", reserved: false, obsolete: false },
                    { name: "CONTROL", bits: 8, value: "0x0", reserved: false, obsolete: false },
                ],
                truncated: false,
            });
            done();
        });

        it('should partially decode a truncated VERIFY (16) message successfully', function(done) {
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

        it('should decode a WRITE (32) message successfully', function(done) {
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

        it('should decode a VERIFY (10) message successfully', function(done) {
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
    });
  });
});
