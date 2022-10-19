export function useCalendar() {
  const { $dayjs } = useNuxtApp();
  const month = ref($dayjs().toDate());

  // 최종 결과
  // 이달의 주가 몇개나 있는가?
  // [0, 1, 2, 3, 4, 5, 6]
  // 일, 월, 화, 수, 목, 금, 토

  const weekCount = computed(() => {
    const startWeek = $dayjs(month.value).startOf('month').get('day');
    const monthIndate = $dayjs(month.value).daysInMonth();
  
    return Math.ceil((startWeek + monthIndate) / 7) // 6개의 주가 나온다
  });


  //날짜구하기

  const calendar = computed(() => {
    let result: [Date[]] = [[]];

    for (let week = 0; week < weekCount.value; week++) {
      let weeks = [];
      for (let day = 0; day < 7; day++) {
        const index = (week * 7) + day;

        weeks.push(
          $dayjs(month.value)
            .startOf("month") // 이달의 첫째날(1)
            .startOf("week")  // 이달의 첫째주 -> 일요일(25)
            .add(index, "day")
            .toDate()
        );
      }

      result.push(weeks);
    }

    return result;
  })


  return { calendar, month };
}