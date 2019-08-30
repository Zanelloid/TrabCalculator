var resultado = 0;
var num2 = 0;
var operador = null;
var num1 = '0';
$(document).ready(function() {
    tela(resultado);
    $('.button').on('click', function() {
      var buttonPressed = $(this).html();
      console.log(buttonPressed);
      
      if (buttonPressed === "C") {
        resultado = 0;
        num1 = '0';
        tela(num1);
      } else if (buttonPressed === "+/-") {
        num1 *= -1;
        tela(num1);
      } else if (buttonPressed === '.') {
        num1 += '.';
        tela(num1);
      } else if (isNumber(buttonPressed)) {
        if (num1 === '0') num1 = buttonPressed;
        else num1 = num1 + buttonPressed;
        tela(num1);
      } else if (buttonPressed === '+') {
        num2 = parseFloat(num1);
        operador = buttonPressed;
        resultado = operate(num2, num1, operador);
        tela(resultado);
      } else if(buttonPressed === '%') {
        num1 = num1 / 100;
        tela(num1);
      } else if (buttonPressed === '1/x') {
        num1 = 1 / num1;
        tela(num1);
      } else if (buttonPressed === '=') {
        num1 = operate(num2, num1, operador);
        operador = null;
        tela(num1);
      }
    });
  });
  
  function tela(displayValue) {
    var displayValue = displayValue.toString();
    $('.tela').html(displayValue.substring(0, 10));
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
      num1 = resultado;
      num2 = '';
  }
