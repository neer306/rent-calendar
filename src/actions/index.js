
export const initial = () => ({
    type: 'MONTH_CHANGE',
    currentDate: new Date(),
    daysArray: getDaysArray(new Date())
});

export const nextMonth = date => {
    const dateCorrected = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return {
        type: 'MONTH_CHANGE',
        currentDate: dateCorrected,
        daysArray: getDaysArray(dateCorrected)
    };
};

export const prevMonth = date => {
    const dateCorrected = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    return {
        type: 'MONTH_CHANGE',
        currentDate: dateCorrected,
        daysArray: getDaysArray(dateCorrected)
    };
};

export const selectDays = selectedIndexArray => ({
    type: 'SET_SELECTED',
    selectedIndexArray,
});

export const clearSelectedDays = () => ({
    type: 'CLEAR_SELECTED',
});


function getDaysArray(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const calendarDays = new Date(year, month + 1, 0).getDate();
    const dateArray = [];

    for (let i = 1; i <= calendarDays; i++) {
        dateArray.push({
            number: i,
            currentMonth: true,
            dateObject: new Date(year, month, i),
            selected: false,
        });
    }

    const firstDayDate = new Date(year, month, dateArray[0].number);
    let firstDay = firstDayDate.getDay();
    const lastDayDate = new Date(year, month, dateArray[dateArray.length - 1].number);
    let lastDay = lastDayDate.getDay();

    while (firstDay > 1) {
        const number = new Date(firstDayDate.setDate(firstDayDate.getDate() - 1)).getDate();
        dateArray.unshift({
            number: number,
            currentMonth: false,
            dateObject: new Date(year, month - 1, number),
            selected: false,
        });
        firstDay--;
    }

    while (lastDay > 0 && lastDay < 7) {
        const number = new Date(lastDayDate.setDate(lastDayDate.getDate() + 1)).getDate();
        dateArray.push({
            number: number,
            currentMonth: false,
            dateObject: new Date(year, month + 1, number),
            selected: false,
        });
        lastDay++;
    }

    return dateArray;
}
