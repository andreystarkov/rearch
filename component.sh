#!/bin/bash

component="import React, { Component } from 'react'
import styled from 'styled-components'

import { Colors } from 'Themes'

export default class $1 extends Component {
  render () {
    return (<div />)
  }
}"

style=""

index="import $1 from './$1'

export default $1"

echo "Creating component $1"
mkdir ./src/Components/$1
printf '%s\n' "$component" >> ./src/Components/$1/$1.js
# printf '%s\n' "$style" >> ./src/Components/$1/$1.css
printf '%s\n' "$index" >> ./src/Components/$1/index.js
node ./tools/createIndexExports.js ./src/Components
