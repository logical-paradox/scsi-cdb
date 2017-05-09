scsi-cdb
========

scsi-cdb is a javascript library for parsing SCSI Command Descriptor Blocks.

Installation
============

$ npm install scsi-cdb

Examples
========

```javascript
var ScsiCdb = require('scsi-cdb');
var scsiCdb = new ScsiCdb();
var parsedCdb = scsiCdb.decode([ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]);
console.log(parsedCdb);
```
```
{ name: 'TEST UNIT READY',
  fields: 
   [ { name: 'OPERATION CODE',
       value: '0',
       reserved: false,
       obsolete: false },
     { name: 'Reserved', value: '0', reserved: true, obsolete: false },
     { name: 'CONTROL', value: '0', reserved: false, obsolete: false } ],
  truncated: false }
```

Test
====

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```

