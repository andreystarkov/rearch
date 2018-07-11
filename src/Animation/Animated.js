import React from 'react'
import { configureAnimations } from 'Utils/Animations'

import { DEFAULT_APPEAR_ANIMATION, DEFAULT_DURATION, DEFAULT_TIMING_FUNCTION } from 'Constants/Animation'

// const animations = [ 'bounceIn', 'bounceInDown',
//   'bounceInLeft', 'bounceInRight', 'bounceInUp', 'bounceOut',
//   'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
//   'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
//   'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp',
//   'fadeInUpBig', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig',
//   'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig',
//   'fadeOutUp', 'fadeOutUpBigflipInX', 'flipInY',
//   'flipOutX', 'flipOutY', 'lightSpeedIn', 'lightSpeedOut',
//   'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft',
//   'rotateInUpRight', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight',
//   'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'jackInTheBox',
//   'rollIn', 'rollOut', 'zoomIn', 'zoomInDown',
//   'zoomInLeft', 'zoomInRight', 'zoomInUp', 'zoomOut',
//   'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp',
//   'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp',
//   'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp' ]

export const Animated = ({ children, animation, duration, easing, delay, ...etc }) => {
  return (
    <div
      className={`animated ${animation || DEFAULT_APPEAR_ANIMATION}`}
      style={configureAnimations({
        duration: duration || DEFAULT_DURATION,
        easing: easing || DEFAULT_TIMING_FUNCTION,
        delay
      })}
      {...etc}>
      {children}
    </div>
  )
}

export const FadeInUp = ({ children, ...etc }) => <Animated animation='fadeInUp' {...etc}>{children}</Animated>
export const FadeInLeft = ({ children, ...etc }) => <Animated animation='fadeInLeft' {...etc}>{children}</Animated>
export const FadeInRight = ({ children, ...etc }) => <Animated animation='fadeInRight' {...etc}>{children}</Animated>
export const FadeInDown = ({ children, ...etc }) => <Animated animation='fadeInDown' {...etc}>{children}</Animated>
export const SlideInDown = ({ children, ...etc }) => <Animated animation='slideInDown' {...etc}>{children}</Animated>
export const FadeIn = ({ children, ...etc }) => <Animated animation='fadeIn' {...etc}>{children}</Animated>
export const ZoomIn = ({ children, ...etc }) => <Animated animation='zoomIn' {...etc}>{children}</Animated>
