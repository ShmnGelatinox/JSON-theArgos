import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr";

const Calendar = ({ currentDate = dayjs(), onDateChange = () => {} }) => {
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [displayDate, setDisplayDate] = useState(currentDate);

  function onSelectDate(date) {
    setSelectedDate(date);
    onDateChange(date);
  }

  function weekDays() {
    const days = [];

    for (let i = 1; i <= 7; i++) {
      days.push(displayDate.day(i));
    }

    return days;
  }

  function monthDays() {
    const days = [];

    for (let i = 1; i <= 35; i++) {
      days.push(displayDate.day(i));
    }

    return days;
  }

  return (
    <div className="w-full bg-white py-4">
      <div className="mx-auto w-11/12 md:w-3/5 h-56 rounded-2xl bg-white border-t-2 border-secondaryLightGrey shadow-xl">
        <div className="w-full mx-auto flex flex-col justify-center items-center">
          <div className="mb-4 w-[262px] md:w-[284px] flex justify-around">
            {weekDays().map((day) => (
              <span className="w-[34px] text-secondaryBlue font-bold text-center cursor-pointer">
                {day.format("ddd")}
              </span>
            ))}
          </div>
          <div className="flex items-start">
            <span
              className="px-4 font-bold cursor-pointer text-secondaryBlue"
              onClick={() => setDisplayDate(displayDate.subtract(1, "week"))}
            >
              &lt;
            </span>
            <div className="grid grid-cols-7">
              {monthDays().map((day) => (
                <span
                  className={`mx-1 cursor-pointer ${
                    selectedDate.isSame(day, "day")
                      ? "font-bold bg-secondaryBlue text-white rounded-full w-[34px] leading-[34px] inline-block align-middle text-center"
                      : "bg-secondaryLightGrey rounded-full w-[34px] leading-[34px] inline-block align-middle text-center"
                  }`}
                  onClick={() => onSelectDate(day)}
                >
                  {day.get("date")}
                </span>
              ))}
            </div>
            <span
              className="px-4 py-36 font-bold cursor-pointer text-secondaryBlue"
              onClick={() => setDisplayDate(displayDate.add(1, "week"))}
            >
              &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
