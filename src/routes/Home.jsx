import Button from '../components/button/Button';
import CategoriesCards from '../components/categories-cards/CategoriesCards';
import { newProduct, featuredProducts } from '../constants';

function Home() {
  return (
    <>
      <header className='h-full flex flex-col items-center justify-center text-center px-6 py-28 bg-hero-image-sm md:bg-hero-image-md lg:bg-hero-image-lg bg-cover bg-bottom'>
        <p className='uppercase text-[14px] text-lightGray/50 tracking-xl -mb-3'>New product</p>
        <h1 className='uppercase text-4xl text-white font-bold tracking-wider mt-4 mb-6'>
          {newProduct.name}
        </h1>
        <p className='text-white leading-6 mb-7'>{newProduct.description}</p>
        <Button url={newProduct.url} />
      </header>
      <main className='pt-10 px-6 items-stretch'>
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
              <Button url={featuredProducts[0].url} dark={true} />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

export default Home;
