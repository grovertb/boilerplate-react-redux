import React    from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'
import createRoutes from './routes'
import Root from './containers/Root'

const store   = configureStore(),
      history = syncHistoryWithStore(browserHistory, store),
      routes  = createRoutes(React, history)

ReactDOM.render(
  <Root store={store} >
    {routes}
  </Root>
, document.getElementById('app')
)
