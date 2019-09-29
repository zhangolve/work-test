var data = {
"name": "test008",
"description": "this is a test",
"importSettings": {
    "importType": "Fastighetsnyckel",
    "fileType": "CSV"
},
"fileSettings": {
    "encoding": "UTF-8",
    "headerRow": true,
    "seperator": "Tab"
},
"importFieldSettings": {
    "type": "index",
    "importFields": [
        {
            "name": "metadata.snr",
            "column": "3",
            "optional": false
        },
        {
            "name": "metadata.houseno",
            "column": "4",
            "optional": true
        },
        {
            "name": "metadata.letter",
            "column": "5",
            "optional": true
        },
        {
            "name": "metadata.apartmentID",
            "column": "6",
            "optional": true
        }
    ]
}
};

var teml = {
    "importSettings": [
        {
            "importType": "Fastighetsnyckel",
            "fileType": "CSV",
        },
        {
            "importType": "Matrikkel",
            "fileType": "CSV"
        },
        {
            "importType": "Riksnyckel",
            "fileType": "CSV"
        },
        {
            "importType": "Street",
            "fileType": "CSV"
        }
    ],
    "fileSettings": {
        "headerRow": true,
        "separators": [
            {
                "value": ",",
                "description": "Comma(,)",
                "asDefault": false
            },
            {
                "value": ";",
                "description": "Semicolon(;)",
                "asDefault": false
            },
            {
                "value": "Tab",
                "description": "Tab",
                "asDefault": true
            }
        ],
        "encodings": [
            {
                "encoding": "UTF-8",
                "asDefault": true
            },
            {
                "encoding": "ISO-8859-1",
                "asDefault": false
            }
        ]
    },
    "importFields": {
        "Fastighetsnyckel": [
            {
                "name": "metadata.snr",
                "column": "1",
                "optional": false
            },
            {
                "name": "metadata.houseno",
                "column": "2",
                "optional": true
            },
            {
                "name": "metadata.letter",
                "column": "3",
                "optional": true
            },
            {
                "name": "metadata.apartmentID",
                "column": "4",
                "optional": true
            }
        ],
        "Matrikkel": [
            {
                "name": "municipalityCode",
                "column": "1",
                "optional": false
            },
            {
                "name": "gnr",
                "column": "2",
                "optional": false
            },
            {
                "name": "bnr",
                "column": "3",
                "optional": false
            },
            {
                "name": "fnr",
                "column": "4",
                "optional": true
            },
            {
                "name": "snr",
                "column": "5",
                "optional": true
            }
        ],
        "Riksnyckel": [
            {
                "name": "metadata.unr",
                "column": "1",
                "optional": false
            }
        ],
        "Street": [
            {
                "name": "municipalityCode",
                "column": "1",
                "optional": false
            },
            {
                "name": "streetID",
                "column": "2",
                "optional": false
            },
            {
                "name": "housenumber",
                "column": "3",
                "optional": true
            },
            {
                "name": "houseletter",
                "column": "4",
                "optional": true
            },
            {
                "name": "apartmentID",
                "column": "5",
                "optional": true
            }
        ]
    }
};

// data = {};

finalTeml = {
    name: data.name,
    description: data.description
};

// 就这个问题，改变原始值也是可以的。

// not use map func

Object.assign(teml, {name:data.name, description: data.description})

var importSettings = teml.importSettings.map(function(setting) {
    return Object.assign(setting, {asDefault:false},{asDefault: data.importSettings.importType===setting.importType  })
})

fileSettings = teml.fileSettings.separators.map(function(setting){
    return Object.assign(setting, {asDefault:false},{asDefault: data.fileSettings.seperator===setting.value })
})


fileSettings = teml.fileSettings.encodings.map(function(setting){
    console.log(data.fileSettings.encoding)
    return Object.assign(setting, {asDefault: false},{asDefault: data.fileSettings.encoding===setting.encoding })
})

Object.assign(teml.fileSettings, {headerRow: data.fileSettings.headerRow})

teml.importFields[data.importSettings.importType].map(function(setting, index){
    if(data.importFieldSettings.importFields.length>= index) {
        Object.assign(setting, {value: data.importFieldSettings.importFields[index].column })
    }
})


// Object.assign() 覆盖掉以前的。。。

console.log(teml.importFields);
