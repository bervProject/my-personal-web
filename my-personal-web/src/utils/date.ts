import moment from 'moment';

function showMonthYearOnly(date: string): string {
  if (date) {
    return moment(date).format('MMMM YYYY');
  }
  return '';
}

function showDate(date: string) {
  return moment(date, "MM-DD-YYYY").format("MMMM Do YYYY");
}

export { showMonthYearOnly, showDate };
