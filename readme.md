# Extension Easy Logger
[pt-br]   
Easy Logger tem a capacidade de ativar os logs de forma seletiva, apenas para aplicativos ou funcionalidades específicas. Você não precisa mais filtrar manualmente cada log: basta configurar quais apps você deseja monitorar, e o Easy Logger fará o resto.
- Um logger fácil de usar controlado pelo localStorage.
- A maneira mais fácil de controlar o console: log, info, warn e error.

[en]

Easy Logger has the ability to selectively activate logs, only for specific apps or functionalities. You no longer need to manually filter each log: just configure which apps you want to monitor, and Easy Logger will do the rest.

- An easy to use logger controlled by localStorage.
- The easiest way to control the console: log, info, warn and error.


## Download Extension
[ 📦 ***Easy Logger Extension***](https://chromewebstore.google.com/detail/easy-logger/enoegidahmndmbflkcnanembemogpddp)

## NPM
[ 📦 ***NpmJS***](https://www.npmjs.com/package/easy-logger-dev)

```bash
npm install easy-logger-dev
```
## CDN 
```
https://cdn.jsdelivr.net/npm/easy-logger-dev@1.0.12/dist/easy-logger-dev.js
```
**esm**
```
https://cdn.jsdelivr.net/npm/easy-logger-dev@1.0.12/dist/easy-logger-dev.esm.js
```

## Examples
***Important: App name should contain only letters and underscores.***

1. React w/ Typescript and npmjs
```ts
import { setLogName, log, info, warn, error } from 'easy-logger-dev'
/* Important: App name should contain only letters and underscores. */
setLogName('app_testing')
log('log')
info('info')
warn('warn')
error('error')
```
2. Typescript without npmjs
```ts
/*ex: logger.ts*/
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

/* js_easylogger on locaStorage "do not change" */
const easylogger = 'js_easylogger'

/* app_name name your app visible on console */
/* Important: App name should contain only letters and underscores. */
const appName = 'app_testing'

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
```
3. Javascript w/ Html and CDN
```html
<script src="https://cdn.jsdelivr.net/npm/easy-logger-dev@1.0.12/dist/easy-logger-dev.js"></script>
<script>
/* Important: App name should contain only letters and underscores. */
  EasyLogger.setLogName('app_testing')
  
  EasyLogger.log('log');
  EasyLogger.info('info');
  EasyLogger.warn('warn');
  EasyLogger.error('error');
</script>
```

4. Javascript without npmjs
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
