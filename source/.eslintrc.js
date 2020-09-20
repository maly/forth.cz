module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jquery: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2017,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        "no-extra-semi": 0,
        "no-console": 0,
        quotes: ["error", "double", {
            "avoidEscape": true
        }]
    }
};