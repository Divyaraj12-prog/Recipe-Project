import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Recipies from '../pages/Recipies'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/recipes' element={<Recipies/>} />
            <Route path='/single-recipe/:id' element={<SingleRecipe/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/create-recipes' element={<Create/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes