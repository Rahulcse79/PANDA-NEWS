import React, { Component } from 'react'
import Loading from './Loading.gif'

export default class Spiner extends Component {
  render() {
    return (
      <div>
        <div className="container my-3 text-center">
        <img src={Loading} alt="Loading"/>
        </div>
      </div>
    )
  }
}
