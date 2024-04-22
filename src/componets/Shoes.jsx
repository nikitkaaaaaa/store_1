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
      <div className='heading'>Summer shoes</div>
      <div className='products'>
        {summer.map((item) => <div key={item.id}><img src={item.image} alt="" className='products_image'/></div>)}
      </div>
      <div className='heading'>Autom shoes</div>
      <div className='products'>
        {autom.map((item) => <div key={item.id}><img src={item.image} alt="" className='products_image'/></div>)}
      </div>
      <div className='heading'>Winter shoes</div>
      <div className='products'>
        {winter.map((item) => <div key={item.id}><img src={item.image} alt="" className='products_image'/></div>)}
      </div>
      <div className='heading'>Spring shoes</div>
      <div className='products'>
        {spring.map((item) => <div key={item.id}><img src={item.image} alt=""className='products_image' /></div>)}
      </div>
    </div>
  )
}

export default Shoes
