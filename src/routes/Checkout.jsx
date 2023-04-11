import { useNavigate } from 'react-router-dom';
import Form from '../components/form/Form';
import Footer from '../components/footer/Footer';

function Checkout() {
  const navigate = useNavigate();

  return (
    <>
      <main className='px-6 pt-4 pb-24 md:px-10 md:pt-12 md:pb-28 lg:pt-20 lg:pb-36 lg:px-2xl'>
        <button
          onClick={() => navigate(-1)}
          className='text-gray text-base font-medium mb-9 lg:hover:text-orange lg:col-span-full lg:justify-self-start'
        >
          Go Back
        </button>
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
