enum DaysOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}


function reversedDay(dayName: string): void {
    console.log(DaysOfWeek[dayName as keyof typeof DaysOfWeek] || 'error')
}
reversedDay('Monday')
reversedDay('Friday')
reversedDay('Invalid')