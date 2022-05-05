const urlCoin = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
const urlCripto = 'https://www.mercadobitcoin.net/api/BTC/ticker/'
let BTCValue
let DOLValue
let EUROValue


let cotações = {

CoinBtc:  function () {fetch(urlCripto)
    .then(res => res.json())
            .then(data => {
               console.log(data)
                let BTC = data.ticker.last;
                let BTCNum = parseFloat(BTC)
                BTCValue = BTCNum
                console.log(BTCNum)

                })},


CoinDolar: async function () {await fetch(urlCoin)
    .then(res => res.json())
            .then(data => {
                console.log(data)
                let USDValue = data.USDBRL.bid;
                let DOLNum = parseFloat(USDValue)
                DOLValue = DOLNum
                console.log(DOLNum)})},

CoinEuro: async function () {await fetch(urlCoin)
        .then(res => res.json())
            .then(data => {
                                                
                let EURValue = data.EURBRL.bid;
                let EURNum = parseFloat(EURValue)
                EUROValue = EURNum
                console.log(EURNum)})},
                
}

cotações.CoinBtc()
cotações.CoinDolar()
cotações.CoinEuro()