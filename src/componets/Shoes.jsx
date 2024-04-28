import React from 'react'
import { useGetwinter_shoesQuery } from '../redux/shoes/winter_shoes';
import { useGetsummer_shoesQuery } from '../redux/shoes/summer_shoes';
import { useGetautumn_shoesQuery } from '../redux/shoes/automn_shoes';
import { useGetspring_shoesQuery } from '../redux/shoes/spring_shoes';
import { useAddlikedMutation } from '../redux/liked/liked';
import { clousesale } from '../redux/states/states';
import { useDispatch } from 'react-redux';
const Shoes = () => {
  const { data: summer = [] } = useGetsummer_shoesQuery();
  const { data: autom = [] } = useGetautumn_shoesQuery();
  const { data: winter = [] } = useGetwinter_shoesQuery();
  const { data: spring = [] } = useGetspring_shoesQuery();
  const [addliked] = useAddlikedMutation();
  const dispatch = useDispatch();
  const add_at_liked = (item) => {
    addliked({ id: item.id, price: item.price, image: item.image, category: item.category, color: item.color });
    dispatch(clousesale());
  }
  return (
    <div className='page_products'>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div className='heading'>Summer shoes</div>
        <div className='products'>
          {summer.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{ color: 'purple' }}>Price : {item.price}$</div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Autom shoes</div>
        <div className='products'>
          {autom.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{ color: 'purple' }}>Price : {item.price}$</div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Winter shoes</div>
        <div className='products'>
          {winter.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{ color: 'purple' }}>Price : {item.price}$</div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Spring ovens </div>
        <div className='products'>
          {spring.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <> <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
              <img src={item.image} alt="" className='products_image'></img>
              <br />
              <div style={{ padding: '0px 0px 30px 10px' }}>
                <div style={{ color: 'white' }}>Category : {item.category}</div>
                <br />
                <div style={{ color: 'white' }}>Color : {item.color}</div>
                <br />
                <div style={{ color: 'purple' }}>Price : {item.price}$</div>
              </div>
            </div>
            </>
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Shoes
