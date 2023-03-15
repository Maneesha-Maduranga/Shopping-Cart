import Cartscreen from './components/Cartscreen';
import Navbar from './components/Navbar'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { priceChange } from './features/cart/cartSlice';
import Modal from './components/Modal';


function App() {
 
  const {cartItems} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(priceChange())
  },[cartItems])


  return (
    <div className='App'>
      <Navbar />
      <main>
          {
            isOpen && <Modal />
          }
          <Cartscreen />
      </main>
    </div>
  );
}

export default App;
