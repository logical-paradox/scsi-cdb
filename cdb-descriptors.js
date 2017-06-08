'use strict';

let cdbDescriptors = [
    // SCSI Primary Commands - 5 (SPC-5) Revision 15
    {
        'name': 'BIND',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9f
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0e
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'NRD',
                'length': 1,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 2,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 72,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'CHANGE ALIASES',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0b
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'COPY OPERATION ABORT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x83
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x1c
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 72,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'COPY OPERATION CLOSE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x83
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x1d
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'TO_MED',
                'length': 1,
                'byte': 6,
                'bit': 1,
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 6,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 64,
                'byte': 7,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'EXTENDED COPY',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x83
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x01
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 64,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'INQUIRY',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x12
            },
            {
                'name': 'EVPD',
                'length': 1,
                'byte': 1,
                'bit': 0,
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'PAGE CODE',
                'length': 8,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'LOG SELECT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x4c
            },
            {
                'name': 'SP',
                'length': 1,
                'byte': 1,
                'bit': 0,
            },
            {
                'name': 'PCR',
                'length': 1,
                'byte': 1,
                'bit': 1,
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'PAGE CODE',
                'length': 6,
                'byte': 2,
                'bit': 3,
            },
            {
                'name': 'PC',
                'length': 2,
                'byte': 2,
                'bit': 6,
            },
            {
                'name': 'SUBPAGE CODE',
                'length': 8,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'LOG SENSE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x4d
            },
            {
                'name': 'SP',
                'length': 1,
                'byte': 1,
                'bit': 0,
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'PAGE CODE',
                'length': 6,
                'byte': 2,
                'bit': 3,
            },
            {
                'name': 'PC',
                'length': 2,
                'byte': 2,
                'bit': 6,
            },
            {
                'name': 'SUBPAGE CODE',
                'length': 8,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER POINTER',
                'length': 16,
                'byte': 5,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'MANAGEMENT PROTOCOL IN',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x10
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'MANAGEMENT PROTOCOL',
                'length': 8,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'MANAGEMENT PROTOCOL SPECIFIC1',
                'length': 24,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'MANAGEMENT PROTOCOL SPECIFIC2',
                'length': 8,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'MANAGEMENT PROTOCOL OUT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x10
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'MANAGEMENT PROTOCOL',
                'length': 8,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'MANAGEMENT PROTOCOL SPECIFIC1',
                'length': 24,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'MANAGEMENT PROTOCOL SPECIFIC2',
                'length': 8,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'MODE SELECT (6)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x15
            },
            {
                'name': 'SP',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'RTD',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'PF',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 8,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'MODE SELECT (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x55
            },
            {
                'name': 'SP',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'RTD',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'PF',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 40,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'MODE SENSE (6)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x1a
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'DBD',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'Reserved',
                'length': 4,
                'byte': 1,
                'bit': 4,
                'reserved': true
            },
            {
                'name': 'PAGE CODE',
                'length': 6,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'PC',
                'length': 2,
                'byte': 2,
                'bit': 6
            },
            {
                'name': 'SUBPAGE CODE',
                'length': 8,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 8,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            }
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'MODE SENSE (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x5a
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'DBD',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'LLBAA',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'PAGE CODE',
                'length': 6,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'PC',
                'length': 2,
                'byte': 2,
                'bit': 6
            },
            {
                'name': 'SUBPAGE CODE',
                'length': 8,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'PERSISTENT RESERVE IN',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x5e
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 40,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'PERSISTENT RESERVE OUT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x5f
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'TYPE',
                'length': 4,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'SCOPE',
                'length': 4,
                'byte': 2,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 5,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'PREPARE BINDING REPORT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9f
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0c
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 80,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'READ ATTRIBUTE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x8c
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Restricted (see SMC-3)',
                'length': 24,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'LOGICAL VOLUME NUMBER',
                'length': 8,
                'byte': 5,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARTITION NUMBER',
                'length': 8,
                'byte': 7,
                'bit': 0,
            },
            {
                'name': 'FIRST ATTRIBUTE IDENTIFIER',
                'length': 16,
                'byte': 8,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'READ BUFFER (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x3c
            },
            {
                'name': 'MODE',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'MODE SPECIFIC',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'BUFFER ID',
                'length': 8,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'BUFFER OFFSET',
                'length': 24,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 24,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'READ BUFFER (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9b
            },
            {
                'name': 'MODE',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'MODE SPECIFIC',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'BUFFER OFFSET',
                'length': 64,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0,
            },
            {
                'name': 'BUFFER ID',
                'length': 8,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'READ MEDIA SERIAL NUMBER',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xab
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x01
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'RECEIVE BINDING REPORT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9e
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0f
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BINDING LIST IDENTIFIER',
                'length': 32,
                'byte': 4,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 8,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'RECEIVE COPY DATA',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x84
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x06
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'RECEIVE COPY STATUS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x84
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x05
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'RECEIVE DIAGNOSTIC RESULTS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x1c
            },
            {
                'name': 'PCV',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'PAGE CODE',
                'length': 8,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'RECEIVE ROD TOKEN INFORMATION',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x84
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x07
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'RECEIVE I_T NEXUS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0c
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT ALIASES',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0b
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'RECEIVE ALL ROD TOKENS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x84
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x08
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 64,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT IDENTIFYING INFORMATION',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x05
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Restricted (see SCC-2)',
                'length': 16,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'IDENTIFYING INFORMATION TYPE',
                'length': 7,
                'byte': 10,
                'bit': 1,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT LUNS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'SELECT REPORT',
                'length': 8,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'REPORT PRIORITY',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0e
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PRIORITY REPORTED',
                'length': 2,
                'byte': 2,
                'bit': 6
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT SUPPORTED OPERATION CODES',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0c
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'REPORTING OPTIONS',
                'length': 3,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 4,
                'byte': 2,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'RCTD',
                'length': 1,
                'byte': 2,
                'bit': 7
            },
            {
                'name': 'REQUESTED OPERATION CODE',
                'length': 8,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'REQUESTED SERVICE ACTION',
                'length': 16,
                'byte': 4,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT SUPPORTED TASK MANAGEMENT FUNCTIONS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0d
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'REPD',
                'length': 1,
                'byte': 2,
                'bit': 7
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT TARGET PORT GROUPS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0a
            },
            {
                'name': 'PARAMETER DATA FORMAT',
                'length': 3,
                'byte': 1,
                'bit': 5,
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REPORT TIMESTAMP',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa3
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0f
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'REQUEST SENSE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x03
            },
            {
                'name': 'DESC',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 8,
                'byte': 4,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'SECURITY PROTOCOL IN',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa2
            },
            {
                'name': 'SECURITY PROTOCOL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'SECURITY PROTOCOL SPECIFIC',
                'length': 16,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'INC_512',
                'length': 1,
                'byte': 4,
                'bit': 7
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 5,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'SECURITY PROTOCOL OUT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xb5
            },
            {
                'name': 'SECURITY PROTOCOL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'SECURITY PROTOCOL SPECIFIC',
                'length': 16,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'INC_512',
                'length': 1,
                'byte': 4,
                'bit': 7
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 5,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'SEND DIAGNOSTIC',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x1d
            },
            {
                'name': 'UNITOFFL',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'DEVOFFL',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'SELFTEST',
                'length': 1,
                'byte': 1,
                'bit': 2
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'PF',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'SELF-TEST CODE',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    }, 
    {
        'name': 'SET AFFILIATION',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9f
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0d
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 64,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'SET IDENTIFYING INFORMATION',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x06
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Restricted (see SCC-2)',
                'length': 16,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'IDENTIFYING INFORMATION TYPE',
                'length': 7,
                'byte': 10,
                'bit': 1,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    }, 
    {
        'name': 'SET PRIORITY',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0e
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'I_T_L NEXUS TO SET',
                'length': 2,
                'byte': 2,
                'bit': 6
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    },
    {
        'name': 'SET TARGET PORT GROUPS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0a
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    },
    {
        'name': 'SET TIMESTAMP',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xa4
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0f
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    },
    {
        'name': 'TEST BIND',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9f
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0b
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 80,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    },
    {
        'name': 'TEST UNIT READY',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'UNBIND',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x9f
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 0x0f
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'ALL CONG',
                'length': 1,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 2,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 72,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE', 'SERVICE ACTION' ]
    },
    {
        'name': 'WRITE ATTRIBUTE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x8d
            },
            {
                'name': 'WTC',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Restricted (see SMC-3)',
                'length': 24,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'LOGICAL VOLUME NUMBER',
                'length': 8,
                'byte': 5,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARTITION NUMBER',
                'length': 8,
                'byte': 7,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    },
    {
        'name': 'WRITE BUFFER',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x3b
            },
            {
                'name': 'MODE',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'MODE SPECIFIC',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'BUFFER ID',
                'length': 8,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'BUFFER OFFSET',
                'length': 24,
                'byte': 3,
                'bit': 0,
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 24,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0,
            },
        ],
        'identifiers': [ 'OPERATION CODE' ]
    },
    // SCSI Block Commands (SBC-4) 29 May 2015
    {
        'name': 'BACKGROUND CONTROL',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 21
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BO_CTL',
                'length': 2,
                'byte': 2,
                'bit': 6
            },
            {
                'name': 'BO_TIME',
                'length': 8,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 88,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'COMPARE AND WRITE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 137
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'NUMBER OF LOGICAL BLOCKS',
                'length': 8,
                'byte': 13,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'FORMAT UNIT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 4
            },
            {
                'name': 'DEFECT LIST FORMAT',
                'length': 3,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'CMPLST',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'FMTDATA',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'LONGLIST',
                'length': 1,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'FMTPINFO',
                'length': 2,
                'byte': 1,
                'bit': 6
            },
            {
                'name': 'Vendor specific',
                'length': 8,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'GET LBA STATUS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 18
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'STARTING LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'GET STREAM STATUS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 22
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'STARTING STREAM IDENTIFIER',
                'length': 16,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'ORWRITE (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 139
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'ORPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'ORWRITE (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'BMOP',
                'length': 3,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 5,
                'byte': 2,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'PREVIOUS GENERATION PROCESSING',
                'length': 4,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 4,
                'byte': 3,
                'bit': 4,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 4,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'value': 0xe,
                'id': true
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'ORPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED ORWGENERATION',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'NEW ORWGENERATION',
                'length': 32,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'POPULATE TOKEN',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 131
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 16
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'PRE-FETCH (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 52
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'PREFETCH LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'PRE-FETCH (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 144
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'PREFETCH LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'PREVENT ALLOW MEDIUM REMOVAL',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 30
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PREVENT',
                'length': 2,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 4,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 40
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'RARC',
                'length': 1,
                'byte': 1,
                'bit': 2
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'RDPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ (12)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 168
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'RARC',
                'length': 1,
                'byte': 1,
                'bit': 2
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'RDPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'Restricted for MMC-6',
                'length': 1,
                'byte': 10,
                'bit': 7,
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 136
            },
            {
                'name': 'DLD2',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'RARC',
                'length': 1,
                'byte': 1,
                'bit': 2
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'RDPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'DLD0',
                'length': 1,
                'byte': 14,
                'bit': 6
            },
            {
                'name': 'DLD1',
                'length': 1,
                'byte': 14,
                'bit': 7
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 9
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'RARC',
                'length': 1,
                'byte': 10,
                'bit': 2
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'RDPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'READ CAPACITY (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 37
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 8,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 8,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ CAPACITY (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 16
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 64,
                'byte': 2,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 14,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 14,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'READ DEFECT DATA (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 55
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'DEFECT LIST FORMAT',
                'length': 3,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'REQ_GLIST',
                'length': 1,
                'byte': 2,
                'bit': 3
            },
            {
                'name': 'REQ_PLIST',
                'length': 1,
                'byte': 2,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 2,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 3,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ DEFECT DATA (12)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0xb7
            },
            {
                'name': 'DEFECT LIST FORMAT',
                'length': 3,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'REQ_GLIST',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'REQ_PLIST',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'ADDRESS DESCRIPTOR INDEX',
                'length': 32,
                'byte': 2,
                'bit': 0,
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0,
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
        ]
    },
    {
        'obsolete': true,
        'name': 'READ LONG (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 62
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'CORRCT',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'PBLOCK',
                'length': 1,
                'byte': 1,
                'bit': 2
            },
            {
                'name': 'Reserved',
                'length': 5,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BYTE TRANSFER LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'bytes': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'READ LONG (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 17
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BYTE TRANSFER LENGTH',
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'CORRCT',
                'length': 1,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'PBLOCK',
                'length': 1,
                'byte': 14,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 14,
                'bit': 2
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'REASSIGN BLOCKS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 7
            },
            {
                'name': 'LONGLIST',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'LONGLBA',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 6,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 24,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'REPORT REFERRALS',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 19
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'ONE_SEG',
                'length': 1,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 14,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'REPORT PROVISIONING INITIALZATION PATTERN',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 0x3a
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'value': 0x1d
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ALLOCATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            },
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'SANITIZE',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 72
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'AUSE',
                'length': 1,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'ZNR',
                'length': 1,
                'byte': 1,
                'bit': 6,
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 1,
                'bit': 7
            },
            {
                'name': 'Reserved',
                'length': 40,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
        ]
    },
    {
        'name': 'START STOP UNIT',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 27
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'POWER CONDITION MODIFIER',
                'length': 4,
                'byte': 3,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 4,
                'byte': 3,
                'bit': 4,
                'reserved': true
            },
            {
                'name': 'START',
                'length': 1,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'LOEJ',
                'length': 1,
                'byte': 4,
                'bit': 1
            },
            {
                'name': 'NO_FLUSH',
                'length': 1,
                'byte': 4,
                'bit': 2
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 4,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'POWER CONDITION',
                'length': 4,
                'byte': 4,
                'bit': 4
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 5,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'STREAM CONTROL',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 158
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 20
            },
            {
                'name': 'STR_CTL',
                'length': 2,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 7,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'STR_ID',
                'length': 16,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 72,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'SYNCHRONIZE CACHE (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 53
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 2,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 5,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'NUMBER OF LOGICAL BLOCKS',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'SYNCHRONIZE CACHE (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 145
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'IMMED',
                'length': 1,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 2,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 5,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'NUMBER OF LOGICAL BLOCKS',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'UNMAP',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 66
            },
            {
                'name': 'ANCHOR',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 7,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true,
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'VERIFY (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 47
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'VRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'Restricted for MMC-6',
                'length': 1,
                'byte': 6,
                'bit': 7
            },
            {
                'name': 'VERIFICATION LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'VERIFY (12)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 175
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'VRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'VERIFICATION LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 10,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'VERIFY (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 143
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'VRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'VERIFICATION LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'VERIFY (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 10
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 10,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'VRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'VERIFICATION LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 42
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE (12)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 170
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'Restricted for MMC-6',
                'length': 1,
                'byte': 10,
                'bit': 7
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 138
            },
            {
                'name': 'DLD2',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'DLD0',
                'length': 1,
                'byte': 14,
                'bit': 6
            },
            {
                'name': 'DLD1',
                'length': 1,
                'byte': 14,
                'bit': 7
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 11
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE AND VERIFY (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 46
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE AND VERIFY (12)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 174
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 10,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 11,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE AND VERIFY (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 142
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 1,
                'bit': 1
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE AND VERIFY (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 12
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'BYTCHK',
                'length': 2,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 3,
                'reserved': true
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE ATOMIC (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 156
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'ATOMIC BOUNDARY',
                'length': 16,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE ATOMIC (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'ATOMIC BOUNDARY',
                'length': 16,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 15
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE LONG (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 63
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 4,
                'byte': 1,
                'bit': 1,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 5,
                'obsolete': true
            },
            {
                'name': 'WR_UNCOR',
                'length': 1,
                'byte': 1,
                'bit': 6
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 7,
                'obsolete': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 6,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 16,
                'byte': 7,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE LONG (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 159
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 17
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 5,
                'obsolete': true
            },
            {
                'name': 'WR_UNCOR',
                'length': 1,
                'byte': 1,
                'bit': 6
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 7,
                'obsolete': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'Obsolete',
                'length': 16,
                'byte': 12,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 14,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE SAME (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 65
            },
            {
                'name': 'Obsolete',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'obsolete': true
            },
            {
                'name': 'UNMAP',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'ANCHOR',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'NUMBER OF LOGICAL BLOCKS',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE SAME (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 147
            },
            {
                'name': 'NDOB',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 2,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'UNMAP',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'ANCHOR',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'NUMBER OF LOGICAL BLOCKS',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE SAME (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 13
            },
            {
                'name': 'NDOB',
                'length': 1,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 2,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'UNMAP',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'ANCHOR',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'NUMBER OF LOGICAL BLOCKS',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE STREAM (16)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 154
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'STR_ID',
                'length': 16,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'WRITE STREAM (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 16,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'STR_ID',
                'length': 16,
                'byte': 4,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 16
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 10,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'EXPECTED INITIAL LOGICAL BLOCK REFERENCE TAG',
                'length': 32,
                'byte': 20,
                'bit': 0
            },
            {
                'name': 'EXPECTED LOGICAL BLOCK APPLICATION TAG',
                'length': 16,
                'byte': 24,
                'bit': 0
            },
            {
                'name': 'LOGICAL BLOCK APPLICATION TAG MASK',
                'length': 16,
                'byte': 26,
                'bit': 0
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'WRITE USING TOKEN',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 131
            },
            {
                'name': 'SERVICE ACTION',
                'length': 5,
                'byte': 1,
                'bit': 0,
                'id': true,
                'value': 17
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LIST IDENTIFIER',
                'length': 32,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'PARAMETER LIST LENGTH',
                'length': 32,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 14,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 14,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 15,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'XDWRITEREAD (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 83
            },
            {
                'name': 'XORPINFO',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'DISABLE WRITE',
                'length': 1,
                'byte': 1,
                'bit': 2
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 1,
                'bit': 5
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'XDWRITEREAD (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 7
            },
            {
                'name': 'XORPINFO',
                'length': 1,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'DISABLE WRITE',
                'length': 1,
                'byte': 10,
                'bit': 2
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'WRPROTECT',
                'length': 3,
                'byte': 10,
                'bit': 5
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 64,
                'byte': 20,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
    {
        'name': 'XPWRITE (10)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 81
            },
            {
                'name': 'XORPINFO',
                'length': 1,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 1,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 1,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 1,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 1,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 1,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 32,
                'byte': 2,
                'bit': 0
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 16,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 9,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE'
        ]
    },
    {
        'name': 'XPWRITE (32)',
        'fields': [
            {
                'name': 'OPERATION CODE',
                'length': 8,
                'byte': 0,
                'bit': 0,
                'id': true,
                'value': 127
            },
            {
                'name': 'CONTROL',
                'length': 8,
                'byte': 1,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 32,
                'byte': 2,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'GROUP NUMBER',
                'length': 6,
                'byte': 6,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 2,
                'byte': 6,
                'bit': 6,
                'reserved': true
            },
            {
                'name': 'ADDITIONAL CDB LENGTH',
                'length': 8,
                'byte': 7,
                'bit': 0
            },
            {
                'name': 'SERVICE ACTION',
                'length': 16,
                'byte': 8,
                'bit': 0,
                'id': true,
                'value': 6
            },
            {
                'name': 'XORPINFO',
                'length': 1,
                'byte': 10,
                'bit': 0
            },
            {
                'name': 'Obsolete',
                'length': 1,
                'byte': 10,
                'bit': 1,
                'obsolete': true
            },
            {
                'name': 'Reserved',
                'length': 1,
                'byte': 10,
                'bit': 2,
                'reserved': true
            },
            {
                'name': 'FUA',
                'length': 1,
                'byte': 10,
                'bit': 3
            },
            {
                'name': 'DPO',
                'length': 1,
                'byte': 10,
                'bit': 4
            },
            {
                'name': 'Reserved',
                'length': 3,
                'byte': 10,
                'bit': 5,
                'reserved': true
            },
            {
                'name': 'Reserved',
                'length': 8,
                'byte': 11,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'LOGICAL BLOCK ADDRESS',
                'length': 64,
                'byte': 12,
                'bit': 0
            },
            {
                'name': 'Reserved',
                'length': 64,
                'byte': 20,
                'bit': 0,
                'reserved': true
            },
            {
                'name': 'TRANSFER LENGTH',
                'length': 32,
                'byte': 28,
                'bit': 0
            }
        ],
        'identifiers': [
            'OPERATION CODE',
            'SERVICE ACTION'
        ]
    },
];

module.exports = cdbDescriptors;

