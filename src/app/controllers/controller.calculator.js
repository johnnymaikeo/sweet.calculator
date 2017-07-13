define(['app'], function (app) {
  'use strict';

  angular.module('app').controller('CalculatorController', CalculatorController);

  function CalculatorController() {

    var vm = this;
    vm.display = '0';
    vm.upperline = '';
    vm.buttonPressClear = buttonPressClear;
    vm.buttonPressEval = buttonPressEval;
    vm.buttonPress = buttonPress;
    vm.keyPress = keyPress;

    ////////////////

    function activate() {
      console.log('CalculatorController');
    }

    function buttonPress(value) {
      if (vm.display === '0' || vm.display === 'ERROR') {
        vm.display = '';
        vm.upperline = '';
      }
      if (vm.display.length == 10) {
        error('max 10 caracters');
        return
      }
      vm.display += value;
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
      console.log('buttonPressEval');
    }

    ////////////////

    function error(message) {
        vm.display = 'ERROR';
        vm.upperline = message;
    }

    activate();

  }

});