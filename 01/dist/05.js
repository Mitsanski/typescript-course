"use strict";
function summarize(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    let result = [];
    result.push(id);
    if (!middleName) {
        result.push(`${firstName} ${lastName}`);
    }
    else {
        result.push(`${firstName} ${middleName} ${lastName}`);
    }
    result.push(age);
    result.push(hobbies ? hobbies.join(', ') : '-');
    result.push(workInfo ? workInfo.join(' -> ') : '-');
    return result;
}
console.log(summarize(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]));
