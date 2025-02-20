import React from 'react'
import MoviePage from '../components/MoviesPage'

const TopRated = () => {
  return (
    <div>
      <MoviePage api={"top_rated"}/>
    </div>
  )
}

export default TopRated