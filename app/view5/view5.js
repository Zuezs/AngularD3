angular.module('myApp.view5', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view5', {
            templateUrl: 'view5/view5.html',
            controller: 'View5Ctrl'
        });
    }])

    .controller('View5Ctrl', [function() {

    }])

    .directive('axisGroup', function(){
        function link(scope, el){

            var graphData = [10, 50, 130, 450, 1000]
            w = 500;
            h = 800;

            var scaling = d3.scaleLinear()
                .domain([0, 1200])
                .range([0, w]);

            var axis = d3.axisBottom()
                .ticks(3)
                .scale(scaling);

            var canvas = d3.select(".graphContainer")
                .append("svg")
                .attr("width", w)
                .attr("height", h)
                .append("g")
                .attr("transform", "translate(20, 50)");

            var graphBars = canvas.selectAll("rect")
                .data(graphData)
                .enter()
                .append("rect")
                .attr("fill", "pink")
                .attr("width", function (d)
                {
                    return scaling(d);
                })
                .attr("height", 20)
                .attr("y", function (d, i )
                {
                    return i * 50;
                })


            canvas.append("g")
                .attr("transform", "translate(0,700)")
                .call(axis);


        }
        return {
            link: link,
            restrict: 'E',
            scope: { data: '=' }
        }
    });
