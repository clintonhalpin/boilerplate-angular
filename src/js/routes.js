module.exports = function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('index', {
          url: "/",
          templateUrl: "components/index/html/index.html",
          controller: 'TestController'
    });
}
