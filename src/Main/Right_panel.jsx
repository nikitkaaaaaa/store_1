import { useEffect } from "react";
import { useAddlikedMutation, useGetlikedQuery } from "../redux/liked/liked";
const Right_panel = () => {
    const {data = []} = useGetlikedQuery();
    const [addliked] = useAddlikedMutation();
    return (
        <div style={{display : 'flex',border : '2px solid yellow',height : '100%'}}>
            <div style={{border : '2px solid orange',width :'30%'}}>
                {data.map(item => <div key={item.id}><img src={item.image}></img></div>)}
            </div>
            <div style={{border : '2px solid green',width : '70%',height : '100%'}}>
                <div>
                    {data.map(item => <div key={item.id}>{item.price}</div>)}
                    <button>add to basket</button>
                    <button>add to liked</button>
                </div>
            </div>
        </div>
    )
}
export default Right_panel;
