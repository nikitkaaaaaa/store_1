import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Style_main.css';
import Clothes from '../componets/Clothes';
import Electronics from '../componets/Electronics';
import Shoes from '../componets/Shoes';
import Default from '../componets/Default';
import { useGetbasketQuery } from '../redux/basket/basket';
const Main = () => {
  const {data = []} = useGetbasketQuery();
  return (
    <div >
      <div className='contenier'>
        <div className='left_panel'>
          <div style={{paddingBottom : '25px'}}>Category</div>
          <br />
          <Link to='/clothes'>Clothes</Link>
          <br />
          <Link to='/electronics'>Electronics</Link>
          <br />
          <Link to='/shoes'>Shoes</Link>
        </div>
        <div className='right_panel'>
          <div>{data.map(item => <div>{item.id}</div>)}</div>
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
