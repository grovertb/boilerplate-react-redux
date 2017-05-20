import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools.jsx'

export default class Root extends Component{

  getChildContext() {
    const { server } = this.props

    return {
      server
    }
  }

  render() {
    const { store, children } = this.props

    return (
      <Provider store={store}>
        <div>
          {children}
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.defaultProps = {
  server: {}
}

Root.childContextTypes = {
  server: PropTypes.object
}

Root.propTypes = {
  store : PropTypes.object.isRequired,
  server: PropTypes.object
}
