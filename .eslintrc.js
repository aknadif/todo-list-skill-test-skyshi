module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'quotes': [2, 'single', {avoidEscape: true}],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error'],
        'max-len': [2, 120, 4, {'ignoreUrls': true}],
        'spaced-comment': 'off',
        'indent': [2, 4],
        'semi': [2, 'always'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
