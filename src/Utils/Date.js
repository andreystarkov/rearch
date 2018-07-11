import moment from 'moment'

export const DATE_FORMAT = 'DD.MM.YYYY'
export const DATE_FORMAT_HUMAN = 'DD MMM, YYYY'
export const formatUnix = (timestamp) => moment(new Date(timestamp * 1000)).format(DATE_FORMAT)
export const formatUnixHuman = (timestamp) => moment(new Date(timestamp * 1000)).format(DATE_FORMAT_HUMAN)
