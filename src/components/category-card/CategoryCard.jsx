import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../custom-hooks/useWindowDimensions';
import arrow from '../../assets/shared/desktop/icon-arrow-right.svg';
import { MobileMenuContext } from '../../contexts/MobileMenuContext';

function CategoryCard({ image, url, title }) {
  const { setIsMenuOpen } = useContext(MobileMenuContext);
  const { width } = useWindowDimensions();

  function handleClick() {
    if (width <= 768) {
      setIsMenuOpen(false);
    }
  }

  return (
    <div className='h-[165px] lg:h-[204px] bg-lightGray w-full rounded-md pb-6 flex flex-col justify-end items-center relative text-center'>
      <div className='absolute -top-2/3 left-1/2 translate-y-1/2 -translate-x-1/2 w-36 lg:w-48'>
        <img src={image} alt='' />
      </div>
      <h2 className='uppercase text-base lg:text-lg tracking-wide font-bold mb-4'>{title}</h2>
      <Link
        to={url}
        onClick={handleClick}
        className='text-sm font-bold opacity-60 flex items-center justify-center gap-3 lg:hover:text-orange'
      >
        SHOP <img src={arrow} alt='' />
      </Link>
    </div>
  );
}

export default CategoryCard;
