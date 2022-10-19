import dayjs from "dayjs";
import calendar from 'dayjs/plugin/calendar'
import 'dayjs/locale/ko'

dayjs.locale("ko");

export default defineNuxtPlugin(() => {
  dayjs.extend(calendar)

  return {
    provide: { dayjs},
  };
});
