angular.module('mean').directive('range', function() {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {},
        transclude: true,
        replace: true,

        link: function(scope, element, attrs) {
            rangeObj = scope.$parent.range;

            var heb = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
            // winter / summer
            var ksessions = {
                "2009": [
                    ["24/02/2009", "09/04/2009"],
                    ["10/04/2009", "10/10/2009"]
                ],
                "2010": [
                    ["11/10/2009", "30/03/2010"],
                    ["31/03/2010", "30/09/2010"]
                ],
                "2011": [
                    ["01/10/2010", "19/04/2011"],
                    ["20/04/2011", "20/10/2011"]
                ],
                "2012": [
                    ["21/10/2011", "07/04/2012"],
                    ["08/04/2012", "08/10/2012"]
                ],
                "2013": [
                    ["09/10/2012", "05/02/2013"],
                    ["06/02/2013", "26/03/2013"],
                    ["27/03/2013", "26/09/2013"]
                ],
                "2014": [
                    ["27/09/2013", "15/04/2014"],
                    ["16/04/2014", "16/10/2014"]
                ],
                "2015": [
                    ["17/10/2014", "04/04/2015"],
                    ["05/04/2015", "05/10/2015"]
                ],
                "2016": [
                    ["06/10/2015", "23/04/2016"],
                    ["24/04/2016", "24/10/2016"]
                ],
                "2017": [
                    ["25/10/2016", "11/04/2017"],
                    ["12/04/2017", "12/10/2017"]
                ]

            }
           
            var rangeSettings = {

                margin: {
                    top: 10
                },
                size: {
                    height: 150,
                },
                scale: {
                    startValue: rangeObj.end,
                    endValue: rangeObj.start,
                    minorTickInterval: {
                        months: 1
                    },
                    majorTickInterval: {
                        months: 1
                    },
                    minRange: "months",
                    showMinorTicks: true,
                    label: {
                        customizeText: function(value) {
                            return heb[value.value.getMonth()];
                        },
                        //format: 'MM-year',
                        //topIndent: 3
                    },
                    showCustomBoundaryTicks: true,
                    setTicksAtUnitBeginning: true


                },
                marker: {
                    visible: true
                },
                sliderMarker: {
                    customizeText: function(value) {
                        return heb[value.value.getMonth()] + ' ' + value.value.getFullYear();
                    },
                },
                selectedRange: {
                    startValue: rangeObj.end,
                    endValue: rangeObj.end - 86400000 * 120
                },
                selectedRangeChanged: function(e) {
                    //console.log(e);
                    scope.$parent.selectRange(e);
                }

            };
            //yonatan
            // scope.$watch(function(value) {         
            $(element[0]).dxRangeSelector(rangeSettings);
            console.log($(element[0]).dxRangeSelector(rangeSettings));
            // });
        }
    };

});