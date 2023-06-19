import React from 'react'
import { Outlet, Route,Routes } from 'react-router-dom'
import Events from './Events/Events'
import Predictions from './Predictions/Predictions'
import MarketPlace from './Marketplace/Marketplace'
import Trending from './Trending/Trending'
import ListingEvent from './ListingEvent'

const PostsIndex = () => {
  return (
    <>
        <Routes>
            <Route path='predictions' Component={Predictions}/>
            <Route path='events' Component={Events}/>
            <Route path='marketplace' Component={MarketPlace}/>
            <Route path='trending' Component={Trending}/>
            <Route path='listingevents' Component={ListingEvent}/>
        </Routes>
        {/* <Outlet/> */}

    </>
  )
}

export default PostsIndex