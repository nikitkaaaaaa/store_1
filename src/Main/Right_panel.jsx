import { useState } from "react";
import { useGetbasketQuery, useRemoveToBasketMutation } from "../redux/basket/basket";
import { useAddlikedMutation, useGetlikedQuery } from "../redux/liked/liked";
import { useSelector } from "react-redux";
const Right_panel = () => {
    const {data : liked= []} = useGetlikedQuery();
    const [addliked] = useAddlikedMutation();
    const {data : basket= []} = useGetbasketQuery()
    const stateBasket = useSelector(state => state.stateBasket.stateBasket);
    const [removeToBasket] = useRemoveToBasketMutation();
    return (
       <>
       {/* { stateBasket && 
       <div style={{display : 'flex',border : '2px solid yellow',height : '100%'}}>
       <div style={{border : '2px solid orange',width :'42%'}}>
           {data.map(item => <div>
               <div>
                 <img src={item.image} alt="" style={{border : '2px solid blue'}}/>
               </div>
           </div>)}
       </div>
       <div style={{border : '2px solid green',width : '58%',height : '100%'}}>
           <div style={{height : '100%'}}>
               {data.map(item => <div key={item.id}>
                   <>
                   <div style={{display : 'flex',border : '4px solid black',height : '100%'}}>
                   <img src={item.image} alt="" style={{width : '20%',height : '25%',border : '1px solid blue'}}/>
                    <div style={{display : 'flex',flexDirection : 'column'}}>
                       <div>category : Refrigerators</div>
                       <div>Price : {item.price}$</div>
                       <button style={{padding : '5px 0px'}}>add to liked</button>
                       <button style={{padding : '5px 0px'}}>add to basket</button>
                    </div>
                   </div>
                   </>
               </div>)}
           </div>
       </div>
               </div> } */}
               {stateBasket && 
               <div className="basket">
               <div style={{textAlign : 'center',padding : '2% 0%'}}>Your cart</div>
               <div>{basket.map(item => <div key={item.id}>
                  <div style={{border : '4px solid orange',display : 'flex',justifyContent : 'space-between',padding : '0% 2%',margin : '3% 0%'}}>
                    <div style={{border : '1px solid green',width : '30%',display : 'flex',alignItems : 'flex-start'}}>
                        <div><img src={item.image} alt="" className="products_basket"/></div>
                        <div style={{display : 'flex',flexDirection : 'column',border : '1px solid',alignSelf : 'flex-start'}}>
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
                    <div>
                       -
                    </div>
                  </div>
               </div>)}</div>
               <div>Total price : </div>
          </div>}
       </>
    )
}
export default Right_panel;
