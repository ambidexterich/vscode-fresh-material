const { getTokens } = require('./tokens');

const theme = {};
theme['$schema'] = 'vscode://schemas/color-theme';
theme['semanticHighlighting'] = true;
theme['tokenColors'] = getTokens();

function getTheme ({ primary, secondary, type, name}) {
    return {
        name,
        theme: {
            ...theme,
            colors: getColors(primary, secondary)
        }
    }
}

function createThemes (themes, dest) {

}

module.exports = {
    getTheme,
    createThemes
}