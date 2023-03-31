import Button from '../button/Button';

function ProductCard({ slug, isNew, image, name, description }) {
  return (
    <div>
      <img src={image} alt='' />
      {isNew && <p>New product</p>}
      <h2>{name}</h2>
      <p>{description}</p>
      <Button url={`/products/${slug}`} />
    </div>
  );
}

export default ProductCard;
