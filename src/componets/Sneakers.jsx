import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Test from './Test'

const Sneakers = () => {
  return (
    <div>
      <Link to="/sneakers">Перейти к ttcne</Link>
      <Routes>
        <Route path='/sneakers/test' element={<Test/>} />
      </Routes>
    </div>
  )
}

export default Sneakers
