import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectCategories, selectIsLoading } from '../../selectors/categories/categoriesSelector';
import Button from '../button/Button';
import Spinner from '../shared/spinner/Spinner';

function ProductDetails() {
  const { productSlug } = useParams();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const product = categories
    .map(category => category.items.find(item => item.slug == productSlug))
    .find(item => item);
  console.log(product);
  const isLoading = useSelector(selectIsLoading);

  return (
    <main className='px-6 py-4'>
      <button onClick={() => navigate(-1)} className='text-base text-gray font-medium'>
        Go Back
      </button>
      {isLoading ? (
        <Spinner />
      ) : (
        product && (
          <article className='py-6'>
            <div className='rounded-md overflow-hidden'>
              <img src={product.image.mobile} alt='' />
            </div>
            <section className='mt-8'>
              {product.new && (
                <p className='uppercase text-sm text-orange tracking-xl mb-6'>New product</p>
              )}
              <h1 className='text-2xl tracking-wide font-bold leading-tight uppercase'>
                {product.name}
              </h1>
              <p className='my-6 leading-6 font-medium text-base text-gray'>
                {product.description}
              </p>
              <h2 className='text-lg font-bold'>$ {product.price.toLocaleString('en-US')}</h2>
              {/* add to cart */}
            </section>
            <section className='my-[88px]'>
              <h3 className='text-xl font-bold mb-6 uppercase'>Features</h3>
              <p className='leading-6 font-medium text-base text-gray'>{product.features}</p>
            </section>
            <section className='mb-[88px]'>
              <h3 className='text-xl font-bold mb-6 uppercase'>In the box</h3>
              <ul>
                {product.includes.map(item => (
                  <li
                    key={item.item}
                    className='grid grid-cols-[25px,_1fr] gap-4 text-base text-gray mb-3'
                  >
                    <span className='text-orange font-bold'>{item.quantity}x</span>
                    {item.item}
                  </li>
                ))}
              </ul>
            </section>
            <section className='flex flex-col gap-5 mb-[120px]'>
              <div className='rounded-md overflow-hidden'>
                <img src={product.gallery.first.mobile} alt='' />
              </div>
              <div className='rounded-md overflow-hidden'>
                <img src={product.gallery.second.mobile} alt='' />
              </div>
              <div className='rounded-md overflow-hidden'>
                <img src={product.gallery.third.mobile} alt='' />
              </div>
            </section>
            <section className='text-center mb-[120px]'>
              <h3 className='text-xl font-bold mb-6 uppercase'>You may also like</h3>
              {product.others.map(item => (
                <div key={item.name} className='flex flex-col items-center gap-8 mb-14'>
                  <div className='rounded-md overflow-hidden'>
                    <img src={item.image.mobile} alt='' />
                  </div>
                  <h4 className='text-xl font-bold'>{item.name}</h4>
                  <Button url={`/products/${item.slug}`} />
                </div>
              ))}
            </section>
          </article>
        )
      )}
    </main>
  );
}

export default ProductDetails;
