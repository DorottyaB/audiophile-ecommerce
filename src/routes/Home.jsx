import useWindowDimensions from '../custom-hooks/useWindowDimensions';
import { newProduct, featuredProducts } from '../constants';
import About from '../components/about/About';
import Button from '../components/button/Button';
import CategoriesCards from '../components/categories-cards/CategoriesCards';
import Footer from '../components/footer/Footer';

function Home() {
  const { width } = useWindowDimensions();

  const backgroundImg =
    width < 768
      ? featuredProducts[1].image.mobile
      : width < 1200
      ? featuredProducts[1].image.tablet
      : featuredProducts[1].image.desktop;

  return (
    <>
      <header className='h-[90vh] md:h-screen flex flex-col items-center justify-center text-center px-6 bg-hero-image-sm md:bg-hero-image-md lg:bg-hero-image-lg bg-cover bg-bottom'>
        <p className='uppercase text-[14px] text-lightGray/50 tracking-xl -mb-3'>New product</p>
        <h1 className='uppercase text-4xl md:text-6xl text-white font-bold tracking-wider leading-tight mt-4 mb-5 md:my-6 max-w-xs md:max-w-xl'>
          {newProduct.name}
        </h1>
        <p className='text-white leading-6 mb-7 md:mb-10 max-w-xs md:max-w-[350px]'>
          {newProduct.description}
        </p>
        <Button url={newProduct.url} />
      </header>
      <main className='pt-10 px-6 md:px-10 items-stretch'>
        <article>
          <section className='mb-xl lg:mb-2xl'>
            <CategoriesCards
              flexDirection='flex-col md:flex-row'
              gap='gap-y-[70px] md:gap-x-2.5 lg:gap-x-[30px]'
              paddingX='px-0'
              paddingY='pt-12 pb-0 md:pt-11 md:pb-0'
            />
          </section>
          <section className='bg-orange text-center rounded-md bg-pattern-circles bg-no-repeat bg-[center_bottom_8rem] bg-cover flex flex-col items-center py-14 px-6 mb-6'>
            <div className='w-40'>
              <picture>
                <source media='(max-width: 767px)' srcSet={featuredProducts[0].image.mobile} />
                <source media='(max-width: 1199px)' srcSet={featuredProducts[0].image.tablet} />
                <img src={featuredProducts[0].image.desktop} alt='' />
              </picture>
            </div>
            <div>
              <h3 className='text-white text-4xl font-bold leading-tight mt-8 w-44 mx-auto'>
                {featuredProducts[0].name}
              </h3>
              <p className='text-lightGray leading-6 my-6'>{featuredProducts[0].description}</p>
              <Button url={featuredProducts[0].url} type='secondary' />
            </div>
          </section>
          <section
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className='h-80 mb-6 rounded-md overflow-hidden flex items-center'
          >
            <div className='px-6'>
              <h3 className='text-darkGray text-2xl font-bold leading-tight mb-8'>
                {featuredProducts[1].name}
              </h3>
              <Button url={featuredProducts[1].url} type='invert' />
            </div>
          </section>
          <section className='mb-xl'>
            <div className='rounded-md overflow-hidden'>
              <picture>
                <source media='(max-width: 767px)' srcSet={featuredProducts[2].image.mobile} />
                <source media='(max-width: 1199px)' srcSet={featuredProducts[2].image.tablet} />
                <img src={featuredProducts[2].image.desktop} alt='' className='md:w-full' />
              </picture>
            </div>
            <div className='px-6 py-10 bg-lightGray rounded-md mt-6'>
              <h3 className='text-darkGray text-2xl font-bold leading-tight mb-8'>
                {featuredProducts[2].name}
              </h3>
              <Button url={featuredProducts[2].url} type='invert' />
            </div>
          </section>
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Home;
