//Global service for global variables
angular.module('mean').factory("Agendas", ['$http',
    function($http) {
        var _this = this,
            getAgendas = function(cb) {
                $http.get("/agendas", {}).success(function(data) {
                    cb(data);
                });
            };
        return {
            getAgendas: getAgendas
        };
    }
]);
