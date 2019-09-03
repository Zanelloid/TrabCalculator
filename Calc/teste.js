var resultado = 0;
var num2 = 0;
var operador = null;
var num1 = '0';
$(document).ready(function() {
    tela(resultado);
    $('.button').on('click', function() {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);

      if (buttonPressed >= 0 && buttonPressed <=9){
        if (num1 === '0'){
          num1 = buttonPressed;
        } 
        else{
          num1 = num1 + buttonPressed;
        } 
        tela(num1);
      }else{
        switch(buttonPressed){
          case '+':
            mudarVar();
            break;
          case "-":
            mudarVar();
            break;
          default:
            mudarVar();
            break;
        }
        resultado = operate(num2, num1, operador);
        tela('');
        tela(resultado);
      }
    });
  });
  



  function tela(btnaux) {
    $('.tela').html(btnaux);
  };
  
  function isNumber(value) {
    return !isNaN(value);
  }
  
  function isOperator(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
  };
  
  function operate(a, b, operador) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operador);
    if (operador === '+') return a + b;
    if (operador === '-') return a - b;
    if (operador === '*') return a * b;
    if (operador === '/') return a / b;
  }
  function mudarVar(){
    operador = buttonPressed;
    num2 = num1;
    num1 = '0';
  }
