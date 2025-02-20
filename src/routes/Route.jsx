import { Route, Routes } from "react-router-dom";
import { dashboardRoutesList } from "../hooks/routes";
import React from 'react'

const DashboardRoute = () => {
    return (
        <>
                <Routes>
                    {dashboardRoutesList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}
                </Routes>
        </>
    )
}

export default DashboardRoute