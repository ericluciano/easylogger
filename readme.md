# Extension Easy Logger
- An easy to use logger controlled by localStorage.
- The easiest way to control the console: log, info, warn and error.


## Download
[ 📦 ***Easy Logger Extension***](https://chromewebstore.google.com/detail/easy-logger/enoegidahmndmbflkcnanembemogpddp)

[ 📦 ***npm***](https://www.npmjs.com/package/easy-logger-dev)

## Examples
1. React w/ Typescript
```ts
import { setLogName, log, info, warn, error } from 'easy-logger-dev'

setLogName('app_testing')
log('log')
info('info')
warn('warn')
error('error')
```
2. Typescript
```ts
/* js_easylogger on locaStorage "don't change" */
const easylogger = 'js_easylogger'

/* app_name name your app visible on console */
const appName = 'app_testing'

type LogType = 'log' | 'warn' | 'info' | 'error'

function handleLog(type: LogType, ..._args: unknown[]): void {
  const loggingData = window.localStorage.getItem(easylogger)
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
```
3. Javascript w/ Html
```html
<script src="./node_modules/easy-logger-dev/dist/easy-logger-dev.js"></script>
<script>
  EasyLogger.setLogName('app_testing')
  // Install Extension before
  EasyLogger.log('log');
  EasyLogger.info('info');
  EasyLogger.warn('warn');
  EasyLogger.error('error');
</script>
```

4. Javascript
```js
/* js_easylogger on locaStorage "don't change" */
const easylogger = 'js_easylogger'

/* app_name name your app visible on console */
const appName = 'app_testing'

function handleLog(type,..._args) {
  const loggingData = window.localStorage.getItem(easylogger)
  const logging = loggingData ? JSON.parse(loggingData) : {}
  const shouldLog = Boolean(logging?.[appName])

  shouldLog &&
    console[type](`%c\u25CF ${appName}:`, 'font-weight: bold', '\n ', ..._args)
}

function log(..._args) {
  handleLog('log', ..._args)
}

function warn(..._args) {
  handleLog('warn', ..._args)
}

function info(..._args) {
  handleLog('info', ..._args)
}

function error(..._args) {
  handleLog('error', ..._args)
}
```

[![Doe via PayPal](https://img.shields.io/badge/Doe-via%20PayPal-blue)](https://www.paypal.com/donate/?hosted_button_id=SGZ4XU7T4GR7E)

[![Doe via Lightning Network](https://img.shields.io/badge/Doe-via%20Lightning%20Network-orange)](https://getalby.com/p/hiddenuuid)
