angular.module('myApp.view9', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view9', {
            templateUrl: 'view9/view9.html',
            controller: 'View9Ctrl'
        });
    }])

    .controller('View9Ctrl', ['$scope', function($scope) {

        $scope.answer = {
            "path": true,
            "arc":  true
        }

        $scope.changeToPath = function(){
            var canvas = d3.select(".paths").selectAll("svg");

            var data = [
                {x: 10, y: 20},
                {x: 100, y: 100},
                {x: 10, y: 200},
                {x: 30, y: 80},
                {x: 60, y: 200}
            ];

            canvas.selectAll("g").remove();

            var group = canvas.append("g")
                .attr("transform", "translate(100,100)");

            var line = d3.line()
                .x(function (d) {
                    return d.x
                })
                .y(function (d) {
                    return d.y
                });


            group.selectAll("path")
                .data([data])
                .enter()
                .append("path")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 5);
        }

        $scope.changeToArc = function () {

            var canvas = d3.select(".paths").selectAll("svg");

            canvas.selectAll("g").remove();

            var group = canvas.append("g")
                .attr("transform", "translate(100,100)");

            var radius = 50;
            var p = Math.PI * 2;

            var arc = d3.arc()
                .innerRadius(radius - 10)
                .outerRadius(radius)
                .startAngle(0)
                .endAngle(p)

            group.append("path")
                .attr("d", arc);
        }

        $scope.changeToDefault = function () {

            var canvas = d3.select(".paths").selectAll("svg");

            canvas.selectAll("g").remove();

            var data = [
                {x: 10, y: 20},
                {x: 100, y: 100},
                {x: 10, y: 200},
                {x: 30, y: 80},
                {x: 60, y: 200}
            ];

            var group = canvas.append("g")
                .attr("transform", "translate(100,100)");

            var line = d3.line()
                .x(function (d) {
                    return d.x
                })
                .y(function (d) {
                    return d.y
                });

            group.selectAll("path")
                .data([data])
                .enter()
                .append("path")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 5);

            var radius = 50;
            var p = Math.PI * 2;

            var arc = d3.arc()
                .innerRadius(radius - 10)
                .outerRadius(radius)
                .startAngle(0)
                .endAngle(p)

            group.append("path")
                .attr("d", arc);
        }

    }])

    .directive('paths', function(){ //Practice Code to work on paths
        function link(scope, el){

            var canvas = d3.select(".paths").append("svg")
                .attr("width", 500)
                .attr("height", 500);

            var data = [
                {x: 10, y: 20},
                {x: 100, y: 100},
                {x: 10, y: 200},
                {x: 30, y: 80},
                {x: 60, y: 200}
            ];

            var group = canvas.append("g")
                .attr("transform", "translate(100,100)");

            var line = d3.line()
                .x(function (d) {
                    return d.x
                })
                .y(function (d) {
                    return d.y
                });

            group.selectAll("path")
                .data([data])
                .enter()
                .append("path")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 5);

        }
        return {
            link: link,
            restrict: 'EA',
            scope: { data: '=' }
        }
    })

    .directive('arcs', function(){ //Practice Code to work on Arcs
        function link(scope, el){

            var canvas = d3.select(".paths").append("svg")
                .attr("width", 500)
                .attr("height", 500);

            var data = [
                {x: 10, y: 20},
                {x: 100, y: 100},
                {x: 10, y: 200},
                {x: 30, y: 80},
                {x: 60, y: 200}
            ];

            var group = canvas.append("g")
                .attr("transform", "translate(100,100)");

            var line = d3.line()
                .x(function (d) {
                    return d.x
                })
                .y(function (d) {
                    return d.y
                });

            group.selectAll("path")
                .data([data])
                .enter()
                .append("path")
                .attr("d", line)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 5);

            var radius = 50;
            var p = Math.PI * 2;

            var arc = d3.arc()
                .innerRadius(radius - 10)
                .outerRadius(radius)
                .startAngle(0)
                .endAngle(p)

            group.append("path")
                .attr("d", arc);


        }
        return {
            link: link,
            restrict: 'E',
            scope: { data: '=' },
            controller: "View9Ctrl"
        }
    });

