// enum DaysOfWeek {
//     Monday = 1,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

function dayOfTheWeek(day: number): string {
    return DaysOfWeek[day];
}

console.log(dayOfTheWeek(3))