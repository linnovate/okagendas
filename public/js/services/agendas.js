// angular.module('mean').factory("Agendas", ['$http',
//     function($http) {
//         var _this = this,
//             getAgendas = function(cb) {
//                 $http.get("/agendas", {}).success(function(data) {
//                     cb(data);
//                 });
//             };
//         return {
//             getAgendas: getAgendas
//         };
//     }
// ]);


//Agendas service used for agendas REST endpoint
angular.module('mean').factory("Agendas", ['$http', 
    function($http) {
        return {
            getAgenda : function(param, callback){
                $http.get("/agendas/"+param)
                .success(function(data) {
                    console.log(data);
                    callback(data);
                });
            }
        };
    }   
]);
