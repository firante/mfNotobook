import angular from 'angular';
import moment from 'moment';
import { getDayMatrix } from "./helpers/dataHelper.js";
import { updateDateScope, increment, decrement, toMonthMatrix, toYearMatrix, updateDayScope } from "./helpers/eventsHelper.js";
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
    $scope.$watch(function () {
      return currentDate.getDay() + currentDate.getMonth() + currentDate.getYear();
    }, function () {
      updateDateScope($scope, currentDate)
    });
    $scope.weekDay = getWeeks;
    updateDayScope($scope, currentDate);
    $scope.matrixType = 'day';
    $scope.isMonth = function () {
      if ($scope.matrixType === 'month') {
        return true;
      } else {
	      return false;
      }
    };
    $scope.incr = function () {
      increment ($scope, currentDate);
    };
    $scope.decr = function () {
      decrement ($scope, currentDate);
    };
    $scope.toMonths = function () {
      if ($scope.matrixType === 'day') {
        toMonthMatrix ($scope, currentDate);
      } else if ($scope.matrixType === 'month') {
        toYearMatrix ($scope, currentDate.getYear());
      }
    };
    $scope.selectDate = function (value) {
      if ($scope.matrixType === 'day') {
        currentDate.setDate(value);
      } else if ($scope.matrixType === 'month') {
        currentDate.setMonth(value);
        updateDayScope($scope, currentDate);
        $scope.matrixType = 'day';
      } else {
        currentDate.setYear(value);
        toMonthMatrix ($scope, currentDate);
        $scope.matrixType = 'month';
      }
    };
  }]);
