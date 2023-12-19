import { addMonths, subMonths } from "date-fns";

export function getDisplayableMonths(date) {
  const year = date.getFullYear(),
    month = date.getMonth(); // getMonth() method gives 0-11 month numbers
  const tempDate = new Date(year, month); // Month argument should be zero indexed(0-11)

  const monthsData = [];
  // Getting previous six months
  for (let i = 6; i >= 1; i--) {
    const currentDate = subMonths(tempDate, i);

    const monthObj = {
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };
    monthsData.push(monthObj);
  }

  // Getting next five months along with the current month
  for (let i = 0; i <= 5; i++) {
    const currentDate = addMonths(tempDate, i);
    const monthObj = {
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };
    monthsData.push(monthObj);
  }

  return monthsData;
}
