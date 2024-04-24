import React from 'react'
import { useGetpantsQuery } from '../redux/clothes/Pants'
import { useGethatsQuery } from '../redux/clothes/Hats'
import { useGettshirtQuery } from '../redux/clothes/Tshirt'
import { useGethoodiesQuery } from '../redux/clothes/Hoodies'
const Clothes = () => {
  const { data: pants = [] } = useGetpantsQuery()
  const { data: hoodies = [] } = useGethoodiesQuery()
  const { data: tshirt = [] } = useGettshirtQuery()
  const { data: hats = [] } = useGethatsQuery()
  return (
    <div className='page_products'>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div className='heading'>Pants</div>
        <div className='products'>
          {pants.map(item => <div key={item.id}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Hoodies</div>
        <div className='products'>
          {hoodies.map(item => <div key={item.id}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
              <div style={{ color: 'white' }}>{item.id}</div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Tshirt</div>
        <div className='products'>
          {tshirt.map(item => <div key={item.id}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ border: '2px solid green', display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Hats</div>
        <div className='products'>
          {hats.map(item => <div key={item.id}>
            <>
              <img src={item.image} alt="" className='products_image'></img>
              <div style={{ color: 'white' }}>Price : {item.price}$</div>
            </>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Clothes