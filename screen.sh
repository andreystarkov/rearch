#!/bin/bash

component="import React, { Component } from 'react'
// import styled from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'
import { BackgroundImage, Header, HeaderBack } from 'Components'
import { ScreenWrapper, ScreenTitle } from 'Styles/CommonStyles'
import { Colors } from 'Themes'

export default class $1 extends Component {
  render () {
    return (
      <ScreenWrapper backgroundColor={Colors.navyBlue}>
        <BackgroundImage name='about' />
        <Header />
        <HeaderBack />
        <Grid className='over-absolute'>
          <ScreenTitle>$1</ScreenTitle>
        </Grid>
      </ScreenWrapper>
    )
  }
}"

index="import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import $1Screen from './$1'

const $1ScreenContainer = (props) => <$1Screen {...props} />

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter($1ScreenContainer))"

echo "Creating screen $1"
mkdir ./src/Screens/$1
printf '%s\n' "$component" >> ./src/Screens/$1/$1.js
printf '%s\n' "$index" >> ./src/Screens/$1/index.js
node ./tools/createIndexExports.js ./src/Screens
