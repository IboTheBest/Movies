import React from 'react'
import MoviePage from '../components/MoviesPage'

const Upcoming = () => {
  return (
    <div>
      <MoviePage api={"upcoming"}/>
    </div>
  )
}

export default Upcoming