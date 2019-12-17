import React from 'react'
import styled from 'styled-components'

import { Colors } from 'Themes'

const NotificationContainer = styled.div`
  padding: 5px;
  background-color: ${Colors.red};
  margin-top: 2px;
  margin-bottom: 10px;
  color: ${Colors.white};
`

function Notification ({ message }) {
  return (
    <NotificationContainer>
      {message}
    </NotificationContainer>
  )
}

export default Notification
