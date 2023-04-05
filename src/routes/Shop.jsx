import { useSelector } from 'react-redux';
import ProductList from '../components/product-list/ProductList';
import { selectCategories, selectIsLoading } from '../selectors/categories/categoriesSelector';
import Spinner from '../components/shared/spinner/Spinner';
import CategoriesCards from '../components/categories-cards/CategoriesCards';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

function Shop({ categoryName }) {
  const categories = useSelector(selectCategories);
  const category = categories.find(category => category.category === categoryName);
  const isLoading = useSelector(selectIsLoading);
  const sortedItems = [...category.items].sort(function (x, y) {
    return x === y ? 0 : x ? -1 : 1;
  });

  return (
    <>
      <header className='bg-darkGray px-20 py-8 text-center'>
        <h1 className='uppercase text-2xl text-white font-bold tracking-widest'>{categoryName}</h1>
      </header>
      <main className='bg-offWhite pt-16 px-6 md:pt-[120px] md:px-10 lg:pt-40 lg:px-[165px]'>
        <article>
          {isLoading ? <Spinner /> : category && <ProductList items={sortedItems} />}
          <section className='my-xl lg:my-2xl'>
            <CategoriesCards
              flexDirection='flex-col md:flex-row'
              gap='gap-y-[70px] md:gap-x-2.5 lg:gap-x-[30px]'
              paddingX='px-0'
              paddingY='pt-12 pb-0 md:pt-11 md:pb-0'
            />
          </section>
          <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Shop;