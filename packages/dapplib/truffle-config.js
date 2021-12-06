require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note six protect imitate private fresh uphold'; 
let testAccounts = [
"0x1fb354dd8378cbd9f36cf7eed71472bb8fc174e691e6a3e14b76c6769ea84d53",
"0x48df9c6dfc1e48bbb0db11decb38589e40e8f93a8d832718ce4b633cb06aebbb",
"0x1b32b512f9afaf42b3fe50825f3334c79353207d8232419576de21db4eb2c71a",
"0xf5a0cef7efa17429c33cd553db855482a3e86ac788650198f170406001de99d3",
"0xc262ec608996093bcfb41855bb544538125cb7677cbdc96b2572bb1e727da727",
"0x63d5476442bcd26f3054a9a8f262c34246e8f9f91d41ff0d19248c39c99959ef",
"0x7752a92db4cad627a388c3f39e7b4a82dca8b2cd03b5a76c4aacf5760d518ba8",
"0xfb204612785cb4f463129902978418b91b83795fd533151a7b1570af29b8e234",
"0x9bd564f129c5d3e8ea1634d78a9a6c3c707e0bfd3fb135c6797858241a914021",
"0x77fea46979cd2972338093fe25cb610d969c13ff0daf5c0c1cd29a6025069823"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

