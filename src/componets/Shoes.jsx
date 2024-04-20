import React from 'react'
import { useGetsummershoesQuery } from '../redux/shoes/summershoes'
import { useGetwintershoesQuery } from '../redux/shoes/wintershoes';
import { useGetspringshoesQuery } from '../redux/shoes/springshoes';
import { useGetautumnshoesQuery } from '../redux/shoes/automnshoes';

const Shoes = () => {
  const {data : summer = []} = useGetsummershoesQuery();
  const {data : autom = []} = useGetautumnshoesQuery();
  const {data : winter = []} = useGetwintershoesQuery();
  const {data : spring = []} = useGetspringshoesQuery();
  return (
    <div>
      <div>summershoes</div>
      {summer.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>automshoes</div>
      {autom.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>wintershoes</div>
      {winter.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>springshoes</div>
      {spring.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
    </div>
  )
}

export default Shoes
