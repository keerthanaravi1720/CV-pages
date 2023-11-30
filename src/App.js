import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Resume from './pages/Resume'
import Crv from './pages/Crv'
import Kresume from './pages/Kresume'
import Navbar from './pages/Navbar'





const App = () => {
  return (
    <div>

<Routes>
  <Route path='/' element={<Resume/>}/>
  <Route path='/a' element={<Crv/>}/>
  <Route path='/k' element={<Kresume/>}/>
  <Route path='/n' element={<Navbar/>}/>
</Routes>

    </div>
  )
}

export default App
