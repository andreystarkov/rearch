import { clone, indexOf, reject } from 'ramda'
import Big from 'big.js'

export const big = (number) => new Big(number).toString()

export const random = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

export const formatNumber = (num) => {
  return num ? num.toLocaleString('en').split(',').join(' ') : num === 0 ? 0 : null
}

export const getScrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop
}

export function pushOrRemoveIfExists (element, array) {
  let next = clone(array)
  if (indexOf(element, next) !== -1) {
    next = reject((el) => el === element, array)
  } else {
    next.push(element)
  }
  return next
}

export const randomHash = () => Math.random().toString(36).substring(7)

export const randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max))

export function getOffset (el) {
  el = el.getBoundingClientRect()
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

export const scrollTo = (elementY, duration) => {
  let startingY = window.pageYOffset
  let diff = elementY - startingY
  let start
  window.requestAnimationFrame(function step (timestamp) {
    if (!start) start = timestamp
    // Elapsed milliseconds since start of scrolling.
    let time = timestamp - start
    // Get percent of completion in range [0, 1].
    let percent = Math.min(time / duration, 1)
    window.scrollTo(0, startingY + diff * percent)
    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

export const getViewportOffset = (element) => {
  let node = element
  let left = node.offsetLeft
  let top = node.offsetTop

  node = node.parentNode

  do {
    let styles = getComputedStyle(node)

    if (styles) {
      let position = styles.getPropertyValue('position')
      left -= node.scrollLeft
      top -= node.scrollTop
      if (/relative|absolute|fixed/.test(position)) {
        left += parseInt(styles.getPropertyValue('border-left-width'), 10)
        top += parseInt(styles.getPropertyValue('border-top-width'), 10)
        left += node.offsetLeft
        top += node.offsetTop
      }
      node = position === 'fixed' ? null : node.parentNode
    } else {
      node = node.parentNode
    }
  } while (node)

  return { left: left, top: top }
}

export const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

export const percentage = (num, total) => num / total * 100

export const compareArrays = (a, b) => {
  let sorted_a = a.concat().sort()
  let sorted_b = b.concat().sort()
  let common = []
  let ai = 0
  let bi = 0

  while (ai < a.length && bi < b.length) {
    if (sorted_a[ai] === sorted_b[bi]) {
      common.push(sorted_a[ai])
      ai++
      bi++
    } else if (sorted_a[ai] < sorted_b[bi]) {
      ai++
    } else {
      bi++
    }
  }
  return common
}

export function chunk (arr, chunkSize) {
  let output = []
  for (var i = 0, len = arr.length; i < len; i += chunkSize) {
    output.push(arr.slice(i, i + chunkSize))
  }
  return output
}

export function getRem () {
  return parseFloat(getComputedStyle(document.documentElement).fontSize)
}

export const rem = getRem()

export const getMeasuresById = (id) => {
  const el = document.getElementById(id)
  const positionInfo = el.getBoundingClientRect()
  const height = positionInfo.height
  const width = positionInfo.width
  return { height, width }
}

export const isEmpty = (x) => typeof (x) === 'undefined' || x === null
export const limitArr = (arr, x) => arr.filter((f, i) => i < x)

export const checkLotteryStatus = (lottery) => {
  const { isActive, closeLotteryBlock, currentBlock, blockForRandom, isWinTicket } = lottery
  return (isActive && closeLotteryBlock && currentBlock && closeLotteryBlock > currentBlock) ||
         (isActive && currentBlock && blockForRandom && blockForRandom > currentBlock && isWinTicket)
}

export const selectPowerPlay = (f, i) => f.pp

export const checkMultiplierStatus = (user, countOfDraws) => {
  const { numEndDraws } = user
  if (numEndDraws < countOfDraws || (numEndDraws === 0 && countOfDraws === 0)) {
    return true
  }
  return false
}
