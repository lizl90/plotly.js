'use strict';

var Plotly = require('../../plotly');

var extendFlat = Plotly.Lib.extendFlat;

function makeVector(x, y, z) {
    return {
        x: {
            valType: 'number',
            dflt: x
        },
        y: {
            valType: 'number',
            dflt: y
        },
        z: {
            valType: 'number',
            dflt: z
        }
    };
}

module.exports = {
    bgcolor: {
        valType: 'color',
        dflt: 'rgba(0,0,0,0)'
    },
    camera: {
        up: extendFlat(makeVector(0, 0, 1), {
            description: [
                'Sets the (x,y,z) components of the \'up\' camera vector.',
                'This vector determines the up direction of this scene',
                'with respect to the page.',
                'The default is *{x: 0, y: 0, z: 1}* which means that',
                'the z axis points up.'
            ].join(' ')
        }),
        center: extendFlat(makeVector(0, 0, 0), {
            description: [
                'Sets the (x,y,z) components of the \'center\' camera vector',
                'This vector determines the translation (x,y,z) space',
                'about the center of this scene.',
                'By default, there is no such translation.'
            ].join(' ')
        }),
        eye: extendFlat(makeVector(1.25, 1.25, 1.25), {
            description: [
                'Sets the (x,y,z) components of the \'eye\' camera vector.',
                'This vector determines the view point about the origin',
                'of this scene.'
            ].join(' ')
        })
    },
    domain: {
        x: {
            valType: 'info_array',
            items: [
                {valType: 'number', min: 0, max: 1},
                {valType: 'number', min: 0, max: 1}
            ],
            dflt: [0, 1],
            description: [
                'Sets the horizontal domain of this scene',
                '(in plot fraction).'
            ].join(' ')
        },
        y: {
            valType: 'info_array',
            items: [
                {valType: 'number', min: 0, max: 1},
                {valType: 'number', min: 0, max: 1}
            ],
            dflt: [0, 1],
            description: [
                'Sets the vertical domain of this scene',
                '(in plot fraction).'
            ].join(' ')
        }
    },
    aspectmode: {
        valType: 'enumerated',
        values: ['auto', 'cube', 'data', 'manual'],
        dflt: 'auto',
        description: [
            'If *cube*, this scene\'s axes are drawn as a cube,',
            'regardless of the axes\' ranges.',

            'If *data*, this scene\'s axes are drawn',
            'in proportion with the axes\' ranges.',

            'If *manual*, this scene\'s axes are drawn',
            'in proportion with the input of *aspectratio*',
            '(the default behavior if *aspectratio* is provided).',

            'If *auto*, this scene\'s axes are drawn',
            'using the results of *data* except when one axis',
            'is more than four times the size of the two others,',
            'where in that case the results of *cube* are used.'
        ].join(' ')
    },
    aspectratio: { // must be positive (0's are coerced to 1)
        x: {
            valType: 'number',
            min: 0
        },
        y: {
            valType: 'number',
            min: 0
        },
        z: {
            valType: 'number',
            min: 0
        },
        description: [
            'Sets this scene\'s axis aspectratio.'
        ].join(' ')
    },
    _nestedModules: {
        'xaxis': 'Gl3dAxes',
        'yaxis': 'Gl3dAxes',
        'zaxis': 'Gl3dAxes'
    }
};