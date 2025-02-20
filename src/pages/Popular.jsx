import React from 'react'
import MoviePage from '../components/MoviesPage'

const Popular = () => {
  return (
    <div>
      <MoviePage api={"popular"}/>
    </div>
  )
}

export default Popular