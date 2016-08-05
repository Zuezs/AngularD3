angular.module('myApp.view7', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view7', {
            templateUrl: 'view7/view7.html',
            controller: 'View7Ctrl'
        });
    }])

    .controller('View7Ctrl', [function() {

    }])

    .directive('transExample', function(){
        function link(scope, el){

                w = 800,
                h = 600;

            var canvas = d3.select(".transitionContainer")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            var rect = canvas.append("rect")
                .attr("width", 100)
                .attr("height", 100)
                .attr("fill", "red");

            var circle = canvas.append("circle")
                .attr("cx", 50)
                .attr("cy", 200)
                .attr("r", 50)
                .attr("fill", "blue");


            circle.transition()
                .duration(2000)
                .delay(4000)
                .attr("cx", 200)
                .on("end", function ()
                { //Basically a Event listener
                    // v3 is .each v4 is .on
                    d3.select(this)
                        .attr("fill", "orange")
                });

            rect.transition()
                .duration(3000)
                .delay(2000)
                .attr("width", 200)
                .attr("transform", "translate(200, 0)")
                .transition() //Daisy Chaining
                .attr("transform", "translate(200,200)")
                .on("start", function ()
                {
                    d3.select(this)
                        .attr("fill", "blue");
                });


        }
        return {
            link: link,
            restrict: 'E',
            scope: { data: '=' }
        }
    });
