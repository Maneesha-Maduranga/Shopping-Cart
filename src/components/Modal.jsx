import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { openModal,closeModal } from '../features/modal/modalSlice';


function Modal() {
 
  const dispatch = useDispatch()

  return (
    <div className='rounded-lg bg-white p-8 shadow-2xl w-64'>
      <h2 className='text-lg font-bold'>Are you sure you want to do This</h2>

      <div className='mt-4 flex gap-2'>
        <button
          type='button'
          className='rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600'
          onClick={()=>{
            dispatch(clearCart())
            dispatch(closeModal())
          }}
        >
          Yes, I'm sure
        </button>

        <button
          type='button'
          className='rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600'
          onClick={()=>{
            dispatch(closeModal())
          }}
        >
          No, go back
        </button>
      </div>
    </div>
  );
}

export default Modal;
