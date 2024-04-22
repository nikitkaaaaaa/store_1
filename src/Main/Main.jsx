import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Style_main.css';
import Clothes from '../componets/Clothes';
import Electronics from '../componets/Electronics';
import Shoes from '../componets/Shoes';
import Default from '../componets/Default';
const Main = () => {
  return (
    <div >
      <div className='contenier'>
        <div className='left_panel'>
          <div style={{paddingBottom : '25px'}}>Category</div>
          <Link to='/clothes'>Clothes</Link>
          <Link to='/electronics'>Electronics</Link>
          <Link to='/shoes'>Shoes</Link>
        </div>
        <div className='right_panel'>
          <div>NEW</div>
        </div>
      </div>
      <Routes>
        <Route path= '/clothes' element = {<Clothes/>}></Route>
        <Route path= '/electronics' element = {<Electronics/>}></Route>
        <Route path= '/shoes' element = {<Shoes/>}></Route>
        <Route path= '/' element = {<Default/>}></Route>
      </Routes>
    </div>
  )
}

export default Main
