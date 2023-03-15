import { useSelector, useDispatch } from 'react-redux'
import { removeItem,increseItem,decreseItem} from '../features/cart/cartSlice';

function CartItem({item}) {

  const dispatch = useDispatch()

  return (
    <>
      <tbody>
        <tr>
          <td>
            <div className='flex items-center space-x-3'>
              <div>
                <div className='font-bold'>{item.title}</div>
              </div>
            </div>
          </td>
          <td>${item.price}</td>
          <td>
           <button onClick={()=> dispatch(increseItem(item.id))}>+</button>
           <p>{item.amount}</p>
           <button onClick={() => dispatch(decreseItem(item.id))}>-</button>
          </td>
          <th>
            <button className='btn btn-error btn-xs' onClick={()=> dispatch(removeItem(item.id)) }>Remove</button>
          </th>
        </tr>
      </tbody>
    </>
  );
}

export default CartItem;
