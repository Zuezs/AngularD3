angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'View3Ctrl'
        });
    }])

    .controller('View3Ctrl', [function() {

    }])

    .directive('orangeDir', function(){
        function link(scope, el){

            var orangeData = [10, 30, 50, 100];

            var canvas = d3.select(".orangeContainer")
                .append("svg")
                .attr("width", 768)
                .attr("height", 1024);

            var oranges = canvas.selectAll("circle")
                .data(orangeData)
                .enter()
                .append("circle")
                .attr("fill", "orange")
                .attr("cx", function (d, i)
                {
                   return d + (i * 100);
                })
                .attr("cy", function (d)
                {
                    return d;
                })
                .attr("r", function (d)
                {
                    return d;
                });

        }
        return {
            link: link,
            restrict: 'A',
            scope: { data: '=' }
        }
    });
