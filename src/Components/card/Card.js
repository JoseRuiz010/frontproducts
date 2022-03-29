import React from 'react'
import './card.css'
import numeral from 'numeral'
export const Card = ({name,imgUrl,price,category}) => {
  return (
    <div className='content-card'>
        <img alt='compiuter' src={imgUrl}/>
        <h4 className="nombre">{name}</h4>
        <p>{category}</p>
        <h4 className='precio'>{numeral(price).format('$0,0.0')}</h4>
    </div>
  )
}
