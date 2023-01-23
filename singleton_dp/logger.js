/// only one instance of the Logger is created

class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance; 
        }
        this.log = []
        return this
    }
    addLog (message) {
        this.log.push(message)
    }
    getLogs() {
        return this.log
    }
}

const loggerInstance = new Logger() 
Object.freeze(loggerInstance) // should not change
export default loggerInstance



