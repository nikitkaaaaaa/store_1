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
   const test = liked.length > 0 ? liked[liked.length - 1] : null;
   return (
      <>
         {!stateBasket &&
            <div style={{ display: 'flex', border: '2px solid yellow', height: '100%' }}>
               <div style={{ border: '2px solid orange', width: '42%' }}>
                  {test && <img src={test.image} style={{ border: '2px solid blue', width: '70%' }}></img>}
               </div>
               <div style={{ border: '2px solid green', width: '58%', height: '100%' }}>
                  <div style={{ height: '100%' }}>
                     {test && (
                        <div style={{ display: 'flex', border: '4px solid black' }}>
                           <img src={test.image} alt="" style={{ width: '20%', border: '1px solid blue' }} />
                           <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2%' }}>
                              <div>category : Refrigerators</div>
                              <div>Price : {test.price}$</div>
                              <button style={{ padding: '5px 0px' }}>add to liked</button>
                              <button style={{ padding: '5px 0px' }} onClick={() => add_basket(test)}>add to basket</button>
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         }
         {stateBasket &&
            <div className="basket">
               {basket.length >= 1 && <div style={{ textAlign: 'center', padding: '2% 0%' }}>Your cart</div>}
               {!basket.length >= 1 && <div style={{ textAlign: 'center', padding: '2% 0%' }}>
                  <>
                     <div>The basket is empty</div>
                     <div><span onClick={goHohe}>Go to shopping</span></div>
                  </>
               </div>}
               <div>{basket.map(item => <div key={item.id}>
                  <div style={{ border: '4px solid orange', display: 'flex', justifyContent: 'space-between', padding: '1% 2%', margin: '3% 0%', alignItems: 'center' }}>
                     <div style={{ border: '1px solid green', width: '30%', display: 'flex', alignItems: 'center' }}>
                        <div><img src={item.image} alt="" className="products_basket" /></div>
                        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid', alignContent: 'center' }}>
                           <div>{item.id}</div>
                           <div>{item.category}</div>
                        </div>
                     </div>
                     <div>
                        <div>{item.price}$</div>
                     </div>
                     <div>
                        <button>+</button>
                        {1}
                        <button>-</button>
                     </div>
                     <div>
                        {item.price}
                     </div>
                     <div onClick={() => removeToBasket(item.id)}>
                        -
                     </div>
                  </div>
               </div>)}</div>
               {basket.length >= 1 && <div>Total price : {total_price}$</div>}
            </div>}
      </>
   )
}
export default Right_panel;
