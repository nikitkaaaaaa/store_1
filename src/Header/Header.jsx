import React from 'react'
import './Style_header.css';
import { useNavigate } from 'react-router-dom';
import './Style_app.css'
import { useDispatch } from 'react-redux';
import { clousesale, openBasket, opensale } from '../redux/states/states';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goHohe = () => {
    navigate('/');
    dispatch(opensale());
  }
  const back_to_basket = () => {
    navigate('/basket');
    dispatch(openBasket());
    dispatch(clousesale());
  }
  return (
    <>
    <header>
      <div><img src="https://cdn-icons-png.flaticon.com/128/10760/10760981.png" alt="" className='image_header' onClick={goHohe} /></div>
      <div style={{ display: 'flex', border: '1px solid pink' }}>
        <div style={{ border: '1px solid' }}><img className='image_header' src="https://cdn-icons-png.flaticon.com/128/12633/12633649.png" alt="" /></div>
        <div style={{ border: '1px solid' }}><img className='image_header' src="https://cdn-icons-png.flaticon.com/128/12599/12599129.png" onClick={back_to_basket} /></div>
      </div>
    </header>
    </>
  )
}

export default Header
