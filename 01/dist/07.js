"use strict";
function unknownResponse(obj) {
    if ('value' in obj && typeof obj.value === 'string') {
        return obj.value;
    }
    return '-';
}
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(unknownResponse({ code: 404, text: 'Not found' }));
console.log(unknownResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
