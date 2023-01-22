import moment from 'moment';

function showMonthYearOnly(date: string): string {
  if (date) {
    return moment(date).format('MMMM YYYY');
  }
  return '';
}

export { showMonthYearOnly };
