import angular from 'angular';
import moment from 'moment';
import helper from "./helpers/dataHelper.js";
import "./helpers/constants.js";
import "./helpers/services.js";
angular.module("mfNotebook", ['mfNotebook.constant', 'mfNotebook.service'])
  .directive("mfCalendar", function() {
    return {
      restrict: "EA",
      templateUrl: "dev/templates/template-calendar.html",
      controller: "mfCalendarController"
    };
  })
  .controller("mfCalendarController", ['$scope', 'getWeeks', 'currentDate' ,function($scope, getWeeks, currentDate) {
    $scope.weekDay = getWeeks;
    $scope.currentPeriod = currentDate.getMonthAsString();
    $scope.body = helper.getDayMatrix(currentDate.getCurrentDate());
    $scope.matrixType = 'day';
    $scope.isDay = function () {
      if ($scope.matrixType === 'day') {
        return true;
      } else {
	return false;
      } 
    };
    $scope.isMonth = function () {
console.log(2222)
      if ($scope.matrixType === 'month') {
console.log('true')
        return true;
      } else {
console.log('false')
	return false;
      } 
    };
    $scope.mIncr = function () {
      currentDate.incrementMonth();
      $scope.currentPeriod = currentDate.getMonthAsString();
      $scope.body = helper.getDayMatrix(currentDate.getCurrentDate());
    };
    $scope.mDecr = function () {
      currentDate.decrementMonth();
      $scope.currentPeriod = currentDate.getMonthAsString();
      $scope.body = helper.getDayMatrix(currentDate.getCurrentDate());
    };
    $scope.toMonths = function () {
      $scope.currentPeriod = currentDate.getYear();
      $scope.body = helper.getMonthMatrix();
      $scope.matrixType = 'month';
    };
  }]);
 
