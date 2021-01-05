import React, { Component } from 'react';
import './card.style.css'

export const Card = (props)=>{
  // console.log(props)
  return (
  <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h1>{props.monster.name}</h1>
    <h2>{props.monster.email}</h2>
  </div>
  )
}