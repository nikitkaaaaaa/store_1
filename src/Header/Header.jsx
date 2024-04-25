import React from 'react'
import './Style_header.css';
import { useNavigate } from 'react-router-dom';
import './Style_app.css'
import { useDispatch } from 'react-redux';
import { clouseBasket, openBasket } from '../redux/states/states';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goHohe = () => {
    navigate('/');
    dispatch(clouseBasket());
  }
  const back_to_basket = () => {
    navigate('/basket');
    dispatch(openBasket());
  }
  return (
    <header>
      <div onClick={goHohe}>+</div>
      <div style={{display : 'flex',border : '1px solid pink'}}>
        <div style={{border : '1px solid'}}><img className='image_header' src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" /></div>
        <div style={{border : '1px solid'}}><img  className='image_header' src="https://cdn-icons-png.flaticon.com/128/711/711897.png" onClick={back_to_basket}/></div>
      </div>
    </header>
  )
}

export default Header
