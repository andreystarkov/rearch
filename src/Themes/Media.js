import { css } from 'styled-components'

const sizes = {
  xlg: 1170,
  lg: 992,
  md: 768,
  sm: 572,
  xs: 376
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
