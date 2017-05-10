import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
// import AppContainer from '../containers/AppContainer.jsx'
// import CounterContainer from '../containers/counterContainer.jsx'
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

// import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { App, About, Foo } from '../components'

//
// {/*
//   <Provider store={store}>
//     <div></div>
//   </Provider>
// */}
 // {/*  component={App} */}
export default (React, browserHistory) => (
  <Router history={ browserHistory } >
    <Route path="/" >
      <IndexRoute component={App} />
      <Route path="about" component={About} />
      <Route path="foo" component={Foo} />
    </Route>
  </Router>
)
