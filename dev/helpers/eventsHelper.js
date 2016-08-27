import DateHelper from "./dataHelper.js";
import { getDayMatrix, getMonthMatrix, getYearMatrix } from "./dataHelper.js"


export function increment ($scope, currentDate) {

  if($scope.matrixType === 'day') {
    currentDate.incrementMonth();
    updateDayScope($scope, currentDate);
  } else if ($scope.matrixType === 'month') {
    currentDate.incrementYear();
    $scope.currentPeriod = currentDate.getYear();
  } else {
    toYearMatrix ($scope, $scope.body[4][4]  + 12);
  }
};

export function decrement ($scope, currentDate) {
  if ($scope.matrixType === 'day') {
    currentDate.decrementMonth();
    updateDayScope($scope, currentDate);
  } else if ($scope.matrixType === 'month') {
    currentDate.decrementYear();
    $scope.currentPeriod = currentDate.getYear();
  } else {
    toYearMatrix ($scope, $scope.body[0][0]  - 12);
  }
};

export function toMonthMatrix ($scope, currentDate) {
  $scope.currentPeriod = currentDate.getYear();
  $scope.body = getMonthMatrix();
  $scope.matrixType = 'month';
};

export function toYearMatrix ($scope, year) {
  $scope.currentPeriod = `${year - 12} - ${year + 12}`;
  $scope.body = getYearMatrix(year);
  $scope.matrixType = 'year';
};

export function updateDayScope($scope, currentDate) {
  $scope.currentPeriod = currentDate.getMonthAsString();
  $scope.body = getDayMatrix(currentDate.getCurrentDate());
};

export function updateDateScope($scope, currentDate) {
  $scope.day = currentDate.getDay();
  $scope.month = currentDate.getMonthAsString();
  $scope.year = currentDate.getYear();
}
