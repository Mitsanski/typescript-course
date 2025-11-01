function summarize(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [
        number, string, number, string, string
    ] {
    let result = [] as unknown as [number, string, number, string, string];
    result.push(id)
    if (!middleName) {
        result.push(`${firstName} ${lastName}`)
    } else {
        result.push(`${firstName} ${middleName} ${lastName}`)
    }
    result.push(age);

    result.push(hobbies ? hobbies.join(', ') : '-')
    result.push(workInfo ? workInfo.join(' -> ') : '-')

    return result;
}
console.log(summarize(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))