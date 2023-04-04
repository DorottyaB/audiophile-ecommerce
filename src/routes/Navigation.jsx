import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MobileMenuContext } from '../contexts/MobileMenuContext';
import Logo from '../components/shared/Logo';
import cartIcon from '../assets/shared/desktop/icon-cart.svg';
import menuIcon from '../assets/shared/tablet/icon-hamburger.svg';
import MobileMenu from '../components/mobile-menu/MobileMenu';
import useWindowDimensions from '../custom-hooks/useWindowDimensions';

function Navigation() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MobileMenuContext);
  const { width } = useWindowDimensions();

  return (
    <>
      <nav className='bg-darkGray border-b border-b-lightGray/10 flex justify-between md:justify-start lg:justify-between items-center md:gap-10 py-8 px-6 md:px-10'>
        {width < 1200 ? (
          <div
            className='lg:hover:cursor-pointer'
            onClick={() => setIsMenuOpen(prevState => !prevState)}
          >
            <img src={menuIcon} alt='Menu' />
          </div>
        ) : null}
        <Link to='/'>
          <Logo />
        </Link>
        {width >= 1200 ? (
          <div className='text-white uppercase font-bold text-sm tracking-lg flex gap-8'>
            <Link to='/' className='hover:text-orange'>
              Home
            </Link>
            <Link to='/headphones' className='hover:text-orange'>
              Headphones
            </Link>
            <Link to='/speakers' className='hover:text-orange'>
              Speakers
            </Link>
            <Link to='/earphones' className='hover:text-orange'>
              Earphones
            </Link>
          </div>
        ) : null}
        <div className='lg:w-36 md:ml-auto lg:ml-0'>
          <img className='lg:cursor-pointer md:ml-auto' src={cartIcon} alt='Cart' />
        </div>
      </nav>
      {isMenuOpen && <MobileMenu />}
      <Outlet />
    </>
  );
}

export default Navigation;
