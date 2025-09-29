function daysBetweenDates(date1: string, date2: string): number {

    const getTimeDifferenceInMilliSecond = Math.abs(new Date(date2).getTime() - new Date(date1).getTime())
    if (isNaN(getTimeDifferenceInMilliSecond)) return -1

    const calculatedDays = getTimeDifferenceInMilliSecond / (60 * 60 * 24 * 1000)

    return calculatedDays
};


let date1 = "2020-01-15", date2 = "2019-12-31"

console.log(daysBetweenDates(date1, date2));

