import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SiteContext } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SiteContext>
            <App />
        </SiteContext>
    </BrowserRouter>
)
