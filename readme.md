# Extension Easy Logger
- The easiest way to control the console: log, info, warn and error.
- Uma forma rápida de controlar logs da sua aplicação.
## Examples
```ts
/* js_easylogger on locaStorage "do not change" */
const easylogger = 'js_easylogger'

/* app_name name your app visible on console */
const appName = 'app_summary_custom'

type LogType = 'log' | 'warn' | 'info' | 'error'

function handleLog(type: LogType, ..._args: unknown[]): void {
  const loggingData = window.localStorage.getItem(easylogger)
  const logging = loggingData ? JSON.parse(loggingData) : {}
  const shouldLog = Boolean(logging?.[appName])

  shouldLog &&
    console[type](
      `%c\u25CF ${appName}:`,
      'font-weight: bold',
      `\n${_args.join('\n')}`
    )
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
```

[![Doe via PayPal](https://img.shields.io/badge/Doe-via%20PayPal-blue)](https://www.paypal.com/donate/?hosted_button_id=SGZ4XU7T4GR7E)

[![Doe via Lightning Network](https://img.shields.io/badge/Doe-via%20Lightning%20Network-orange)](https://getalby.com/p/hiddenuuid)
