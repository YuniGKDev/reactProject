import { Route, Routes } from 'react-router';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ProductAll />} / >
        <Route path='/login' element={<Login />} / >
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
