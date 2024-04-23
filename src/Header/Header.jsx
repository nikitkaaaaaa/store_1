import React from 'react'
import './Style_header.css';
import { useNavigate } from 'react-router-dom';
import './Style_app.css'
const Header = () => {
  const navigate = useNavigate();
  const goHohe = () => {
    navigate('/');
  }
  return (
    <header>
      <div onClick={goHohe}>+</div>
      <div style={{display : 'flex',border : '1px solid pink'}}>
        <div style={{border : '1px solid',alignItems : 'center'}}><img className='image_header' src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" /></div>
        <div style={{border : '1px solid',alignSelf :'center'}}><img  className='image_header' src="https://cdn-icons-png.flaticon.com/128/711/711897.png" alt=""/></div>
      </div>
    </header>
  )
}

export default Header
