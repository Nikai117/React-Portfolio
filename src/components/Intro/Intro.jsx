import React from 'react'
import "./Intro.scss"

export default function Intro() {
  return (
    <div className='Intro' id='Intro'>
        <div className='left'>
          <div className="imgContainer">
            <img src='media/homedev.svg' alt='homedev' />
          </div>
        </div>
        <div className='right'>
        <div className='wrapper'>
          <h2>Hi there, I am</h2>
          <h1>Nikai Delfgou</h1>
          <h3>Software Developer</h3>
        </div>
      </div>
    </div>
  )
}
