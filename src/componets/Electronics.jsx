import React from 'react'
import { useGetwashing_machinesQuery } from '../redux/electronics/Washing_mashines'
import { useGetrefrigeratorsQuery } from '../redux/electronics/Refrigerators';
import { useGettelevisionsQuery } from '../redux/electronics/Televisions';
import { useGetmicrowave_ovensQuery } from '../redux/electronics/Microwave_ovens';

const Electronics = () => {
  const {data : washing_mashines = []} = useGetwashing_machinesQuery();
  const {data : refrigerators = []} = useGetrefrigeratorsQuery();
  const {data : televisions = []} = useGettelevisionsQuery();
  const {data : microwave_ovens = []} = useGetmicrowave_ovensQuery()
  return (
    <div>
      <div>washing mashines</div>
      {washing_mashines.map(item => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>refrigerators</div>
      {refrigerators.map(item => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>televisions</div>
      {televisions.map(item => <div key={item.id}><img src={item.image} alt="" /></div>)}
      <div>microwave ovens</div>
      {microwave_ovens.map(item => <div key={item.id}><img src={item.image} alt="" /></div>)}
    </div>
  )
}

export default Electronics
