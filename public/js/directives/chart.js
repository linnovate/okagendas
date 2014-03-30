angular.module('mean').directive('chart', function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
        chartData: "=data"
    },
    transclude:true,
    replace: true,
    link: function (scope, element, attrs) {
        var chartsDefaults = {
            chart: {
                renderTo: element[0],
                type: "bar"
            },
            yAxis: {
                labels: {
                    enabled: false
                },
                opposite : true,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                title : ""
            },
            series : [{
                data: []
            }],
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        formatter : function() {
                            return this.y.toFixed(2);
                        } 
                    }
                },
                series: {
                    pointPadding: 0,
                    pointWidth: 25,
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                if(scope.chartData.byParties)
                                    scope.$parent.selectParty(this.x);
                                else
                                    scope.$parent.showMemberDetails(this.x);
                            }
                        }
                    }
                }
            },
            tooltip : {
                enabled : false
            },
            title : {text : ""},
            legend : {
                enabled : false
            },
            credits: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            exporting: {
                type: 'image/jpeg'
            }
        }; 
        var colors =['#AFEBAF', '#A4DFA5', '#9CD79D', '#9ACB9A','#85BF85','#85BF85','#7AB57A', '#6EAB6F', '#64A164', '#57975A','#4E8D4E'];
        var negativeColors = ['#FCB2B3','#F6A8A8','#F29090','#EA8B8B','#E38686','#DE8382','#D57D7D'];
        var theme = {
            colors: ['#468747', '#BA4A49'],
            xAxis: {
                lineColor: '#fff',
                tickColor: '#fff',
                labels: {
                    style: {
                        color: '#222222',
                        font: '14px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            yAxis: {
                gridLineWidth: 0
            }
        };

        //Update when charts data changes
        scope.$watch(function() { return scope.chartData; }, function(value) {
          if(!value) return;
            // We need deep copy in order to NOT override original chart object.
            // This allows us to override chart data member and still the keep
            // our original renderTo will be the same
            var deepCopy = true;
            var newSettings = {};
            $.extend(deepCopy, newSettings, chartsDefaults, scope.chartData); 
            angular.forEach(scope.chartData.data, function(value){
                newSettings.series[0].data.push({ y: value, color: (parseInt(value) > 0) ? colors[parseInt(Math.abs(value/10))] : negativeColors[parseInt(Math.abs(value/10))]}) ;
            });
            newSettings.chart.height = scope.chartData.data.length * 26;

            if (scope.chartData.byScore){
                newSettings.plotOptions.bar.dataLabels.formatter = function() {
                    return this.y.toFixed(2)+'%';
                }; 
            }
            Highcharts.setOptions(theme);  
            var chart = new Highcharts.Chart(newSettings);
            scope.$parent.loading = false;
            scope.$parent.chart = chart; 
            chart.hideLoading();   
        });
    //
    }
};

});

