import React from 'react'
import CostumCard from '../components/CostumCard'
import { getRequest } from '../service/getRequest'

const Popular = () => {
  const data = getRequest("/popular")
  
  return (
    <div className='flex items-center pt-21 flex-wrap max-w-[1440px] justify-center gap-[80px] mx-auto'>
      {data?.results?.map((item, index)=> <CostumCard key={index} item={item}/>)}
     
    </div>
  )
}

export default Popular