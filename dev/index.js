import angular from 'angular';
import moment from 'moment';
import DateHelper from "./helpers/dataHelper.js";
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
  .controller("mfCalendarController", ['$scope', 'getWeeks', 'currentDate', function($scope, getWeeks, currentDate) {
    $scope.weekDay = getWeeks;
    $scope.currentPeriod = currentDate.getMonthAsString();
    $scope.body = DateHelper.getDayMatrix(currentDate.getCurrentDate());
    $scope.matrixType = 'day';
    $scope.isDay = function () {
      if ($scope.matrixType === 'day') {
        return true;
      } else {
	      return false;
      }
    };
    $scope.isMonth = function () {
      if ($scope.matrixType === 'month') {
        return true;
      } else {
	      return false;
      }
    };
    $scope.mIncr = function () {
      let isDay = $scope.matrixType === 'day';
      isDay ? currentDate.incrementMonth() : currentDate.incrementYear();
      $scope.currentPeriod = isDay ? currentDate.getMonthAsString() : currentDate.getYear();
      if (isDay) {
        $scope.body = DateHelper.getDayMatrix(currentDate.getCurrentDate());
      }
    };
    $scope.mDecr = function () {
      let isDay = $scope.matrixType === 'day';
      isDay ? currentDate.decrementMonth() : currentDate.decrementYear();
      $scope.currentPeriod = isDay ? currentDate.getMonthAsString() : currentDate.getYear();
      if (isDay) {
        $scope.body = DateHelper.getDayMatrix(currentDate.getCurrentDate());
      }
    };
    $scope.toMonths = function () {
      $scope.currentPeriod = currentDate.getYear();
      $scope.body = DateHelper.getMonthMatrix();
      $scope.matrixType = 'month';
    };
  }]);
