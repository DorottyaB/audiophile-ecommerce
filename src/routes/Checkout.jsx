import { useNavigate } from 'react-router-dom';
import Form from '../components/form/Form';
import OrderSummary from '../components/order-summary/OrderSummary';

function Checkout() {
  const navigate = useNavigate();

  return (
    <>
      <main className='px-6 pt-4 md:px-10 md:pt-8 lg:pt-20 lg:px-2xl'>
        <button
          onClick={() => navigate(-1)}
          className='text-gray text-base font-medium lg:hover:text-orange'
        >
          Go Back
        </button>
        <Form />
        <OrderSummary />
      </main>
    </>
  );
}

export default Checkout;
