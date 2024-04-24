import React from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import { useSelector } from 'react-redux';
const App = () => {
  const stateBasket = useSelector(state => state.stateBasket.stateBasket);
  return (
    <div style={{border : '1px solid blue',margin : '0% 10%'}}>
      <Header/>
      <Main/>
      {stateBasket + '1'}
    </div>
  )
}

export default App
