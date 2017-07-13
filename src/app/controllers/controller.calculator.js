define(['app'], function (app) {
  'use strict';

  angular.module('app').controller('CalculatorController', CalculatorController);

  function CalculatorController() {

    var vm = this;

    function activate() {
      console.log('CalculatorController');
    }

    activate();

  }

});