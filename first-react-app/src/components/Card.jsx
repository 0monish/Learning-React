import React from 'react'

const Card = (props) => {
  return (
    
    <div className="bg-lime-300 m-10 p-8 text-black inline-block text-center rounded-xl">
      <h1 className="text-3xl">{props.movieName}</h1>
      <h2 className="text-xl ">{props.directorName}</h2>
      <h3 className="text-lg">{props.releaseDate}</h3>
    </div>
  )
}

export default Card