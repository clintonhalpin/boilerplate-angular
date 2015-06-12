// routes

"use strict";

module.exports = function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('index', {
          url: "/",
          templateUrl: "./js/components/index/html/index.html",
          controller: 'indexCtrl'
    });
}
