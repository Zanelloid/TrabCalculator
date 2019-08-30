var num1 = '';
var num2 = '';
var operador = '';
var resultado = '';
    
$(document).ready(function() {
    $('.button').on('click', function(){
        var btn = $(this).html();

        calcular(btn)
        console.log(btn)

        if (btn >= '0' && btn <= '9') {
            Numeros(btn);
        } else {
            TipoOperador(btn);
        }
    });
});
function calcular(aux){
    switch(aux){
        case '+' || '-':

            break;
        default:

            break;
    }
}
function Numeros(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
    Tela(num);
}

function TipoOperador(oper) {
    if (operador === '') {
        operador = oper;
    } else {
        calculos();
        operador = oper;
    }
}

function calculos() {
    switch (operador) {
        case '+':
            resultado = +num1 + +num2;
            Tela(resultado);
            break;
        case '-':
            resultado = +num1 - +num2;
            Tela(resultado);
            break;
        case '/':
            resultado = +num1 / +num2;
            Tela(resultado);
            break;
        case '*':
            resultado = +num1 * +num2;
            Tela(resultado);
            break;
        case 'C':
            resultado = 0;
            Tela(resultado)
            break;
        default:

            break;
    }
    ArrumaVar();
}

function Tela(btn) { 
    $('.row div.tela').html(btn);
}

function ArrumaVar() {
    num1 = resultado;
    num2 = '';
}