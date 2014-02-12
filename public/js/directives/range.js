angular.module('mean').directive('range', function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {},
    transclude:true,
    replace: true,

    link: function (scope, element, attrs) {
        
        dt = new Date();
        var rangeSettings = {
            margin: {
                top: 10
            },
            size: {
                height: 150,
            },
            scale: {
                startValue: new Date(2012, 1, 1),
                endValue: dt,
                minorTickInterval: "month",
                majorTickInterval:  'month' ,
                minRange: "month",
                showMinorTicks: false
            },
            marker: {
                visible: true
            },
            // sliderMarker: {
            //     format: ""
            // },
            selectedRange: {
                startValue: dt.setMonth(dt.getMonth()-5),
                endValue: dt
            },
            selectedRangeChanged: function (e) {
                scope.$parent.selectRange(e);
            }
        };

        scope.$watch(function(value) {
            $(element[0]).dxRangeSelector(rangeSettings);
        });
    }
};

});

