import React from 'react'
import './Style.css'
const Footer = () => {
  return (
    <div style={{display : 'flex', justifyContent : 'space-between', background : 'black',alignItems : 'center',padding : '1.5%'}}>
      <div><img src="https://cdn-icons-png.flaticon.com/128/10760/10760981.png" alt="" className='image_footer'/></div>
      <div style={{color : 'gray', textAlign : 'center'}}>Developed by <span style={{color : 'purple'}}>Usufi</span></div>
      <div style={{display : 'flex',justifyContent : "space-between",border : '1px solid yellow'}}>
        <div><img src="https://cdn-icons-png.flaticon.com/128/14611/14611689.png" alt="" className='image_footer'/></div>
        <div><img src="https://cdn-icons-png.flaticon.com/128/15134/15134843.png" alt="" className='image_footer'/></div>
      </div>
    </div>
  )
}

export default Footer
