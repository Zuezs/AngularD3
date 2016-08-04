angular.module('myApp.view4', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'view4/view4.html',
            controller: 'View4Ctrl'
        });
    }])

    .controller('View4Ctrl', [function() {

    }])

    .directive('scaleDir', function(){
        function link(scope, el){

            var graphData = [10,100]
            w = 800;
            h = 800;

            var scaling = d3.scaleLinear()
                .domain([0, 1200])
                .range([0, w]);

            var canvas = d3.select(".graphContainer")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            var graphBars = canvas.selectAll("rect")
                .data(graphData)
                .enter()
                .append("rect")
                .attr("fill", "pink")
                .attr("width", function (d)
                {
                    return scaling(d * 3);
                })
                .attr("height", 20)
                .attr("y", function (d, i )
                {
                    return i * 50;
                })


        }
        return {
            link: link,
            restrict: 'E',
            scope: { data: '=' }
        }
    });
