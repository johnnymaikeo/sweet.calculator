require([
  'angular',
  'app',
  'controllers/controller.calculator.min',
  'directives/directive.calculator.min',
  'directives/directive.calculator-display.min',
  'directives/directive.calculator-button.min',
], function (angular) {

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
  
});