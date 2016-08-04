angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])

.directive('quickText', function(){
  function link(scope, el){
    var canvas = d3.select("div")
        .append("svg")
        .attr("width", 700)
        .attr("height", 700);

    var circle = canvas.append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 50)
        .attr("fill", "blue");

    var rectangle = canvas.append("rect")
        .attr("width", 100)
        .attr("height", 100);

    var line = canvas.append("line")
        .attr("x1", 0)
        .attr("x2", 200)
        .attr("y1", 100)
        .attr("y2", 300)
        .attr("stroke", "grey")
        .attr("stroke-width", 3);

  }
  return {
    link: link,
    restrict: 'E',
    scope: { data: '=' }
  }
});