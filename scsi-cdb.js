'use strict';

var printf = require('printf');
var bigInt = require('big-integer');
var logger = require('winston');
var cdbDescriptors = require('./cdb-descriptors');
var beEvil = true;

class ScsiCdb {
    constructor(args) {
        if (args !== undefined) {
            logger.level = args.logLevel;
        }
    }

    encode() {
        throw new Error('Unimplemented');
    }

    /**
     * @param inputArray Array of bytes - the encoded message.
     * @param fieldLength - the length in bits of the field to extract.
     * @param byteOffset - Byte offset at which the field starts.
     * @param bitOffset - Bit offset within the byte at which the field starts.
     *
     */
    getField(inputArray, fieldLength, byteOffset, bitOffset) {
        var startBit = (byteOffset * 8) + bitOffset;
        var endBit = startBit + fieldLength - 1; // -1 is because we want the index of the last bit rather than the number of bits.
        var endByte = parseInt((endBit) / 8);

        if ((endBit + 1) % 8 > 0) {
            endByte++;
        }

        if (endByte < inputArray.length) {
            // Now we know the input array is long enough for use to extract the
            // field from.
            let value = bigInt();

            let byteIndex = byteOffset;
            let bitIndex = bitOffset;
            let bitsLeft = fieldLength;

            while (bitsLeft > 0) {
                let bitsAvailableInCurrentByte = (8 - bitIndex);
                let bitsToDecode;
                if (bitsLeft > bitsAvailableInCurrentByte) {
                    bitsToDecode = bitsAvailableInCurrentByte;
                } else {
                    bitsToDecode = bitsLeft;
                }

                // Now the first part of the decoding - we take the byte at the
                // current byteOffset, and right-shift it by bitOffset bits.  We
                // then need to mask off just bitsToDecode bits of it.
                let bitmask = (1 << bitsToDecode) - 1;
                let v = inputArray[byteIndex];
                v = v >> bitIndex;
                v = v & bitmask;

                // Assume that we decode in MSB -> LSB order, so
                // before ORing in the new value, left-shift the
                // existing value to make space for it.
                value = value.shiftLeft(bitsToDecode).or(v);

                bitsLeft -= bitsToDecode;

                bitIndex += bitsToDecode;
                if (bitIndex > 7) {
                    bitIndex = 0;
                    byteIndex++;
                }
            }

            return value;
        } else {
            throw new Error('Input truncated');
        }
    }


    getFieldByName(encodedCdb, cdbDescriptor, fieldName) {
        // Search the fields in the CDB for one matching fieldName,
        // then extract it from the encoded CDB

        let field = cdbDescriptor.fields.find((field) => {
            return field.name == fieldName;
        });

        if (field === undefined) {
            return undefined;
        } else {
            return this.getField(encodedCdb, field.length, field.byte, field.bit);
        }
    }

    getFieldExpectedValue(cdbDescriptor, fieldName) {
        let field = cdbDescriptor.fields.find((field) => {
            return field.name == fieldName;
        });

        if (field === undefined) {
            return undefined;
        } else {
            return bigInt(field.value);
        }
    }

    decode(input) {
        if (input == null) {
            throw new Error('Invalid input');
        }

        if (!(input instanceof Array)) {
            throw new Error('Invalid input');
        }

        input.forEach((element) => {
            if (typeof element === 'number') {
                let remainder = element % 1;
                if (remainder != 0) {
                    throw new Error('Invalid input');
                } else if (element < 0 || element > 255) {
                    throw new Error('Invalid input');
                }
            } else {
                throw new Error('Invalid input');
            }
        });

        logger.debug('Encoded CDB: ' + input.map(element => printf('%02x', element)).join(' '));

        // Step through each message - attempt to decode the identifiers
        // and see if they match.
        let cdbDescriptor = cdbDescriptors.find((cdbDescriptor) => {
            let match = true;

            cdbDescriptor.identifiers.forEach((identifier) => {
                try {
                    let value = this.getFieldByName(input, cdbDescriptor, identifier);
                    let expectedValue = this.getFieldExpectedValue(cdbDescriptor, identifier);

                    if (!value.equals(expectedValue)) {
                        match = false;
                    }
                } catch (e) {
                    match = false;
                }
            });
            return match;
        });

        if (cdbDescriptor === undefined) {
            throw new Error('Unknown CDB');
        }

        var output = {
            name: undefined,
            fields: [],
            truncated: false,
        };

        // We have identified our message correctly, now try and decode it.
        output.name = cdbDescriptor.name;

        logger.debug('Encoded CDB identified as ' + cdbDescriptor.name);
            
        try {
            cdbDescriptor.fields.forEach((field) => {
                var value = this.getField(input, field.length, field.byte, field.bit);
                logger.debug(`Decoded ${field.name} as 0x${value.toString(16)}`);
                output.fields.push({
                    name: field.name,
                    bits: field.length,
                    value: printf('0x%s', value.toString(16)),
                    reserved: field.reserved ? true : false,
                    obsolete: field.obsolete ? true : false,
                });
            });
        } catch (e) {
            if (/Input truncated/.test(e)) {
                output.truncated = true;
            } else {
                logger.error('Unknown exception: ', e);
            }
        }

        return output;
    }
}

module.exports = ScsiCdb;
