import React, { useContext } from 'react'
import CostumCard from '../components/CostumCard'
import { getRequest } from '../service/getRequest'
import { Drawer } from '@mui/material'
import { Context } from '../context'
import { navbarList } from '../hooks/routes'
import { Link } from 'react-router-dom'

const NowPlaying = () => {
  const data = getRequest("/now_playing")
  const { toggle, setToggle } = useContext(Context)

  return (
    <div className='flex items-center pt-21 flex-wrap max-w-[1440px] justify-center gap-[80px] mx-auto'>
      {data?.results?.map((item, index) => <CostumCard key={index} item={item} />)}
 
    </div>
  )
}

export default NowPlaying