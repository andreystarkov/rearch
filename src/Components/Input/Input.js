import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Notification } from 'Components'
import { Colors } from 'Themes'

const InputContainer = styled.input`
  padding: 10px 5px;
  background-color: ${Colors.white};
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 10px;
`

function Input ({ errors, ...etc }) {
  const renderError = (message, i) => <Notification key={message + i} message={message} />
  return (
    <Fragment>
      <InputContainer {...etc} />
      {errors && errors.map(renderError)}
    </Fragment>
  )
}

export default Input
