import Web3ProviderBase from '../../src/index'
import {ProviderOptions} from '../../types'

interface Web3ProviderBaseExpectedProperties extends ProviderOptions {connected: boolean}

describe('constructs a Web3Eth instance with expected properties', () => {
    let providerOptions: ProviderOptions
    let web3ProviderBaseExpectedProperties: Web3ProviderBaseExpectedProperties

    beforeEach(() => {
        providerOptions = {
            providerString: 'http://127.0.0.1:8545',
            protectProvider: false,
            supportsSubscriptions: false
        }
        web3ProviderBaseExpectedProperties = {
            ...providerOptions,
            connected: false
        }
    })

    it('providerOptions - falsey', () => {
        const web3ProviderBase = new Web3ProviderBase(providerOptions)
        expect(web3ProviderBase).toMatchObject(web3ProviderBaseExpectedProperties)
    })

    it('providerOptions - truthy', () => {
        providerOptions.protectProvider = true
        providerOptions.supportsSubscriptions = true
        web3ProviderBaseExpectedProperties = {...web3ProviderBaseExpectedProperties, ...providerOptions}

        const web3ProviderBase = new Web3ProviderBase(providerOptions)
        expect(web3ProviderBase).toMatchObject(web3ProviderBaseExpectedProperties)
    })
})