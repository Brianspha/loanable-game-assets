const bigNumber = require('bignumber.js')
console.log('new bigNumber(20000000000000000000000000000).toFixed()', new bigNumber(20000000000000000000000000000).toFixed())
module.exports = {
  // default applies to all environments
  default: {
    // order of connections the dapp should connect to
    dappConnection: [
      "$EMBARK",
      "$WEB3", // uses pre existing web3 object if available (e.g in Mist)
      "ws://localhost:8546",
      "http://localhost:8546"
    ],

    // Automatically call `ethereum.enable` if true.
    // If false, the following code must run before sending any transaction: `await EmbarkJS.enableEthereum();`
    // Default value is true.
    // dappAutoEnable: true,

    gas: "auto",

    // Strategy for the deployment of the contracts:
    // - implicit will try to deploy all the contracts located inside the contracts directory
    //            or the directory configured for the location of the contracts. This is default one
    //            when not specified
    // - explicit will only attempt to deploy the contracts that are explicitly specified inside the
    //            contracts section.
    // strategy: 'implicit',

    // minimalContractSize, when set to true, tells Embark to generate contract files without the heavy bytecodes
    // Using filteredFields lets you customize which field you want to filter out of the contract file (requires minimalContractSize: true)
    // minimalContractSize: false,
    // filteredFields: [],
    deploy: {
      ERC20: {
        args: [
          "TestToken",
          "TT",
          18,
          new bigNumber(20000000000000000000000000000).toFixed()
        ]
      },
      CTokenManager: {
        args: []
      },
      "Sablier": {
        deps: ['ERC20'],
        args: ['$CTokenManager']
      },
      "Assets": {
        args: []
      }
    },
    afterDeploy: async ({
      contracts,
      web3,
      logger
    }) => {
      await contracts.ERC20.methods.approve(contracts.Sablier.options.address, new bigNumber(20000000000000000000000000000).toFixed()).send({
        gas: 800000
      })
      console.log('web3.eth.defaultAccount ', web3.eth.defaultAccount)
      await contracts.Assets.methods.init("My asset", "MY", web3.eth.defaultAccount).send({
        gas: 800000
      })
      console.log('init Asset...')
      console.log('approved token...')
    },
    development: {
      deploy: {

      }
    },
    // merges with the settings in default
    // used with "embark run privatenet"
    privatenet: {},

    // you can name an environment with specific settings and then specify with
    // "embark run custom_name" or "embark blockchain custom_name"
    // custom_name: {}
  }
}