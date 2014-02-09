//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/agendas/:agendaId/', {
            templateUrl: 'views/agendas/show.html'
        }).
        otherwise({
            templateUrl: 'views/index.html'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);