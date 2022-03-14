let Web3 = require('web3')
let url = 'https://mainnet.infura.io/v3/17e866a67f324d1c85b8a1e9a932a19e'
let web3 = new Web3(url)


console.log(web3.eth.accounts.create())

// address: 0xEBEFf10595Cdf0Bfd8c1136AFd2E6Dee3476AAd2
// privatekey: 0x1db248fb3913e8e004bb9f285fc903b57c7bf36d6fc93acc0217b543d402a525
