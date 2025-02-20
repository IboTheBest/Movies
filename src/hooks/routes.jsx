import React from 'react'
import { Popular, NowPlaying, TopRated, Upcoming } from "../pages"
import { PATH } from "./path"

export const dashboardRoutesList = [
    {
        id: 1,
        element: <NowPlaying />,
        path: PATH.nowPlaying
    },
    {
        id: 2,
        element: <Popular />,
        path: PATH.popular
    },
    {
        id: 1,
        element: <TopRated />,
        path: PATH.topRated
    },
    {
        id: 1,
        element: <Upcoming />,
        path: PATH.upcoming
    },
]

export const navbarList = [
    {
        id: 1,
        title: "Now Playing",
        path: PATH.nowPlaying
    },
    {
        id: 1,
        title: "Popular",
        path: PATH.popular
    },
    {
        id: 1,
        title: "Top Rated",
        path: PATH.topRated
    },
    {
        id: 1,
        title: "Upcoming",
        path: PATH.upcoming
    }

]