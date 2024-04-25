import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Style_main.css';
import Clothes from '../componets/Clothes';
import Electronics from '../componets/Electronics';
import Shoes from '../componets/Shoes';
import Default from '../componets/Default';
import Right_panel from './Right_panel';
import { useDispatch } from 'react-redux';
import { clouseBasket } from '../redux/states/states';
const Main = () => {
      const dispatch = useDispatch();
      const clousebasket = () => {
        dispatch(clouseBasket());
      }
      return (
        <div >
          <div className='contenier'>
            <div className='left_panel'>
              <div style={{paddingBottom : '25px'}}>Category</div>
              <br />
              <Link to='/clothes' onClick={clousebasket}>Clothes</Link>
              <br />
              <Link to='/electronics' onClick={clousebasket}>Electronics</Link>
              <br />
              <Link to='/shoes' onClick={clousebasket}>Shoes</Link>
            </div>
            <div className='right_panel'>
              <Right_panel/>
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
