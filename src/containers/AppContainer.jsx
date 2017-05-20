import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppContainer extends Component{

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { children }  = this.props,
          { server }    = this.context

    return (
      <div>
        {React.cloneElement(children, server)}
      </div>
    )
  }
}

AppContainer.contextTypes = {
  server: PropTypes.object
}
