import { Link } from 'react-router-dom';

function Button({ url, dark }) {
  const bgColor = dark ? 'bg-darkGray' : 'bg-orange';
  const hoverColor = dark ? 'lg:hover:bg-[#4C4C4C]' : 'lg:hover:bg-lightOrange';

  return (
    <Link
      to={url}
      className={`inline-block text-center uppercase font-bold text-white text-sm ${bgColor} w-40 py-4 ${hoverColor}`}
    >
      See product
    </Link>
  );
}

export default Button;
