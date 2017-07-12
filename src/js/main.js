require.config({
  baseUrl: "app",
  paths: {
    angular: "../vendor/angular/angular"
  },
  shim: {
    angular: {exports: 'angular'}
  },
  deps: ['bootstrap']
});