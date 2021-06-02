const chroma = require('chroma-js');

const tokens = {
    blue: '#61afef',
    comment: '#5C6370',
    cyan: '#56b6c2',
    darkOrange: '#d19a66',
    darkRed: '#B9362B',
    docComments: chroma('#ABB2BF').alpha(.47),
    gray: '#ABB2BF',
    green: '#98c379',
    illegal: '#E05252',
    lightOrange: '#e5c07b',
    lightRed: '#e06c75',
    node: '#36A252',
    purple: '#c678dd',
    specials: '#be5046'
};

const ui = {
    terminal: {
        black: '#2F3D50',
        blue: '#4F93D8',
        brightBlack: '#2D3B4C',
        brightBlue: '#417EB9',
        brightCyan: '#45BD9A',
        brightGreen: '#3BA155',
        brightMagenta: '#954EB4',
        brightRed: '#DD4941',
        brightWhite: '#ECF0F1',
        brightYellow: '#EAC72E',
        cyan: '#3AA184',
        green: '#39CA74',
        magenta: '#8C3BAE',
        red: '#B73730',
        white: '#BEC3C7',
        yellow: '#EA9E2C',
        background: '#282a32',
        foreground: '#ABB2BF',
        selectionBackground: chroma('#5692FF').alpha(0.24),
        cursorBackground: '#FFFFFF',
        cursorForeground: '#5692FF'
    }
};

module.exports = {
    tokens,
    ui
};