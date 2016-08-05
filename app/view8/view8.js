angular.module('myApp.view8', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view8', {
            templateUrl: 'view8/view8.html',
            controller: 'View8Ctrl'
        });
    }])

    .controller('View8Ctrl', [function() {

    }])

    .service('DataService', function () {

    })

    .directive('importData', function(){
        function link(scope, el){

            d3.json("bower_components/d3/data/suicide-squad.json", function (data){
                var canvas = d3.select(".dataContainer").append("svg")
                    .attr("width", 1000)
                    .attr("height", 700);

                canvas.selectAll("rect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("width", function (d) {
                        return d.rank * 70
                    })
                    .attr("height", 50)
                    .attr("y", function (d, i) {
                        return i * 80;
                    })
                    .attr("fill", "red");

                canvas.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("fill", "#ffffff")
                    .attr("y", function (d,i) {
                        return i * 80 + 30
                    })
                    .attr("x", 5)
                    .text(function (d) {
                        return d.name + " rank: " + d.rank;
                    })
            })


        }
        return {
            link: link,
            restrict: 'E',
            scope: { data: '=' }
        }
    });
