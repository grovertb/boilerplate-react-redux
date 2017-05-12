import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import AppContainer from '../containers/AppContainer'
import CounterContainer from '../containers/counterContainer'
// import Home from '../containers/home.jsx'
// import ErrorHandler from '../containers/error.jsx'

// export default (React, browserHistory) => (
//   <Router history={ browserHistory }>
//     <Route path='/' component={AppContainer}>
//       <IndexRoute component={CounterContainer} />
//       <Route path='/home' component={Home}/>
//       <Route path='/error' component={ErrorHandler}/>
//     </Route>
//   </Router>
// )

import { App, About, Foo } from '../components'

export default (React, browserHistory) => (
  <Router history={ browserHistory } >
    <Route path="/" component={AppContainer}>
      <IndexRoute component={CounterContainer} />
      <Route path="about" component={About} />
      <Route path="foo" component={Foo} />
    </Route>
  </Router>
)
