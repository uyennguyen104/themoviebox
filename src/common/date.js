import { default as format } from 'date-fns/format';

export const getDate = (dateStr) => {
  const dateArr = dateStr.split('-');
  return new Date(dateArr[0], dateArr[1], dateArr[2]);
};

export default date => {
  return format(new Date(date), 'MMMM D, YYYY');
};
