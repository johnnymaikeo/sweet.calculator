require([
  'angular',
  'app',
  'controller.calculator'
], function (angular) {

  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });
  
});