module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: ['airbnb-base', 'airbnb-typescript/base', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'class-methods-use-this': 0,
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
    },
    ignorePatterns: ['.eslintrc.js'],
};
