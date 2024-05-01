import { useNavigate } from 'react-router-dom';
import { useAddbasketMutation, useGetbasketQuery, useRemoveToBasketMutation } from "../redux/basket/basket";
import { useAddlikedMutation, useGetlikedQuery } from "../redux/liked/liked";
import { useAddfavoritesMutation, useGetfavoritesQuery, useRemoveTofavoritesMutation } from '../redux/favorites/favorites';
import { useDispatch, useSelector } from "react-redux";
import './Style_panel.css'
import { clousFavorites, clousesale } from '../redux/states/states';
const Right_panel = () => {
   const { data: liked = [] } = useGetlikedQuery();
   const [addliked] = useAddlikedMutation();
   const { data: basket = [] } = useGetbasketQuery()
   const { data : favorites } = useGetfavoritesQuery();
   const stateBasket = useSelector(state => state.stateBasket.stateBasket);
   const [removeToBasket] = useRemoveToBasketMutation();
   const [removefavorites] = useRemoveTofavoritesMutation();
   const [addbasket] = useAddbasketMutation();
   const [addfavorites] = useAddfavoritesMutation();
   const total_price_basket = basket ? basket.reduce((total, item) => total + item.new_price, 0) : 0;
const total_price_favorites = favorites ? favorites.reduce((total, item) => total + item.new_price, 0) : 0;
const dispatch = useDispatch();
   const navigate = useNavigate();
   const goHohe = () => {
      navigate('/');
   }
   const add_basket = (item) => {
      addbasket({ id: item.id, image: item.image, old_price: item.old_price, category : item.category, color : item.color,new_price : item.new_price})
   }
   const add_favorites = (item) => {
      addfavorites({ id: item.id, image: item.image, old_price: item.old_price, category : item.category, color : item.color,new_price : item.new_price})
   }
   const test = liked.length > 0 ? liked[liked.length - 1 ] : null;
   const statesale = useSelector(state => state.statesale.statesale);
   const stateFavorites = useSelector(state => state.stateFavorites.stateFavorites);
   return (
      <>
         {statesale && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwv9VZTTYoIGZqXY9uEVUISQ8iQ71gR1OFA&s" alt="" style={{width : '100%' , height : '350px'}}/>}
         {!stateBasket && !statesale && !stateFavorites && 
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
                            <button className='addliked' onClick={() => add_favorites(test)}>Add to favorites</button>
                        </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         }
         {stateFavorites && 
          <div className="favorites">
          {favorites.length >= 1 && <div style={{ textAlign: 'center', padding: '2% 0%', color : 'white'}}>Your favorites</div>}
          {!favorites.length >= 1 && <div style={{ textAlign: 'center', padding: '2% 0%' }}>
             <>
                <div style={{color : 'white'}}>The favorites is empty</div>
                <div style={{color : 'white'}}><span onClick={goHohe}>Go to shopping</span></div>
             </>
          </div>}
          <div style={{overflowY : 'scroll',height : '100%', paddingRight : '50px'}}>{favorites.map(item => <div key={item.id}>
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
                   <img src="https://cdn-icons-png.flaticon.com/128/458/458595.png" alt="" className='image_basket' onClick={() => removefavorites(item.id)}/>
                </div>
             </div>
          </div>)}</div>
          {favorites.length >= 1 && <div style={{color : 'white',padding : '30px 0px 20px 0px'}}>TOTAL PRICE : {total_price_favorites}$</div>}
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
               {basket.length >= 1 && <div style={{color : 'white',padding : '30px 0px 20px 0px'}}>TOTAL PRICE : {total_price_basket}$</div>}
            </div>}
      </>
   )
}
export default Right_panel;
