angular.module('myApp.view8', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view8', {
            templateUrl: 'view8/view8.html',
            controller: 'View8Ctrl'
        });
    }])

    .controller('View8Ctrl', ['$scope', 'DataFactory', function($scope, DataFactory) {

        $scope.data = [];
        $scope.get = function () {
            $scope.items = DataFactory.getCharacters();
            //the model returns a promise and THEN items
            $scope.items.then(function (items) {
                 console.log(JSON.stringify(items.data));
                 console.log(items.data);
                 return this.$scope.data = items.data;
            }, function (status) {
                console.log(status);
            })
        }
    }])

    .factory('DataFactory', ['$http', '$q' , function ($http, $q) {

       return {
           getCharacters: function () {
               var deferred = $q.defer();
               return $http({
                   url: 'bower_components/d3/data/suicide-squad.json', method: 'GET'})
                   .success(function (data, status, headers, config) {
                       deferred.resolve(data);
                   }).error(function (data, status, headers, config) {
                       deferred.reject(status);
                   });
               return deferred.promise;
           }
       }
    }])

    .directive('importData', function(){
        function link(scope, elm, attrs ){


            // data = JSON.stringify(data);
            // console.log("TyTy " + data);

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


                // var canvas = d3.select(".dataContainer").append("svg")
                //     .attr("width", 1000)
                //     .attr("height", 700);
                //
                // canvas.selectAll("rect")
                //     .data(data)
                //     .enter()
                //     .append("rect")
                //     .attr("width", function (d) {
                //         return d.rank * 70
                //     })
                //     .attr("height", 50)
                //     .attr("y", function (d, i) {
                //         return i * 80;
                //     })
                //     .attr("fill", "red");
                //
                // canvas.selectAll("text")
                //     .data(data)
                //     .enter()
                //     .append("text")
                //     .attr("fill", "#ffffff")
                //     .attr("y", function (d,i) {
                //         return i * 80 + 30
                //     })
                //     .attr("x", 5)
                //     .text(function (d) {
                //         return d.name + " rank: " + d.rank;
                //     })



        }
        return {

            restrict: 'E',
            scope: { data: '=' },
            controller: "View8Ctrl",
            link: link
        }
    });
