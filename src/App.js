import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Router from 'Router'

import createStore from './Stores'
import gridConfig from './Config/Grid'

import 'sanitize.css/sanitize.css'
import './App.css'

const store = createStore()

class App extends Component {
  componentDidMount () {
    Notification.requestPermission().then((result) => {
      if (result === 'denied') {
        console.log('Notification permission wasn\'t granted. Allow a retry.')
      } else if (result === 'default') {
        console.log('Notification permission request was dismissed.')
      } else if (result === 'granted') {
        // Do something with the granted permission.
        console.log('Notifications are granted')
      } else {
        console.log('Notification unhandled', { result })
      }
    })
  }
  render () {
    return (
      <ThemeProvider theme={gridConfig}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
