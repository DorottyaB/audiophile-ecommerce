import Button from '../components/button/Button';

function Home() {
  return (
    <header className='h-full flex flex-col items-center justify-center gap-5 text-center px-6 py-28 bg-hero-image-sm bg-cover bg-bottom'>
      <p className='uppercase text-sm text-lightGray/50 tracking-xl -mb-3'>New product</p>
      <h1 className='uppercase text-4xl text-white font-bold tracking-wider'>
        XX99 Mark II HeadphoneS
      </h1>
      <p className='text-white leading-7 mb-2'>
        Experience natural, lifelike audio and exceptional build quality made for the passionate
        music enthusiast.
      </p>
      <Button url='/headphones' />
    </header>
  );
}

export default Home;
