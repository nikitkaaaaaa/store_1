import React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
const App = () => {
  return (
    <div style={{background : 'rgb(78, 78, 78)'}}>
      <div style={{border : '1px solid blue',margin : '0% 10%',background: 'rgb(78, 78, 78)'}}>
      <Header/>
      <Main/>
    </div>
    </div>
  )
}

export default App
