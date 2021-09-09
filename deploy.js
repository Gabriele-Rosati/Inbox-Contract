// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');


const provider = new HDWalletProvider(
  'shrimp narrow carpet potato glance custom cost donor welcome final coach damp',
  'https://rinkeby.infura.io/v3/7248ce47e20d47d49db69bec4cb928fb'
);

const web3 = new Web3(provider);


const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account' ,accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!']})
  .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
  console.log('Contract deploy to', result.options.address);
};
deploy();
