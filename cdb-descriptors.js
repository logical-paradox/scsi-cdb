'use strict';

let cdbDescriptors = [
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
];

module.exports = cdbDescriptors;

