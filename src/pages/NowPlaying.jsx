import React from 'react'
import MoviePage from '../components/MoviesPage'

const NowPlaying = () => {
  return (
    <div>
      <MoviePage api={"now_playing"}/>
    </div>
  )
}

export default NowPlaying