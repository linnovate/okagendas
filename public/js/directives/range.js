angular.module('mean').directive('range', function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: { 
    },
    transclude:true,
    replace: true,

    link: function (scope, element, attrs) {
        rangeObj = scope.$parent.range;
        var rangeSettings = {
            margin: {
                top: 10
            },
            size: {
                height: 150,
            },
            scale: {
                startValue: rangeObj.start,
                endValue: rangeObj.end,
                minorTickInterval: "month",
                majorTickInterval:  "month",
                minRange: "month",
                showMinorTicks: true
            },
            marker: {
                visible: true
            },
            sliderMarker: {
                format: "MM-yyyy"
            },
            selectedRange: {
                startValue: rangeObj.end.setMonth(rangeObj.end.getMonth()-5),
                endValue: rangeObj.end
            },
            selectedRangeChanged : function (e) {
                scope.$parent.selectRange(e);
            }
           
        };

        // scope.$watch(function(value) {         
            $(element[0]).dxRangeSelector(rangeSettings);
        // });
    }
};

});