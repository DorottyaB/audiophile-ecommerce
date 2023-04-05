import { Link } from 'react-router-dom';

function Button({ url, type }) {
  const btnPrimary = 'text-white bg-orange lg:hover:bg-lightOrange';
  const btnSecondary = 'text-white bg-darkGray lg:hover:bg-[#4C4C4C]';
  const btnInvert = 'text-darkGray bg-transparent border-2 border-darkGray lg:hover:bg-darkGray';

  return (
    <Link
      to={url}
      className={`inline-block text-center uppercase font-bold text-sm w-40 py-4 ${
        type === 'secondary' ? btnSecondary : type === 'invert' ? btnInvert : btnPrimary
      }`}
    >
      See product
    </Link>
  );
}

export default Button;
