angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Agendas',
    function($scope, Global, Agendas) {
        $scope.agenda = false;

        Agendas.getAgendas(function(data) {
            // console.log(data.parties);
            $scope.agenda = {
                key: "myKey",
                values: data.parties
            };
        });
    }
]);