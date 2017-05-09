scsi-cdb
========

scsi-cdb is a javascript library for parsing SCSI Command Descriptor Blocks.

Installation
============

$ npm install scsi-cdb

Examples
========

```javascript
var ScsiCdb = require('./scsi-cdb');
var scsiCdb = new ScsiCdb();
var parsedCdb = scsiCdb.decode([ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]);
console.log(parsedCdb);
```
```
{ name: 'TEST UNIT READY',
  fields: 
   [ { name: 'OPERATION CODE',
       bits: 8,
       value: '0x0',
       reserved: false,
       obsolete: false },
     { name: 'Reserved',
       bits: 32,
       value: '0x0',
       reserved: true,
       obsolete: false },
     { name: 'CONTROL',
       bits: 8,
       value: '0x0',
       reserved: false,
       obsolete: false } ],
  truncated: false }
```

Additional debug information can be output by setting the log level:

```
var scsiCdb = new ScsiCdb({ logLevel: 'debug' });
```

Test
====

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```

