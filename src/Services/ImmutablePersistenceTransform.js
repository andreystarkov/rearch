import { has, when } from 'ramda'
import Immutable from 'seamless-immutable'

const isImmutable = has('asMutable')

const convertToJs = (state) => state.asMutable({ deep: true })

const fromImmutable = when(isImmutable, convertToJs)

const toImmutable = (raw) => Immutable(raw)

// the transform interface that redux-persist is expecting
export default {
  out: (state) => {
    // console.log({ retrieving: state })
    return toImmutable(state)
  },
  in: (raw) => {
    // console.log({ storing: raw })
    return fromImmutable(raw)
  }
}
