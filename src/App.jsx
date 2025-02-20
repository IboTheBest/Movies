import React, { useContext } from 'react'
import './App.css'
import { getRequest } from './service/getRequest'
import LayautFilm from './features'
import DashboardRoute from './routes/Route'
import { Drawer } from '@mui/material'
import { navbarList } from './hooks/routes'
import { Context } from './context'

function App() {
  const data = getRequest("/popular")
  


  return <LayautFilm>
    <DashboardRoute />

  </LayautFilm>
}

export default App
