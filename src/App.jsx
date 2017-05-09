import React, { Component } from 'react'
import styles from './components/styl/material.styl'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
    this.handleClic = this.handleClic.bind(this)
    console.log("constructorsss")
  }

  componentDidMount() {
    this.setState({
      contador: 1
    })
    console.log("componentDidMount")
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleClic() {
    this.setState({
      contador : this.state.contador + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          {this.state.contador}
        </p>
        <button className={styles.button} onClick={this.handleClic}>Cambiar</button>
        <br/>
        <button className={`${styles.panel} ${styles.redbg}`} onClick={this.handleClic}>Cambiar</button>
      </div>
    );
  }
}

export default App;
