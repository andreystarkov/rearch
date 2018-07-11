import React from 'react'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import routes from './Routes'

class Routes extends React.Component {
  renderRoute = (route, index) => {
    const { exact, path, component } = route
    return (
      <Route
        key={`route:${index}`}
        exact={exact}
        path={path}
        component={component} />
    )
  }

  renderRoutes = () => {
    return (
      <Switch>
        {routes.map(this.renderRoute)}
      </Switch>
    )
  }

  render () {
    return (
      <BrowserRouter>
        {this.renderRoutes()}
      </BrowserRouter>
    )
  }
}

export default Routes
export { routes }
