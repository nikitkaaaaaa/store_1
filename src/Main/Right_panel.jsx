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
         {statesale && 
         <div style={{position :'relative',zIndex : '1',background : 'black',width : '100%',height : '100%'}}>
            <div style={{color : 'rgb(33,32,35,255)',fontSize : '90px',paddingLeft : '5%', paddingTop : '1%'}}>BIG SALE 20%</div>
            <div style={{color : 'gray',paddingLeft : '5%',paddingTop : "1%"}}>THE BESTSELLER OF 2024</div>
            <div style={{color : 'white',paddingLeft : '5%',fontSize : '56px'}}>SHOES</div>
            <div style={{color : 'white',paddingLeft : '5%',fontSize : '56px'}}>COLOR WHITE</div>
            <img src='data:image/jpeg;base64,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'
             alt="" style={{width : '300px' , height : '300px',position : 'absolute', top : '12%',right : '10%'}}/>
            <button style={{padding : '10px 35px',background : 'purple',position : "absolute" ,zIndex : '2',color : 'white',borderRadius : '5px',top : '77.5%', left:'5.5%',
            border : 'none',outline : 'none' }}>
               Shop Now</button>
         </div>
         }
         {!stateBasket && !statesale && !stateFavorites && 
            <div style={{ display: 'flex',  height: '100%', background : 'black'}}>
               <div style={{ width: '42%', padding : '1% 1% 0.5% 1%' }}>
                  {test && <img src={test.image} style={{  width: '350px',height : '350px' }}></img>}
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
                        <div style={{display : 'flex',justifyContent : "flex-start",paddingLeft : '16.5%'}}>
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
