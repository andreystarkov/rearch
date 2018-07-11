import React, { Component } from 'react'
import { ScreenWrapper } from './MainStyles'

import { Button } from 'Components'

export default class MainScreen extends Component {
  state = {
    is: false
  }
  render () {
    const { is } = this.state
    console.log({ is })
    return (
      <ScreenWrapper>
        <Button
          disabled={is}
          onClick={() => this.setState({ is: !is })}
          gradient='blue'>
          Hey, dude!
        </Button>
      </ScreenWrapper>
    )
  }
}
