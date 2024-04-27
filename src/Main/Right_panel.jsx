import { useNavigate } from 'react-router-dom';
import { useAddbasketMutation, useGetbasketQuery, useRemoveToBasketMutation } from "../redux/basket/basket";
import { useAddlikedMutation, useGetlikedQuery } from "../redux/liked/liked";
import { useSelector } from "react-redux";
import { useState } from 'react';
const Right_panel = () => {
   const { data: liked = [] } = useGetlikedQuery();
   const [addliked] = useAddlikedMutation();
   const { data: basket = [] } = useGetbasketQuery()
   const stateBasket = useSelector(state => state.stateBasket.stateBasket);
   const [removeToBasket] = useRemoveToBasketMutation();
   const [addbasket] = useAddbasketMutation()
   const total_price = basket.reduce((total, item) => total + item.price, 0);
   const navigate = useNavigate();
   const goHohe = () => {
      navigate('/');
   }
   const add_basket = (item) => {
      addbasket({ id: item.id, image: item.image, price: item.price })
   }
   const test = liked.length > 0 ? liked[liked.length - 1 ] : null;
   return (
      <>
         {!stateBasket &&
         // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9LGOHJNx03N21dJwzCdmV81SXTgegSQ016Q&s" alt="" style={{width:'100%',height:'100%',objectFit : "cover"}}/>
            <div style={{ display: 'flex',  height: '100%', background : 'black',border : '1px solid yellow'}}>
               <div style={{ width: '42%', padding : '1% 1% 0.5% 1%' }}>
                  {test && <img src={test.image} style={{  width: '300px',height : '300px' }}></img>}
               </div>
               <div style={{ width : '100%' }}>
                  <div style={{ height: '100%' }}>
                     {test && (
                        <div style={{display : 'flex', flexDirection : 'column'}}>
                        <div style={{ display: 'flex',paddingLeft :'1%' }}>
                           <img src={test.image} alt="" style={{ width: '100px', height : "100px",paddingTop : '1.8%'}} />
                           <div style={{ display: 'flex', flexDirection: 'column', padding : '1% 0% 0% 2%'}}>
                              <div style={{color : 'white'}}>category : Refrigerators</div>
                              <div style={{color : 'white'}}>Price : {test.price}$</div>
                           </div>
                        </div>
                        <div style={{display : 'flex',justifyContent : 'center',marginTop : '10%'}}>
                            <button className='addBasket' onClick={() => add_basket(test)}>Add to basket</button>
                            <button className='addliked'>Add to liked</button>
                        </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         }
         {stateBasket &&
            <div className="basket">
               {basket.length >= 1 && <div style={{ textAlign: 'center', padding: '2% 0%', color : 'white'}}>Your cart</div>}
               {!basket.length >= 1 && <div style={{ textAlign: 'center', padding: '2% 0%' }}>
                  <>
                     <div style={{color : 'white'}}>The basket is empty</div>
                     <div style={{color : 'white'}}><span onClick={goHohe}>Go to shopping</span></div>
                  </>
               </div>}
               <div style={{border : '1px solid green',overflowY : 'scroll'}}>{basket.map(item => <div key={item.id}>
                  <div style={{  borderRadius : '5px',display: 'flex', justifyContent: "space-between", margin: '3% 0%', alignItems: 'center',
                   background : 'rgb(78, 78, 78)'}}>
                     <div style={{  width: '30%', display: 'flex', alignItems: 'center', paddingLeft : '2%'}}>
                        <div><img src={item.image} alt="" className="products_basket" /></div>
                        <div style={{ display: 'flex', flexDirection: 'column',  alignContent: 'center' }}>
                           <div style={{color : 'white'}}>{item.id}</div>
                           <div style={{color : 'white'}}>{item.category}</div>
                        </div>
                     </div>
                     <div>
                        <div style={{color : 'white'}}>{item.price}$</div>
                     </div>
                     <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/458/458595.png" alt="" className='image_basket' onClick={() => removeToBasket(item.id)}/>
                     </div>
                  </div>
               </div>)}</div>
               {basket.length >= 1 && <div style={{color : 'white',padding : '10px 0px'}}>TOTAL PRICE : {total_price}$</div>}
            </div>}
      </>
   )
}
export default Right_panel;
