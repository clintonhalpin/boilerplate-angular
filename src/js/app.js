"use strict";

require('angular')
require('angular-ui-router')

angular.module('app', [
    'ui.router'
])

.config(["$urlRouterProvider", "$stateProvider", require('./routes') ])
.controller('indexController', [ '$scope', require('./../components/index/controllers') ])

// Fire it up 
angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});

