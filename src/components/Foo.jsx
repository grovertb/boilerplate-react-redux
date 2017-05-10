import React, { Component } from 'react'

export default class Foo extends Component {
  constructor(props) {
    super(props)
    console.log("FOO", "constructor")
  }

  render() {
    return (
      <div>I am Foo!</div>
    )
  }
}
