define(['app'], function (app) {
  'use strict';

  angular.module('app').directive('calculator', calculator);

  function calculator() {

    var directive = {
      link: link,
      templateUrl: 'app/directives/directive.calculator.html',
      restriction: 'E'
    }

    return directive;

    function link(scope, element, attr) {

    }

  }

});