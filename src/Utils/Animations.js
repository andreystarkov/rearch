export const setAnimationDuration = (seconds) => {
  const duration = `${seconds || '0.5s'}s`
  return {
    animationDuration: duration,
    msAnimationDuration: duration,
    WebkitAnimationDuration: duration,
    MozAnimationDuration: duration,
    OAnimationDuration: duration
  }
}

export const configureAnimations = ({ duration, easing, delay }) => {
  const animationDuration = setAnimationDuration(duration)
  return {
    ...animationDuration,
    animationTimingFunction: easing || 'ease',
    animationDelay: delay || 0
  }
}
