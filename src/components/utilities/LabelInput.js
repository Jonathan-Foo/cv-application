import React, { Component } from 'react'
import Input from './Input';

export default class LabelInput extends Component {
    constructor(props) {
        super(props);
        }
        
  render() {
    return (
      <>
      <label htmlFor={this.props.id}>{this.props.name}</label>
      <Input id={this.props.id} type={this.props.type} />
      </>
    )
  }
}


// onChange={this.props.handleChange}