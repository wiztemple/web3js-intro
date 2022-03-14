let Web3 = require('web3')
let url = "https://mainnet.infura.io/v3/17e866a67f324d1c85b8a1e9a932a19e"
let web3 = new Web3(url)

let address = "0xEBEFf10595Cdf0Bfd8c1136AFd2E6Dee3476AAd2"

web3.eth.getBalance(address, (error, balance) =>{
  if(!error)
  {
    console.log(web3.utils.fromWei(balance, 'ether'))
  }
  else{
    console.log(error)
  }
})

// First, we use check the balance by calling web3.eth.getBalance(),
// which accepts a callback function with two arguments, an error and the balance itself.
// We'll ignore the error argument for now, and reference the balance with the wei argument

// Ethereum expresses balances in Wei, which is the smallest subdivision of Ether, 
// kind of like a tiny penny. We can convert this balance to Ether with web3.utils.fromWei(wei, 'ether').
