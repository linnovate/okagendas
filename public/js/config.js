//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/agendas/:agendaId/', {
            templateUrl: 'views/agendas/parties.html'
        }).
        when('/agendas/:agendaId/members/:partyId', {
            templateUrl: 'views/agendas/members.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);