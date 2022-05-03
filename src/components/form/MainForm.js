import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Education from './Education'
import Options from './Options'

export default class MainForm extends Component {
  render() {
    return (
      <div className='right-form'>
        <form action="#" autoComplete='off'>
        <PersonalInfo />
        <Experience />
        <Education />
        <Options />
        </form>
      </div>
    )
  }
}