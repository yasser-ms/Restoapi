import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Cuisine from './Cuisine'
import Dsearch from './Dsearch'
import Recipe from './Recipe'

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Cuisine/:type' element={<Cuisine />} />
      <Route path='/Search/:search' element={<Dsearch />}/>
      <Route path='/Recipe/:id' element={<Recipe />}/>
    </Routes>
  )
}

export default Pages