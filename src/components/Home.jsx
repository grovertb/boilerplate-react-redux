import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from '../actions/counterActions'

function Home({ number, increment, decrement }) {
  return (
    <div>
      Some state changes:
      {number}
      <button onClick={() => increment(1)}>Increase</button>
      <button onClick={() => decrement(1)}>Decrease</button>
    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { INCREMENT, DECREMENT }
)(Home)
