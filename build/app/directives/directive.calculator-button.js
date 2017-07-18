define(['app'], function (app) {
  'use strict';

  angular.module('app').directive('calculatorButton', calculatorButton);

  function calculatorButton() {

    var directive = {
      link: link,
      templateUrl: 'app/directives/directive.calculator-button.html',
      restriction: 'E',
      scope: {
        display: '@',
        modifier: '@'
      }
    }

    return directive;

    function link(scope, element, attr) {

    }

  }

});