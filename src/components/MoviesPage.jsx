
import React, { useState } from 'react'
import CostumCard from '../components/CostumCard'
import { getRequest } from '../service/getRequest'
import {  Pagination } from '@mui/material'
import { KEY } from '../hooks/getEnv'

const MoviePage = ({api}) => {
  const [page, setPage] = useState(1)
  const data = getRequest(`/${api}?language=en-US&page=${page}&key=${KEY }`, page)
  return (
    <div className='flex items-center pt-21 flex-wrap max-w-[1440px] justify-center gap-[80px] mx-auto'>
      {data?.results?.map((item, index) => <CostumCard key={index} item={item} />)}
      <Pagination onChange={(a,b)=> setPage(b)} className='!text-white bg-white' count={data.total_pages} defaultPage={1} />
    </div>
  )
}

export default MoviePage