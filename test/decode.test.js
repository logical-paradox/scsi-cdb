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
            { name: "OPERATION CODE", value: "0", reserved: false, obsolete: false },
            { name: "Reserved", value: "0", reserved: true, obsolete: false },
            { name: "CONTROL", value: "0", reserved: false, obsolete: false },
          ],
          truncated: false,
        });
        done();
      });

        it('should decode a READ (16) message successfully', function(done) {
            var output = scsiCdb.decode([ 0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x23, 0x45, 0x67, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00 ]);
            expect(output).to.deep.equal({
                name: "READ (16)",
                fields: [
                    { name: "OPERATION CODE", value: "88", reserved: false, obsolete: false },
                    { name: "DLD2", value: "0", reserved: false, obsolete: false },
                    { name: "Obsolete", value: "0", reserved: false, obsolete: true },
                    { name: "RARC", value: "0", reserved: false, obsolete: false },
                    { name: "FUA", value: "0", reserved: false, obsolete: false },
                    { name: "DPO", value: "0", reserved: false, obsolete: false },
                    { name: "RDPROTECT", value: "0", reserved: false, obsolete: false },
                    { name: "LOGICAL BLOCK ADDRESS", value: "1234567", reserved: false, obsolete: false },
                    { name: "TRANSFER LENGTH", value: "8", reserved: false, obsolete: false },
                    { name: "GROUP NUMBER", value: "0", reserved: false, obsolete: false },
                    { name: "DLD0", value: "0", reserved: false, obsolete: false },
                    { name: "DLD1", value: "0", reserved: false, obsolete: false },
                    { name: "CONTROL", value: "0", reserved: false, obsolete: false },
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
                    { name: "OPERATION CODE", value: "8f", reserved: false, obsolete: false },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "BYTCHK", value: "0", reserved: false, obsolete: false },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "DPO", value: "0", reserved: false, obsolete: false },
                    { name: "VRPROTECT", value: "0", reserved: false, obsolete: false },
                    { name: "LOGICAL BLOCK ADDRESS", value: "12345678", reserved: false, obsolete: false },
                    { name: "VERIFICATION LENGTH", value: "7", reserved: false, obsolete: false },
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
                    { name: "OPERATION CODE", value: "7f", reserved: false, obsolete: false },
                    { name: "CONTROL", value: "0", reserved: false, obsolete: false },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "GROUP NUMBER", value: "0", reserved: false, obsolete: false },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "ADDITIONAL CDB LENGTH", value: "18", reserved: false, obsolete: false },
                    { name: "SERVICE ACTION", value: "b", reserved: false, obsolete: false },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "Obsolete", value: "0", reserved: false, obsolete: true },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "FUA", value: "0", reserved: false, obsolete: false },
                    { name: "DPO", value: "0", reserved: false, obsolete: false },
                    { name: "WRPROTECT", value: "1", reserved: false, obsolete: false },
                    { name: "Reserved", value: "0", reserved: true, obsolete: false },
                    { name: "LOGICAL BLOCK ADDRESS", value: "200", reserved: false, obsolete: false },
                    { name: "EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG", value: "1020304", reserved: false, obsolete: false },
                    { name: "EXPECTED LOGICAL BLOCK APPLICATION TAG", value: "506", reserved: false, obsolete: false },
                    { name: "LOGICAL BLOCK APPLICATION TAG MASK", value: "ffff", reserved: false, obsolete: false },
                    { name: "TRANSFER LENGTH", value: "8", reserved: false, obsolete: false },
                ],
                truncated: false,
            });
            done();
        });
    });
  });
});
