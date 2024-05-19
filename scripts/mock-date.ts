import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

// const TIMEZONE_OFFSET = -120;
// const ADDED_HOURS = Math.floor(TIMEZONE_OFFSET / 60) * -1;
// const ADDED_MINUTES = Math.floor(TIMEZONE_OFFSET % 60) * -1;

// Object.assign(Date.prototype, {
//   getTimezoneOffset() {
//     return TIMEZONE_OFFSET;
//   },
//   getHours_: Date.prototype.getHours,
//   getHours() {
//     return this.getHours_() + ADDED_HOURS;
//   },
//   getMinutes_: Date.prototype.getMinutes,
//   getMinutes() {
//     return this.getMinutes_() + ADDED_MINUTES;
//   },
// });

// const date = new Date();
// console.info(date.getTimezoneOffset());
// console.info(date.toLocaleDateString());
// console.info(date.toLocaleTimeString());

// let dayjsDate = dayjs(date);
// console.info(dayjsDate.format());

// dayjsDate = dayjsDate.add(3, "hours");
// console.info(dayjsDate.format());
console.info(dayjs().tz("Asia/Taipei"));
console.info(dayjs.tz.guess());
