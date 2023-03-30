import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { MobileMenuContext } from '../contexts/MobileMenuContext';
import Logo from '../components/shared/Logo';
import CartIcon from '../components/shared/CartIcon';
import menuIcon from '../assets/shared/tablet/icon-hamburger.svg';
import MobileMenu from '../components/shared/MobileMenu';

function Navigation() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MobileMenuContext);
  return (
    <>
      <div className='bg-darkGray flex justify-between items-center py-8 px-6'>
        <div
          className='lg:hover:cursor-pointer'
          onClick={() => setIsMenuOpen(prevState => !prevState)}
        >
          <img src={menuIcon} alt='Menu' />
        </div>
        <Link to='/'>
          <Logo />
        </Link>
        <Link to='/checkout'>
          <CartIcon />
        </Link>
      </div>
      {isMenuOpen && <MobileMenu />}
      <Outlet />
    </>
  );
}

export default Navigation;
