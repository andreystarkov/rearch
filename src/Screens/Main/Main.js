import React, { Component } from 'react'
import { ScreenWrapper } from './MainStyles'

import { Button } from 'Components'

export default class MainScreen extends Component {
  state = {
    disabled: false
  }
  render () {
    const { disabled } = this.state
    return (
      <ScreenWrapper>
        <Button
          disabled={disabled}
          onClick={() => this.setState({ disabled: !disabled })}
          gradient='blue'>
          {disabled ? 'I am disabled' : 'I am enabled'}
        </Button>
      </ScreenWrapper>
    )
  }
}
