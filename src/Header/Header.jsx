import React from 'react'
import './Style_header.css';
const Header = () => {
  return (
    <div style={{display : 'flex',justifyContent :'space-between'}}>
      <div>+</div>
      <div style={{display : 'flex',border : '1px solid ',justifyContent :'flex-start'}}>
        <div><img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="" /></div>
        <div><img src="https://cdn-icons-png.flaticon.com/128/711/711897.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Header
