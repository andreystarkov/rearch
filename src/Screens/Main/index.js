import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MainScreen from './Main'

import Actions from 'Stores/MainStore'

const MainScreenContainer = (props) => <MainScreen {...props} />

const mapStateToProps = (state) => {
  return {
    main: state.main
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStore: params => dispatch(Actions.updateStore(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainScreenContainer))
