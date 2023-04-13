import errorIcon from '../../assets/error/error.svg';
import Footer from '../footer/Footer';

function Error() {
  return (
    <>
      <div className='flex flex-col gap-y-4 items-center justify-center min-h-screen'>
        <img src={errorIcon} alt='Page not found' width='350' className='lg:w-[400px]' />
        <p className='text-lg text-darkGray font-bold'>Page Not Found</p>
      </div>
      <Footer />
    </>
  );
}

export default Error;
