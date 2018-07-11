export function addClass (elem, clazz) {
  if (!hasClass(elem, clazz)) {
    elem.className += ' ' + clazz
  }
}

export function hasClass (elem, clazz) {
  return new RegExp('( |^)' + clazz + '( |$)').test(elem.className)
}
