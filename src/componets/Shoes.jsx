import React from 'react'
import { useGetwinter_shoesQuery } from '../redux/shoes/winter_shoes';
import { useGetsummer_shoesQuery } from '../redux/shoes/summer_shoes';
import { useGetautumn_shoesQuery } from '../redux/shoes/automn_shoes';
import { useGetspring_shoesQuery } from '../redux/shoes/spring_shoes';
const Shoes = () => {
  const {data : summer = []} = useGetsummer_shoesQuery();
  const {data : autom = []} = useGetautumn_shoesQuery();
  const {data : winter = []} = useGetwinter_shoesQuery();
  const {data : spring = []} = useGetspring_shoesQuery()
  return (
    <div>
      <div>summer shoes</div>
      {summer.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>autom shoes</div>
      {autom.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>winter shoes</div>
      {winter.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>spring shoes</div>
      {spring.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
    </div>
  )
}

export default Shoes
