angular.module('mean').directive('chart', function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
        chartData: "=data",
    },
    transclude:true,
    replace: true,

    link: function (scope, element, attrs) {
        var chartsDefaults = {
            chart: {
                renderTo: element[0],
                type: attrs.type || "bar",
                height: attrs.height || null,
                width: attrs.width || null
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
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true

                    }
                },
                series: {
                    pointPadding: 0,
                    pointWidth: 25,
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function() {
                                scope.$parent.selectParty(this.x);
                            }
                        }
                    }
                }
            },
            tooltip : {
                enabled : false
            },
            title : "",
            legend : {
                enabled : false
            },
            credits: {
                enabled: false
            }
        }; 
       

        var theme = {
            colors: ['#468747', '#BA4A49'],
            xAxis: {
                lineColor: '#fff',
                tickColor: '#fff',
                labels: {
                    style: {
                        color: '#494949',
                        // font: '11px Trebuchet MS, Verdana, sans-serif'
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
            console.log("newSettings : "+ newSettings);
             if (scope.chartData.byScore){
                newSettings.plotOptions.bar.dataLabels.format = '{y}%'; 
            }
            Highcharts.setOptions(theme);  
            var chart = new Highcharts.Chart(newSettings);
            scope.$parent.loading = false;
        });
    }
};

});

