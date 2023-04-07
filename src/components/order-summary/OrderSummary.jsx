import { useSelector } from 'react-redux';
import Button from '../button/Button';
import { selectCartItems, selectCartTotal } from '../../selectors/cart/cartSelector';
import SummaryItem from './summary-item/SummaryItem';

function OrderSummary() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <article className='rounded-md bg-white py-8 px-6 md:px-7 md:py-8 lg:px-8 w-full shadow-sm flex flex-col gap-y-8 justify-between'>
      <h2 className='uppercase text-lg font-bold tracking-wider text-black'>Summary</h2>
      <section className='col-span-full flex flex-col gap-6'>
        {cartItems.map(item => (
          <SummaryItem key={item.id} item={item} />
        ))}
      </section>
      <section className='flex flex-col gap-y-2'>
        <div className='flex justify-between'>
          <h4 className='uppercase text-gray text-base font-medium'>Total</h4>
          <h4 className='text-black text-lg font-bold text-right'>
            $ {cartTotal.toLocaleString('en-US')}
          </h4>
        </div>
        <div className='flex justify-between'>
          <h4 className='uppercase text-gray text-base font-medium'>Shipping</h4>
          <h4 className='text-black text-lg font-bold text-right'>$ 50</h4>
        </div>
        <div className='flex justify-between'>
          <h4 className='uppercase text-gray text-base font-medium'>VAT (included)</h4>
          <h4 className='text-black text-lg font-bold text-right'>
            $ {Math.round(cartTotal * 0.2).toLocaleString('en-US')}
          </h4>
        </div>
        <div className='flex justify-between mt-4'>
          <h4 className='uppercase text-gray text-base font-medium'>Grand total</h4>
          <h4 className='text-orange text-lg font-bold text-right'>
            $ {Math.round(cartTotal * 1.2 + 50).toLocaleString('en-US')}
          </h4>
        </div>
      </section>
      <Button url='/checkout' value='continue & pay' width='100%' />
    </article>
  );
}

export default OrderSummary;
