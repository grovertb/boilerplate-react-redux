import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Counter extends Component{

  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    // require('../css/app.css')
  }


  render() {
    const { counterStore, increment, decrement } = this.props

    return (
      <div>
        <button onClick={increment}>Aumentar</button>
        <span>{counterStore.count}</span>
        <button onClick={decrement}>Disminuir</button>
        <hr />
        <button onClick={this._handleClickAbout}>About</button>
        <button onClick={::this._handleClickFoo}>Foo</button>
      </div>
    )
  }

  _handleClickAbout = () => {
    this.context.router.push('/about')
  }

  _handleClickFoo() {
    this.context.router.push('/foo')
  }

}

Counter.contextTypes = {
  router: PropTypes.object
}
