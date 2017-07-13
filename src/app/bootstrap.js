require([
  'angular',
  'app',
  'controllers/controller.calculator',
  'directives/directive.calculator',
  'directives/directive.calculator-display',
  'directives/directive.calculator-button'
], function (angular) {

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
  
});