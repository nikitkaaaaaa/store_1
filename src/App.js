import React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import Footer from './componets/Footer'
const App = () => {
  return (
    <div style={{background : 'rgb(33,32,35,255)'}}>
      <div style={{margin : '0% 10%',background: 'rgb(33,32,35,255)'}}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
