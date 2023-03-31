import { useSelector } from 'react-redux';
import ProductList from '../components/product-list/ProductList';
import { selectCategories, selectIsLoading } from '../selectors/categories/categoriesSelector';
import Spinner from '../components/shared/spinner/Spinner';

function Shop({ categoryName }) {
  const categories = useSelector(selectCategories);
  const category = categories.find(category => category.category === categoryName);
  const isLoading = useSelector(selectIsLoading);

  return (
    <main>
      <h1 className='uppercase'>{categoryName}</h1>
      {isLoading ? <Spinner /> : category && <ProductList items={category.items} />}
    </main>
  );
}

export default Shop;
