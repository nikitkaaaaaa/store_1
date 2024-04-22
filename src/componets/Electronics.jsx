import React from 'react'
import { useGetwashing_machinesQuery } from '../redux/electronics/Washing_mashines'
import { useGetrefrigeratorsQuery } from '../redux/electronics/Refrigerators';
import { useGettelevisionsQuery } from '../redux/electronics/Televisions';
import { useGetmicrowave_ovensQuery } from '../redux/electronics/Microwave_ovens';
import './Style.css'
const Electronics = () => {
  const {data : washing_mashines = []} = useGetwashing_machinesQuery();
  const {data : refrigerators = []} = useGetrefrigeratorsQuery();
  const {data : televisions = []} = useGettelevisionsQuery();
  const {data : microwave_ovens = []} = useGetmicrowave_ovensQuery()
  return (
    <div className='page_products'>
      <div className='heading'>Washing mashines</div>
      <div className='products'>
        {washing_mashines.map(item => <div key={item.id}><img src={item.image} alt="" className='products_image'/><p>{item.price}</p></div>)}
      </div>
      <div  className='heading'>Refrigerators</div>
      <div className='products' >
        {refrigerators.map(item => <div key={item.id}><img src={item.image} alt="" className='products_image' /></div>)}
      </div>
      <div  className='heading'>Televisions</div>
      <div className='products'>
        {televisions.map(item => <div key={item.id} ><img src={item.image} alt="" className='products_image' /></div>)}
      </div>
      <div  className='heading'>Microwave ovens</div>
      <div className='products'>
        {microwave_ovens.map(item => <div key={item.id} ><img src={item.image} alt="" className='products_image' /></div>)}
      </div>
    </div>
  )
}

export default Electronics
