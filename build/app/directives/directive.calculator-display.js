define(['app'], function (app) {
  'use strict';

  angular.module('app').directive('calculatorDisplay', calculatorDisplay);

  function calculatorDisplay() {

    var directive = {
      link: link,
      templateUrl: 'app/directives/directive.calculator-display.html',
      restriction: 'E',
      scope: {
        display: '@',
        uperline: '@'
      }
    }

    return directive;

    function link(scope, element, attr) {

    }

  }

});