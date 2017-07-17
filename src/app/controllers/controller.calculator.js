define(['app'], function (app) {
  'use strict';

  angular.module('app').controller('CalculatorController', CalculatorController);

  function CalculatorController() {

    var vm = this;
    vm.display = '1+((2+2)+(3+3))';
    vm.upperline = '';
    vm.buttonPressClear = buttonPressClear;
    vm.buttonPressEval = buttonPressEval;
    vm.buttonPress = buttonPress;
    vm.keyPress = keyPress;

    var calculator = {
      '+': function (a, b) { return a + b },
      '-': function (a, b) { return a - b },
      '/': function (a, b) { return a / b },
      '*': function (a, b) { return a * b }
    }

    ////////////////

    function activate() {
      console.log('CalculatorController');
    }

    function buttonPress(value) {
      if (vm.display.length <= 10) {
        if (vm.display === '0' || vm.display === 'ERROR') {
          vm.display = '';
          vm.upperline = '';
        }  
        vm.display += value;
      } else {
        error('max 10 caracters');
        return
      }
    }

    function keyPress(event) {
      if (event.key === 'Escape') {
        buttonPressClear();
        return;
      } else if (event.key === 'Enter') {
        buttonPressEval();
        return
      } else {
        const regex = /^[0-9+-/*\(\)]$/;
        if (regex.exec(event.key) !== null) {
          buttonPress(event.key);
        }
      }
    }

    function buttonPressClear() {
      vm.display = '0';
      vm.upperline = '';
    }

    function buttonPressEval() {
      const regex = /\([^()"]*(?:"[^"]*"[^()"]*)*\)/;
      var m;
      vm.upperline = vm.display;
      while (m = regex.exec(vm.display)) {
        execute(m[0]);
      }
      execute(vm.display);
    }

    ////////////////

    function error(message) {
      vm.display = 'ERROR';
      vm.upperline = message;
    }
    
    function execute(expression) {
      var result = expressionEval(expression);
      if (result) {
        vm.display = vm.display.replace(expression, result);
      } else {
        error('Invalid expression evaluated');
      }
    }

    function expressionEval(expression) {
      const regex = /([\(\)])/g;
      expression = expression.replace(regex, '');
      const explode = /([-+/*])/gi;
      var array = expression.split(explode);
      var i, previous, next, result;
      if (array.length == 2) {
        return null;
      } else if (array.length == 1) {
        return array[0];
      }

      for (var operator in calculator) {
        if(calculator.hasOwnProperty(operator) ) {
          while (array.indexOf(operator) >= 0) {
            i = array.indexOf(operator);
            previous = parseFloat(array[i-1]);
            next = parseFloat(array[i+1]);
            if (!isNaN(previous) && !isNaN(next)) {
              var result = calculator[operator](previous, next);
              array.splice(i-1, 3, result);
            } else {
              return null;
            }
          }
        } 
      }
      return array[0];
    }

    activate();

  }

});