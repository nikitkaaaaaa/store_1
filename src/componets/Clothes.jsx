import React from 'react'
import { useGetpantsQuery } from '../redux/clothes/Pants'
import { useGethatsQuery } from '../redux/clothes/Hats'
import { useGettshirtQuery } from '../redux/clothes/Tshirt'
import { useGethoodiesQuery } from '../redux/clothes/Hoodies'
import { useAddlikedMutation } from '../redux/liked/liked'
import { useDispatch } from 'react-redux'
import { clousesale } from '../redux/states/states'
const Clothes = () => {
  const { data: pants = [] } = useGetpantsQuery();
  const { data: hoodies = [] } = useGethoodiesQuery();
  const { data: tshirt = [] } = useGettshirtQuery();
  const { data: hats = [] } = useGethatsQuery();
  const [addliked] = useAddlikedMutation();
  const dispatch = useDispatch();
  const add_at_liked = (item) => {
    addliked({ id: item.id, old_price: item.old_price, image: item.image, category: item.category, color: item.color ,new_price : item.new_price});
    dispatch(clousesale());
  }
  return (
    <div className='page_products'>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
        <div className='heading'>Pants</div>
        <div className='products'>
          {pants.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{display : 'flex'}}>
                    <div style={{ color: 'purple' }}>Price : {item.new_price}$</div>
                    <div style={{ color: 'gray', paddingLeft : '15px' ,textDecoration : "line-through"}}>{item.old_price}$</div>
                  </div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Hoodies</div>
        <div className='products'>
          {hoodies.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{display : 'flex'}}>
                    <div style={{ color: 'purple' }}>Price : {item.new_price}$</div>
                    <div style={{ color: 'gray', paddingLeft : '15px' ,textDecoration : "line-through"}}>{item.old_price}$</div>
                  </div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Tshirt</div>
        <div className='products'>
          {tshirt.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{display : 'flex'}}>
                    <div style={{ color: 'purple' }}>Price : {item.new_price}$</div>
                    <div style={{ color: 'gray', paddingLeft : '15px' ,textDecoration : "line-through"}}>{item.old_price}$</div>
                  </div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
        <div className='heading'>Hats</div>
        <div className='products'>
          {hats.map(item => <div key={item.id} onClick={() => add_at_liked(item)} style={{display : 'flex', justifyContent : "center",paddingTop : '10%'}}>
            <>
              <div style={{ display: 'flex', flexDirection: 'column', width: '90%', borderRadius: '10px', background: 'rgb(33,32,35,255)' }}>
                <img src={item.image} alt="" className='products_image'></img>
                <br />
                <div style={{ padding: '0px 0px 30px 10px' }}>
                  <div style={{ color: 'white' }}>Category : {item.category}</div>
                  <br />
                  <div style={{ color: 'white' }}>Color : {item.color}</div>
                  <br />
                  <div style={{display : 'flex'}}>
                    <div style={{ color: 'purple' }}>Price : {item.new_price}$</div>
                    <div style={{ color: 'gray', paddingLeft : '15px' ,textDecoration : "line-through"}}>{item.old_price}$</div>
                  </div>
                </div>
              </div>
            </>
          </div>)}
        </div>
      </div>
    </div>
  );
}
export default Clothes