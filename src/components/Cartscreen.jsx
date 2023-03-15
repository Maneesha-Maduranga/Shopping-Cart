import CartItem from "./CartItem";
import { useSelector,useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";


function Cartscreen() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  if (cartItems.length < 1) {
    return (
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='card-body'>
          <h2 className='card-title'>Your cart Is Empty</h2>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Go Back</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    
      <div className='overflow-x-auto w-3/4 p-16'>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </table>
      <button className="btn btn-wide" onClick={()=>dispatch(openModal())}>Clear Cart</button>
    </div>
    
    
  );
}

export default Cartscreen;
