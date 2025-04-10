import naverpay from '@naverpay/eslint-config'

export default [
    {
        ignores: ['.next/*'],
    },
    ...naverpay.configs.react,
]
