if (process.env.NODE_ENV === 'production' || process.env.PROD) {
  module.exports = require('./Root.prod.jsx')
} else {
  module.exports = require('./Root.dev.jsx')
}

// import React, { PropTypes } from 'react';
// import { Provider } from 'react-redux';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// import { App } from '../components';
//
//
// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <IndexRoute component={App} />
//       <Route path="/(:filter)" component={App} />
//     </Router>
//   </Provider>
// );
//
// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// };
//
// export default Root;
