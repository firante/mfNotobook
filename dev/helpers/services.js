import angular from 'angular';
import moment from 'moment';

angular.module('mfNotebook.service', [])
  .factory('currentDate', function() {
    let currentDate = moment();

    return {
      getDay: function () {
	      return currentDate.date();
      },
      getMonth: function () {
	       return currentDate.get('month');
      },
      getMonthAsString: function() {
	       return currentDate.format('MMMM');
      },
      getYear: function() {
	       return currentDate.get('year');
      },
      getCurrentDate: function() {
        return currentDate.format();
      },
      setDate: function(date) {
	       currentDate.date(date);
      },
      setMonth: function(month) {
	       currentDate.month(month);
      },
      setYear: function(year) {
	       currentDate.year(year);
      },
      incrementMonth: function() {
	       currentDate.add(1, 'month');
      },
      decrementMonth: function() {
	       currentDate.add(-1, 'month');
      },
      incrementYear: function() {
	       currentDate.add(1, 'year');
      },
      decrementYear: function() {
	       currentDate.add(-1, 'year');
      },
    };
  })
