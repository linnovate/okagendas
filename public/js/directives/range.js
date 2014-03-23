            var ksessions = [{
                "start": 1235426400000,
                "end": 1239224400000,
                "description": "חורף",
                "year": "2009"
            }, {
                "start": 1239310800000,
                "end": 1255125600000,
                "description": "קיץ",
                "year": "2009"
            }, {
                "start": 1255212000000,
                "end": 1269896400000,
                "description": "חורף",
                "year": "2010"
            }, {
                "start": 1269982800000,
                "end": 1285797600000,
                "description": "קיץ",
                "year": "2010"
            }, {
                "start": 1285884000000,
                "end": 1303160400000,
                "description": "חורף",
                "year": "2011"
            }, {
                "start": 1303246800000,
                "end": 1319061600000,
                "description": "קיץ",
                "year": "2011"
            }, {
                "start": 1319148000000,
                "end": 1333746000000,
                "description": "חורף",
                "year": "2012"
            }, {
                "start": 1333832400000,
                "end": 1349647200000,
                "description": "קיץ",
                "year": "2012"
            }, {
                "start": 1349733600000,
                "end": 1360015200000,
                "description": "חורף",
                "year": "2013"
            }, {
                "start": 1360101600000,
                "end": 1364248800000,
                "description": "חורף",
                "year": "2013"
            }, {
                "start": 1364335200000,
                "end": 1380142800000,
                "description": "קיץ",
                "year": "2013"
            }, {
                "start": 1380229200000,
                "end": 1397509200000,
                "year": "2014",
                "description": "חורף",
            }, {
                "start": 1397595600000,
                "end": 1413406800000,
                "description": "קיץ",
                "year": "2014"
            }, {
                "start": 1413493200000,
                "end": 1428094800000,
                "description": "חורף",
                "year": "2015"
            }, {
                "start": 1428181200000,
                "end": 1443992400000,
                "description": "קיץ",
                "year": "2015"
            }, {
                "start": 1444078800000,
                "end": 1461358800000,
                "description": "חורף",
                "year": "2016"
            }, {
                "start": 1461445200000,
                "end": 1477256400000,
                "description": "קיץ",
                "year": "2016"
            }, {
                "start": 1477342800000,
                "end": 1491858000000,
                "description": "חורף",
                "year": "2017"
            }, {
                "start": 1491944400000,
                "end": 1507755600000,
                "description": "קיץ",
                "year": "2017"
            }];



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
                                minRange: "week",
                                showMinorTicks: true,
                                label: {
                                    customizeText: function(value) {
                                        var year = value.value.getFullYear();
                                        for (var index in ksessions) {
                                            if (ksessions[index].year == year) {
                                                var time = value.value.getTime();
                                                if (Math.abs(time - ksessions[index].start) < 86400000 * 7) {
                                                    console.log("mongth")
                                                }

                                            }
                                        }
                                        return heb[value.value.getMonth()];
                                    },
                                },
                                showCustomBoundaryTicks: true,
                                setTicksAtUnitBeginning: false
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
                                scope.$parent.selectRange(e);
                            }
                        };

                        $(element[0]).dxRangeSelector(rangeSettings);
                        //clean up a little bit
                        $('.rangeContainer .scale g rect').remove();                        
                        $('.rangeContainer .scale g text').last().remove()
                        var rect = $('.rangeContainer .view rect');
                        var width = parseInt(rect.attr('width'));
                        var x = parseInt(rect.position().left);
                        var y = parseInt(rect.position().top);

                        var scale = (rangeObj.end - rangeObj.start) / width;

                        var firstStart = null;

                        ksessions.forEach(function(session, index) {
                            if (session.start > rangeObj.start.getTime() && session.start < rangeObj.end.getTime()) {
                                //used to take leading first end if before first start - (not implemented yet)
                                if (!firstStart) firstStart = session.start;

                                var diff = session.start - rangeObj.start.getTime();
                                var startOffset = diff / scale;


                                var size = width - startOffset
                                var color = '#5eb95e'; //green
                                var color = '#5571c6';
                                var opacity = 0.5;

                                if (session.end < rangeObj.end.getTime()) {
                                    color = (index % 2 == 0) ? '#5571c6' : '#5571c6';
                                    opacity = (index % 2 == 0) ? 0.65 : 0.5;
                                    var endDiff = session.end - rangeObj.start.getTime();
                                    var endOffset = endDiff / scale;
                                    size = endOffset - startOffset;
                                }
                                $('.chart-container').append('<div style="position:absolute; font:12px Trebuchet MS, Verdana, sans-serif;color:white; text-align:center;width:' + size + 'px;top:' + (y + 115) + 'px;left:' + ((x + width) - startOffset - size) + 'px;background-color:' + color + ';opacity:' + opacity + ';white-space:nowrap;overflow:hidden;text-overflow:hidden;">' + session.year + ' מושב ' + (session.description ? session.description : 's') + '</div>')
                            }
                        })
                    }
                };

            });