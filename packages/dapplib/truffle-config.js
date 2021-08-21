require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey slide olympic short bitter birth rifle unknown hockey clinic surge gasp'; 
let testAccounts = [
"0x4871743eff546c615c9a687b134ddd4e75bcae332a066ab68bcbf5dc26ee2575",
"0x2d10165c74eaa4765bfef3a04691d2cffd1971552f34fc0ce67e0987141ed89c",
"0x391a9be315735795a3dc407e58aafd2e6cce8b477dd13b0e21faaa36140a2e30",
"0x2b30f2588d74af4ae117a8df5dd9ebcebc182c00987b8e07934668ca913817ea",
"0x89e46e5400af36fe635d1342c7504f9cb59a78995e4981465956b1fa4888fe3e",
"0x725faec9ed16db14ccc7ad3d919ad342f6f5840c1a1f9057c4b28905b7e127f8",
"0x4b255b405c7566a7370f7adad784dec721f95b54b36f015c4aca54d4b495d68a",
"0x061298567be00ff1c42c7aa6efe3430d8786d2fd6fb9b0b56749b0a4da97fbc1",
"0x4ac5a77225c3e4e1089d4477d92ab126e180c14414957afd2547a1d5c56209eb",
"0xd12c38bdac99617c0778e197ea9afdab21fac48d32c3eee1eb5bca3685244814"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


