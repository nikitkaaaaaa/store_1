import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './Style_main.css';
import Clothes from '../componets/Clothes';
import Electronics from '../componets/Electronics';
import Shoes from '../componets/Shoes';
import Default from '../componets/Default';
import Right_panel from './Right_panel';
import { useDispatch } from 'react-redux';
import { clousFavorites, clouseBasket } from '../redux/states/states';
import Basket from '../componets/Basket';
import Favorites from '../componets/Favorites';
const Main = () => {
      const dispatch = useDispatch();
      const clousebasket = () => {
        dispatch(clouseBasket());
        dispatch(clousFavorites());
      }
      return (
        <div>
          <div className='contenier'>
            <div className='left_panel'>
              <div style={{paddingBottom : '25px',color : 'white'}}>Category</div>
              <br />
              <Link to='/clothes' onClick={clousebasket} style={{color : 'grey',textDecoration : 'none'}}>Clothes</Link>
              <br />
              <Link to='/electronics' onClick={clousebasket} style={{color : 'grey' ,textDecoration : 'none'}}>Electronics</Link>
              <br />
              <Link to='/shoes' onClick={clousebasket} style={{color : 'grey', textDecoration : 'none'}}>Shoes</Link>
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
            <Route path= '/basket' element = {<Basket/>}></Route>
            <Route path= '/favorites' element = {<Favorites/>}></Route>
          </Routes>
        </div>
      )
}
export default Main
