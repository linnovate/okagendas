//Setting up route
angular.module('mean').config(['$routeProvider','$httpProvider',
    function($routeProvider, $httpProvider) {
        $routeProvider.
        when('/agendas/:agendaId/', {
            templateUrl: 'views/agendas/show.html'
        }).
        otherwise({
            templateUrl: 'views/index.html'
        });

        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);