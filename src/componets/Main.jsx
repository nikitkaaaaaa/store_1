import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Sneakers from './Sneakers';

const Main = () => {
  return (
    <div>
      <Link to="/sneakers">Перейти к кроссовкам</Link>
      <Routes>
        <Route path='/sneakers' element={<Sneakers />} />
      </Routes>
    </div>
  );
};

export default Main;