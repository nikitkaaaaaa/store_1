import { useNavigate } from 'react-router-dom';
import { useAddbasketMutation, useGetbasketQuery, useRemoveToBasketMutation } from "../redux/basket/basket";
import { useAddlikedMutation, useGetlikedQuery } from "../redux/liked/liked";
import { useSelector } from "react-redux";
import './Style_panel.css'
const Right_panel = () => {
   const { data: liked = [] } = useGetlikedQuery();
   const [addliked] = useAddlikedMutation();
   const { data: basket = [] } = useGetbasketQuery()
   const stateBasket = useSelector(state => state.stateBasket.stateBasket);
   const [removeToBasket] = useRemoveToBasketMutation();
   const [addbasket] = useAddbasketMutation()
   const total_price = basket.reduce((total, item) => total + item.new_price, 0);
   const navigate = useNavigate();
   const goHohe = () => {
      navigate('/');
   }
   const add_basket = (item) => {
      addbasket({ id: item.id, image: item.image, old_price: item.old_price, category : item.category, color : item.color,new_price : item.new_price})
   }
   const test = liked.length > 0 ? liked[liked.length - 1 ] : null;
   const statesale = useSelector(state => state.statesale.statesale)
   return (
      <>
         {statesale && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwv9VZTTYoIGZqXY9uEVUISQ8iQ71gR1OFA&s" alt="" style={{width : '100%' , height : '350px'}}/>}
         {!stateBasket && !statesale &&
            <div style={{ display: 'flex',  height: '100%', background : 'black'}}>
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
                           <div style={{ color: 'white' }}>Category : {test.category}</div>
                           <br />
                           <div style={{ color: 'white' }}>Color : {test.color}</div>
                           <br />
                           <div style={{ color: 'purple' }}>Price : {test.new_price}$</div>
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
               <div style={{overflowY : 'scroll',height : '100%', paddingRight : '50px'}}>{basket.map(item => <div key={item.id}>
                  <div style={{  borderRadius : '5px',display: 'flex', justifyContent: "space-between", margin: '2% 0%', alignItems: 'center',
                   background : 'rgb(33,32,35,255)'}}>
                     <div style={{  width: '30%', display: 'flex', alignItems: 'center', paddingLeft : '2%'}}>
                        <div><img src={item.image} alt="" className="products_basket" /></div>
                        <div style={{ display: 'flex', flexDirection: 'column',  alignContent: 'center'}}>
                           <div style={{color : 'white'}}>{item.category}</div>

                           <div style={{color : 'gray', paddingTop : '10px'}}>Color : {item.color}</div>
                        </div>
                     </div>
                     <div>
                        <div style={{color : 'purple'}}>{item.new_price}$</div>
                     </div>
                     <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/458/458595.png" alt="" className='image_basket' onClick={() => removeToBasket(item.id)}/>
                     </div>
                  </div>
               </div>)}</div>
               {basket.length >= 1 && <div style={{color : 'white',padding : '30px 0px 20px 0px'}}>TOTAL PRICE : {total_price}$</div>}
            </div>}
      </>
   )
}
export default Right_panel;
