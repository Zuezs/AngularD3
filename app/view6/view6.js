angular.module('myApp.view6', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view6', {
            templateUrl: 'view6/view6.html',
            controller: 'View6Ctrl'
        });
    }])

    .controller('View6Ctrl', [function() {

    }])

    .directive('enterExample', function(){
        function link(scope, el){

            var data = [250, 200, 100, 50, 25],
            w = 800,
            h = 800;

            var canvas = d3.select(".graphContainer")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            var box = canvas.append("rect")
                .attr("width", 350)
                .attr("height", 350)
                .attr("fill", "red")
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("transform", "translate(50, 50)");

            var box1 = canvas.append("rect")
                .attr("width", 250)
                .attr("height", 250)
                .attr("fill", "blue")
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("transform", "translate(50, 50)");

            var boxes = canvas.selectAll("rect")
                .data(data)
                /*.attr("fill", "purple")
                .exit()*/
                .enter()
                .append("rect")
                .attr("width", function (d) {
                    return d;
                })
                .attr("height", function (d) {
                    return d;
                })
                .attr("fill", "grey")
                .attr("stroke", "black")
                .attr("transform", "translate(50, 50)");



        }
        return {
            link: link,
            restrict: 'E',
            scope: { data: '=' }
        }
    });
