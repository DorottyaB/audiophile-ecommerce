import { Link } from 'react-router-dom';

function Button({ url }) {
  return (
    <Link
      to={url}
      className='inline-block text-center uppercase font-bold text-white text-sm bg-orange w-40 py-4 lg:hover:bg-lightOrange'
    >
      See product
    </Link>
  );
}

export default Button;
