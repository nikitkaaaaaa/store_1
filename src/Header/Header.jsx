import './Style_header.css';
import { useNavigate } from 'react-router-dom';
import './Style_app.css'
import { useDispatch } from 'react-redux';
import { clousFavorites, clouseBasket, clousesale, openBasket, openFavorites, opensale } from '../redux/states/states';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goHohe = () => {
    navigate('/');
    dispatch(opensale());
    dispatch(clouseBasket());
    dispatch(clousFavorites());
  }
  const back_to_basket = () => {
    navigate('/basket');
    dispatch(openBasket());
    dispatch(clousesale());
    dispatch(clousFavorites());
  }
  const back_to_favorites = () => {
    navigate('/favorites');
    dispatch(openFavorites());
    dispatch(clouseBasket());
    dispatch(clousesale());
  }
  return (
    <>
    <header>
      <div><img src="https://cdn-icons-png.flaticon.com/128/10760/10760981.png" alt="" className='home' onClick={goHohe} /></div>
      <div style={{ display: 'flex' }}>
        <div><img className='image_header' src="https://cdn-icons-png.flaticon.com/128/12633/12633649.png" alt="" onClick={back_to_favorites}/></div>
        <div><img className='image_header' src="https://cdn-icons-png.flaticon.com/128/12599/12599129.png" onClick={back_to_basket} /></div>
      </div>
    </header>
    </>
  )
}

export default Header
