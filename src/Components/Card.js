import React from 'react'

const Card = ({ community }) => {
  return (
    <div class='card'>
      <img src={community.imgUrl} className='card-img' alt={community.name} />
      <div class='card-content'>
        <p class='card-title'>{community.name}</p>
        <p class='card-description'>${community.averagePrice}</p>
      </div>
    </div>
  )
}

export default Card
