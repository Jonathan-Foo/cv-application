import React, { Component } from 'react'
import { FaThList } from 'react-icons/fa';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    

  render() {
    const handChange = (e) => {
      const personalInfoChange = this.props.onChange
      return personalInfoChange(e)
    }

    return (
      <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => handChange(e)} />
    )
  }
}


// The difference between text inputs is the state they are connected to and the place holder 