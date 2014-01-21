angular.module('mean.system').controller('AgendasController', ['$scope', 'Global', 'Agendas',
    function($scope, Global, Agendas) {
        // var chart = new Highcharts.Chart();
        // console.log(chart)
        Agendas.getAgendas(function(data) {
            console.log(data.parties);
            $scope.initAgendasChart(data.parties);
        });

        $scope.initAgendasChart = function(data) {
            parties = [];
            names = [];
            for (var party in data){
                parties.push(data[party].score);
                names.push(data[party].name);
            }
            $scope.agendasChart = chart;
            $scope.agendasChart.title.text = "";

            $scope.agendasChart.xAxis = {categories : names, reversed: false, labels: {step: 1}};
            // $scope.agendasChart.xAxis.opposite = true;
            $scope.agendasChart.series = [{
                "data": parties
            }];
            $scope.agendasChart.yAxis = {
                title: {
                    text: null
                },
                labels: {
                    formatter: function(){
                        return this.value;
                    }
                }
            };
        };

        var chart = {
            "chart" : {},
            "title": {},
            "yAxis" : {},
            "xAxis" :{}
        };
    }
]);
