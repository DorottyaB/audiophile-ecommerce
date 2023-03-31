import { Link } from 'react-router-dom';

function Button({ url }) {
  return (
    <Link to={url} className='uppercase font-bold text-white text-xs bg-orange w-40 py-4'>
      See product
    </Link>
  );
}

export default Button;
