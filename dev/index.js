var angular = require('angular');
var moment = require('moment');
var dataHelper = require("./helpers/dataHelper.js");
angular.module("mfNotebook", [])
  .directive("mfCalendar", function() {
    return {
      restrict: "EA",
      templateUrl: "dev/templates/template-calendar.html",
      controller: "mfCalendarController"
    };
  })
  .controller("mfCalendarController", function($scope) {
    $scope.calendar = [];
    let calendar = $scope.calendar;
    calendar.push(dataHelper.getWeek);
  });
 
