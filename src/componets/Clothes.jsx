import React from 'react'
import { useGetpantsQuery } from '../redux/clothes/Pants'
import { useGethatsQuery } from '../redux/clothes/Hats'
import { useGettshirtQuery } from '../redux/clothes/Tshirt'
import { useGethoodiesQuery } from '../redux/clothes/Hoodies'
const Clothes = () => {
  const { data : pants = [] } = useGetpantsQuery()
  const { data : hoodies = [] } = useGethoodiesQuery()
  const { data : tshirt= [] } = useGettshirtQuery()
  const { data : hats= [] } = useGethatsQuery()
  return (
    <div>
        <div>pants</div>
        {pants.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
        <div>hoodies</div>
        {hoodies.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
        <div>tshirt</div>
        {tshirt.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
        <div>hats</div>
        {hats.map((item) => <div key={item.id}><img src={item.image} alt="" /></div>)}
    </div>
  )
}

export default Clothes