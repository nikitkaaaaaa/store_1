import React from 'react'
import { useGetwashing_machinesQuery } from '../redux/electronics/Washing_mashines'
import { useGetrefrigeratorsQuery } from '../redux/electronics/Refrigerators';
import { useGettelevisionsQuery } from '../redux/electronics/Televisions';
import { useGetmicrowave_ovensQuery } from '../redux/electronics/Microwave_ovens';
import './Style.css'
import { useAddlikedMutation } from '../redux/liked/liked';
const Electronics = () => {
  const { data: washing_mashines = [] } = useGetwashing_machinesQuery();
  const { data: refrigerators = [] } = useGetrefrigeratorsQuery();
  const { data: televisions = [] } = useGettelevisionsQuery();
  const { data: microwave_ovens = [] } = useGetmicrowave_ovensQuery()
  const [addliked] = useAddlikedMutation();
  const add_at_liked = (item) => {
    addliked({id : item.id,price : item.price,image : item.image});
  }
  return (
    <div className='page_products'>
      <div style={{ border: '2px solid blue', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div className='heading'>Washing mashines</div>
        <div className='products'>
          {washing_mashines.map(item => <div key={item.id} onClick={()=> add_at_liked(item)}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Refrigerators </div>
        <div className='products'>
          {refrigerators.map(item => <div key={item.id} onClick={()=> add_at_liked(item)}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
              <div style={{ color: 'white' }}>{item.id}</div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Televisions  </div>
        <div className='products'>
          {televisions.map(item => <div key={item.id} onClick={()=> add_at_liked(item)}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Microwave ovens </div>
        <div className='products'>
          {microwave_ovens.map(item => <div key={item.id}>
            <>
              <img src={item.image} alt="" className='products_image' onClick={()=> add_at_liked(item)}></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
            </>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Electronics
