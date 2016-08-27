import angular from 'angular';
import moment from 'moment';

export function getDayMatrix (dateValue) {
  let result = [];
  let date = moment(dateValue).startOf('month');

  let day = date.day();
  if (day === 0) {
    date.add(-7,'day');
  } else {
    date.add(-day,'day');
  }
  for (let i = 0; i < 6; i++) {
    let row = [];
    for (let j = 0; j < 7; j++) {
      let obj = {
	day: date.date(),
	month: date.get('month') === moment().get('month')?"thisMonth": "nonThisMonth"
      };
      row.push(obj);
      date.add(1, 'day');
    }
    result.push(row);
  }
  return result;
}

export function getMonthMatrix () {
  let result = [
    ['JAN','FEB','MAR','APR'],
    ['MAY','JUN','JUL','AUG'],
    ['SEP','OCT','NOV','DEC']
  ];
  return result;
};

export function getYearMatrix (year) {
  let result = [];
  year = year - 12;
  for (let i = 0; i < 5; i ++) {
    let row = [];
    for (let j = 0; j < 5; j ++) {
      row.push(year);
      year++;
    }
    result.push(row);
  }
  return result;
};
