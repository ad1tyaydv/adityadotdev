"use client";

import { ActivityCalendar } from "react-activity-calendar";

const nineMonthsAgo = new Date();
nineMonthsAgo.setMonth(nineMonthsAgo.getMonth() - 9);
nineMonthsAgo.setHours(0, 0, 0, 0);

export default function ProofOfWorkCalendar({ data }: { data: CalendarData[] }) {
  if (!data || data.length === 0) {
    const placeholderData: CalendarData[] = [];
    const today = new Date();
    
    for (let d = new Date(nineMonthsAgo); d <= today; d.setDate(d.getDate() + 1)) {
      placeholderData.push({
        date: d.toISOString().split('T')[0],
        count: 0,
        level: 0
      });
    }
    
    data = placeholderData;
  }

  const filteredData = data.filter((day) => {
    const dayDate = new Date(day.date);
    dayDate.setHours(0, 0, 0, 0);
    return dayDate >= nineMonthsAgo;
  });

  return (
    <div
      className="
        flex justify-center
        [&::-webkit-scrollbar]:hidden
        [-ms-overflow-style:'none']
        [scrollbar-width:'none']
      "
    >
      <ActivityCalendar
        data={filteredData}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        hideTotalCount={false}
        showWeekdayLabels
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
        }}
        colorScheme="dark"
      />
    </div>
  );
}