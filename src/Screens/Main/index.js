import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MainScreen from './Main'

import Actions from 'Stores/TestStore'

const MainScreenContainer = (props) => <MainScreen {...props} />

const mapStateToProps = (state) => {
  return {
    data: state.test.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRequest: params => dispatch(Actions.fetchRequest(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainScreenContainer))
