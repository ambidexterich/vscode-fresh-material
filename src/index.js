const config = require('../package.json');
const fs = require('fs').promises;
const { getTheme, createThemes } = require('./themes');
const themes = [];

const classicTheme = getTheme({
    primary: '#7D57C2',
    secondary: '#B0E357',
    type: 'dark',
    name: 'default'
});

themes.push(classicTheme)

createThemes(themes, path.join(__dirname, '..', 'themes'));