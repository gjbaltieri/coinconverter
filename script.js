const inputBTC = document.getElementById('inputBTC');
const inputDol = document.getElementById('inputDol');
const inputEuro = document.getElementById('inputEuro');

const saidaBTC = document.getElementById('saidaBTC');
const saidaDol = document.getElementById('saidaDol');
const saidaEuro = document.getElementById('saidaEuro');
/*********************************************************************/
window.oninput = function(event){
        
    var campo = event.target.id;
                                                /****CAMPO BTC********/  
    if(campo == "inputBTC"){
        let calc = inputBTC.value * BTCValue
        let tofix = calc.toFixed(2);
        saidaBTC.value = tofix


                  
    }else if(campo == "saidaBTC"){
        let calc = saidaBTC.value / BTCValue
        let tofix = calc.toFixed(9);
            
        inputBTC.value  = tofix
    };

                                                /****CAMPO DOLAR********/
    if(campo == "inputDol"){
        let calc = inputDol.value * DOLValue
        let tofix = calc.toFixed(2);
        saidaDol.value = tofix
                                            
                                            
                                                              
    }else if(campo == "saidaDol"){

        let calc = saidaDol.value / DOLValue
        let tofix = calc.toFixed(2);                         
        inputDol.value  = tofix

    };                                      


                                                /****CAMPO EURO********/

    if(campo == "inputEuro"){
        let calc = inputEuro.value * EUROValue
        let tofix = calc.toFixed(2);
        saidaEuro.value = tofix
                                                                                        
                                                                                        
                                                                                                          
    }else if(campo == "saidaEuro"){
                                            
        let calc = saidaEuro.value / EUROValue
        let tofix = calc.toFixed(2);                         
        inputEuro.value  = tofix
                                            
    };
};                       



let timeBTC = setTimeout(() => {
        let tofix = BTCValue.toFixed(2);
        saidaBTC.value = tofix
}, 400);

let timeDol = setTimeout(() => {
    let tofix = DOLValue.toFixed(2);
    saidaDol.value = tofix
}, 400);

let timeEuro = setTimeout(() => {
    let tofix = EUROValue.toFixed(2);
    saidaEuro.value = tofix
}, 400);
















