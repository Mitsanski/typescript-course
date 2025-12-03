type eventType = 'INFO' | 'WARNING' | 'ERROR';

class EventLog {
    message: string;
    type: eventType;
    private _timestamp: Date;

    constructor(message: string, type: eventType){
        this.message = message;
        this.type = type;
        this._timestamp = new Date();
    }

    static createError(message: string): EventLog{
        return new EventLog(message, "ERROR")
    }

    getFormattedLog(): string{
        const time = this._timestamp.toISOString().slice(0, 19).split("T").join(" ")
        return `[${time}] [${this.type}]: ${this.message}`
    }
}

const event = new EventLog('ball', 'INFO')

console.log(event.getFormattedLog())

const error = EventLog.createError('The C drive died rip.')

console.log(error.getFormattedLog())