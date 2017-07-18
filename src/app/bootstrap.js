require([
  'angular',
  'app',
  'controllers/controller.calculator.dev',
  'directives/directive.calculator.dev',
  'directives/directive.calculator-display.dev',
  'directives/directive.calculator-button.dev',
], function (angular) {

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
  
});