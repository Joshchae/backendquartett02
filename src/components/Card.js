import React, { useState } from 'react'
import './Card.css'
import { GiBrain, GiMuscleUp, GiBodyHeight, GiSandsOfTime } from 'react-icons/gi';
import { BiSmile } from 'react-icons/bi';

function Card({character, flipped, currentValue, setCurrentValue, playerCard}) {

  const attributes = ['Height', 'Strength', 'Age', 'IQ', 'Funnyness']
  const icons = {
    'Height' : <GiBodyHeight size={'2rem'}/>,
    'Strength' : <GiMuscleUp size={'2rem'}/>,
    'Age' : <GiSandsOfTime size={'2rem'}/>,
    'IQ': <GiBrain size={'2rem'}/>,
    'Funnyness' : <BiSmile size={'2rem'}/>
  }
  


const toggleClass = (evt) => {
  if (playerCard) {
    console.log(currentValue === evt.target.parentElement.getAttribute('stat'))
    if (currentValue === evt.target.parentElement.getAttribute('stat') || currentValue === evt.target.getAttribute('stat')){
      setCurrentValue('')
    } else if (!evt.target.getAttribute('stat')) {
      setCurrentValue(evt.target.parentElement.getAttribute('stat'))
    } else {
      setCurrentValue(evt.target.getAttribute('stat'))
      
    }
  }
}


    if (!flipped) {
        return <div className="Character bgr--black"></div>
    } else {
        return (
      
  <div className="Character">
    <div className="Character__name">
      {character[0].name}
    </div>
    <img className="Character__picture" src={character[0].picture} width='250' height='250' alt='characters'></img>
    <div className='Character__attr-wrapper'>
    
    {attributes.map((attribute) => <div 
      onClick={toggleClass} 
      stat={attribute.toLowerCase()}// e.g. 'height'
      className={`Character__attr ${currentValue === attribute.toLowerCase() ? 'Character__attr--active': null}`}
      >{icons[attribute]} <span>{attribute}</span>{character[0].[attribute.toLowerCase()]}
      </div> )}
    </div>
  </div>

    )
 }
} 

export default Card