module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:sonarjs/recommended',
        'plugin:listeners/recommended',
        'plugin:fp-ts/recommended',
        'plugin:fp-ts/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:boundaries/recommended',
        '@feature-sliced',
        '@feature-sliced/eslint-config/rules/import-order',
        '@feature-sliced/eslint-config/rules/public-api',
        '@feature-sliced/eslint-config/rules/layers-slices',
        '@feature-sliced/eslint-config/rules/import-order/experimental',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'sonarjs',
        'unused-imports',
        'listeners',
        'fp-ts',
        'import',
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'sonarjs/cognitive-complexity': 'error',
        'sonarjs/cognitive-complexity': ['error', 15],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
}
