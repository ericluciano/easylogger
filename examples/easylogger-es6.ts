import { setLogName, log, info, warn, error } from 'easy-logger-dev'
/* Important: App name should contain only letters and underscores. */
setLogName('app_testing')
log('log')
info('info')
warn('warn')
error('error')