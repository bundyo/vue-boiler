module.exports = {
    root: true,
    // required to lint *.vue files
    "extends": "eslint:recommended",
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow debugger during development
        "no-console": process.env.NODE_ENV === 'production' ? 1 : 0,
        "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0
    },
    parserOptions: {
        sourceType: 'module'
    },
    'env': {
        'browser': true,
        'node': true
    }
};
