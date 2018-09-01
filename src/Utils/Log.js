import moment from 'moment'

export const LOG_EVENTS = true

export const log = (...props) => LOG_EVENTS && console.log(`[${moment().format('hh:mm:ss')}]`, ...props)
export const logGroupStart = (...props) => LOG_EVENTS && console.group(...props)
export const logGroupEnd = (...props) => LOG_EVENTS && console.group(...props)
