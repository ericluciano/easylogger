/* js_easylogger on locaStorage "don't change" */
const easylogger = 'js_easylogger'

/* app_name name your app visible on console */
/* Important: App name should contain only letters and underscores. */
const appName = 'app_testing'

const waitForLocalStorage = (): Promise<void> => {
    return new Promise<void>(resolve => {
        const checkStorage = () => {
            if (typeof window !== 'undefined' && window.localStorage) {
                resolve()
            } else {
                setTimeout(checkStorage, 100) // Verifica a cada 100ms
            }
        }

        checkStorage()
    })
}

type LogType = 'log' | 'warn' | 'info' | 'error'

async function handleLog(type: LogType, ..._args: unknown[]): Promise<void> {
    await waitForLocalStorage()
    const loggingData = localStorage.getItem(easylogger)
    const logging = loggingData ? JSON.parse(loggingData) : {}
    const shouldLog = Boolean(logging?.[appName])

    shouldLog &&
        console[type](`%c\u25CF ${appName}:`, 'font-weight: bold', '\n ', ..._args)
}

export function log(..._args: any): void {
    handleLog('log', ..._args)
}

export function warn(..._args: any): void {
    handleLog('warn', ..._args)
}

export function info(..._args: any): void {
    handleLog('info', ..._args)
}

export function error(..._args: any): void {
    handleLog('error', ..._args)
}