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
    console.log(`${app_name}\n${_args.join('\n')}`);
  }
}
```