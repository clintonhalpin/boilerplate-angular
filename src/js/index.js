// main app
// define all components and modules and fire up the app

"use strict";

require('angular')
require('angular-ui-router')

angular.module('app', [
    'ui.router'
])

.config(["$urlRouterProvider", "$stateProvider", require('./components/routes/') ])
.controller('indexCtrl', [ '$scope', require('./components/index/controllers/') ])

// Light the fires and kick the tires 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});

