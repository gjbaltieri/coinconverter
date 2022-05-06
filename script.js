const input = document.getElementById('input');
const inputDol = document.getElementById('inputDol');
const inputEuro = document.getElementById('inputEuro');

const saida = document.getElementById('saida');

const BTCIcon = document.getElementById('btc');
const DOLIcon = document.getElementById('dol');
const EUROIcon = document.getElementById('euro');
let images = document.querySelectorAll('.images')
const icons = document.getElementById('icons');
let symbol = document.getElementById('symbol')


/************VALOR INICIAL***************/

let timeBTC = setTimeout(() => {
    input.id = 'inputBTC'
    saida.id = 'saidaBTC'
    let tofix = BTCValue.toFixed(2);
    saida.value = tofix
}, 400);


/************TROCAR BOTAO***************/

icons.addEventListener('click', function (event) {
    var iconTarget = event.target.id;
    
    if (iconTarget == 'btc') {
        input.id = 'inputBTC'
        saida.id = 'saidaBTC'
        symbol.innerHTML = '฿'
        symbol.classList.remove('E');
        symbol.classList.remove('S');
        symbol.classList.add('B');
        let calc = input.value * BTCValue
        let tofix = calc.toFixed(2);
        saida.value = tofix

        
    };

    if (iconTarget == 'dol') {
        input.id = 'inputDol'
        saida.id = 'saidaDol'
         
        symbol.innerHTML = '$'
        symbol.classList.remove('B');
        symbol.classList.remove('E');
        symbol.classList.add('S');
        saida.value = DOLValue
        let output = DOLValue.toFixed(2)
        input.value = 1
        console.log('clicou dolar');
        saida.value = output
        
        
    }

    if (iconTarget == 'euro') {
        symbol.innerHTML = '€'
        input.id = 'inputEuro'
        saida.id = 'saidaEuro'
        symbol.classList.remove('S');
        symbol.classList.remove('B');
        symbol.classList.add('E');
        input.value = 1
        let output = EUROValue.toFixed(2)
        console.log('clicou euro');
        saida.value = output

    }
})





/*********************************************************************/
window.oninput = function inputBTC (event){
    
    var campo = event.target.id;
                                                /***CAMPO BTC*******/
    if (campo !== 1)

        if(campo == "inputBTC"){
        let calc = input.value * BTCValue
        let tofix = calc.toFixed(2);
        saida.value = tofix


                  
    }else if(campo == "saidaBTC"){
        let calc = saida.value / BTCValue
        let tofix = calc.toFixed(9);
            
        input.value  = tofix
    };

                                                /****CAMPO DOLAR********/
    
    if(campo == "inputDol"){
        let calc = input.value * DOLValue
        let tofix = calc.toFixed(2);
        saida.value = tofix

       
                                            
                                            
                                                              
    }else if(campo == "saidaDol"){

        let calc = saida.value / DOLValue
        let tofix = calc.toFixed(2);                         
        input.value  = tofix

    };                                


                                                /****CAMPO EURO********/

    if(campo == "inputEuro"){
        let calc = input.value * EUROValue
        let tofix = calc.toFixed(2);
        saida.value = tofix
                                                                                        
                                                                                        
                                                                                                          
    }else if(campo == "saidaEuro"){
                                            
        let calc = saidaEuro.value / EUROValue
        let tofix = calc.toFixed(2);                         
        input.value  = tofix
                                            
    };
}                     














