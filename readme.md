# Extension Easy Logger
- The easiest way to control the console: log, info, warn and error.
- Uma forma rápida de controlar logs da sua aplicação.
## Examples
```ts
/* js_easylogger on locaStorage "do not change"*/
const easylogger = 'js_easylogger'

/* app_name name your app visible on console */
const app_name = 'app_testing'

export function log(..._args: any) {
  const logging = JSON.parse(localStorage.getItem(easylogger) || '{}');
  const shouldLog = Boolean(logging[app_name]);

  if (shouldLog) {
    console.log(`%c\u25CF ${app_name}:`, 'font-weight: bold', `\n${_args.join('\n')}`)
  }
}
```

[![Doe via PayPal](https://img.shields.io/badge/Doe-via%20PayPal-blue)](https://www.paypal.com/donate/?hosted_button_id=SGZ4XU7T4GR7E)

[![Doe via Lightning Network](https://img.shields.io/badge/Doe-via%20Lightning%20Network-orange)](https://getalby.com/p/hiddenuuid)
