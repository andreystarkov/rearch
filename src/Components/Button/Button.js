import React, { Component } from 'react'

import { RoundButton } from './ButtonStyles'

export default class ButtonComponent extends Component {
  render () {
    const { children, ...etc } = this.props
    return (
      <RoundButton {...etc}>{children}</RoundButton>
    )
  }
}
