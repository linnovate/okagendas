angular.module('mean').directive('agendaChart', ['Agendas',
    function($location, Agendas) {
        return {
            restrict: 'A', // the directive can be invoked only by using <my-directive> tag in the template
            scope: { // attributes bound to the scope of the directive
                // agendas: []
                bind: "=",
                target: "@target",
                height: "=",
                width: "="
            },
            transclude: false,
            replace: true,
            templateUrl: 'views/agenda/agenda_chart.html',
            link: function(scope, element, attrs) {
                var margin = {
                    top: 10,
                    right: 10,
                    bottom: 10,
                    left: 10
                };

                var width = scope.width || 300;
                var height = scope.height || 1020;

                // add margin
                width = width - margin.left - margin.right;
                height = height - margin.top - margin.bottom;

                var klass = attrs.class || '';
                var align = attrs.align || 'left';

                var viewAlign = align === 'right' ? 'xMaxYMin' : 'xMinYMin';



                var x = d3.scale.linear()
                    .range([0, width]);




                var y = d3.scale.ordinal()
                    .rangeBands([0, height], 0.1);

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient('left').tickSize(0);

                var svg = d3.select(element[0])
                    .append('svg')
                    .attr('preserveAspectRatio', viewAlign + ' meet')
                    .attr('viewBox', '0 0 ' + (width + margin.left + margin.right) + ' ' + (height + margin.top + margin.bottom))
                    .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

                svg.append('g')
                    .attr("transform", "translate(140,0)")
                    .call(yAxis);
                
                

                scope.$watch('bind', function(data) {
                    // pull info from scope
                    var duration = scope.duration || 0;
                    var delay = scope.delay || 0;
                    var field = scope.field || attrs.bind.split('.').pop().toLowerCase();
                    console.log(data);
                    if (data) {

                        // pull the data array from the facet 
                        // data = data.terms || [];
                        
                        var x0 = Math.max(-d3.min(data, function(d){ return d.score;}), d3.max(data,function(d){ return d.score;}));
                        x.domain([-x0,x0]);

                        y.domain(data.map(function(d) {
                            console.log(d.index,d.name);
                            return d.index;
                        }));

                        var color = d3.scale.linear()
                          .range(["#FF0014", "#010841"])
                          .domain([-1,1]);

                        // random key here?
                        var bars = svg.selectAll('rect')
                            .data(data, function(d) {
                                return Math.random();
                            });

                        // d3 enter fn binds each new value to a rect

                        bars.enter()
                            .append('rect')
                            .attr('class', 'bar rect ' + klass)
                            .attr('cursor', 'pointer')
                            .attr('y', function(d,i) {
                                return y(d.index);
                            })
                            .attr('height', y.rangeBand())
                            .attr('x', function(d,i) {
                                return x(Math.min(0, d.score));
                            })
                            .style("fill", function(d, i) { 
                                return color(d.score); 
                            }) // added
                        .transition()
                            .duration(duration)
                            .attr('width', function(d) {
                                return Math.abs(x(d.score) - x(0));
                            })
                            .attr('x', function(d) {
                                return x(Math.min(0, d.score));
                            });

                        // wire up event listeners - (registers filter callback)
                        bars.on('mousedown', function(d) {
                            scope.$apply(function() {
                                (scope.onClick || angular.noop)(field, d.name);
                            });
                        });

                        // d3 exit/remove flushes old values (removes old rects)
                        bars.exit().remove();

                        var labels = svg.selectAll("text")
                            .data(data, function(d) {
                                return Math.random();                                
                            });
                        console.log(labels);

                        labels.enter()
                            .append('text')
                            .attr('class', 'bar text ' + klass)
                            .attr('cursor', 'pointer')
                            .attr('y', function(d) {
                                return y(d.index) + y.rangeBand() / 2;
                            })
                            .attr('x', function(d) {
                                return 450;
                            })
                            .attr('dy', '.35em')
                            .attr('text-anchor', "start")

                        .text(function(d) {
                            return '(' + d.score + ') ' + d.name;
                        });

                        // wire up event listeners - (registers filter callback)
                        labels.on('mousedown', function(d) {
                            scope.$apply(function() {
                                (scope.onClick || angular.noop)(field, d.name);
                            });
                        });

                        // d3 exit/remove flushes old values (removes old rects)
                        labels.exit().remove();
                    }
                });

            }
        };
    }
]);