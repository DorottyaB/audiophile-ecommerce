import ProductCard from '../product-card/ProductCard';

function ProductList({ items }) {
  return (
    <div>
      {items.map(item => (
        <ProductCard
          key={item.id}
          slug={item.slug}
          isNew={item.new}
          name={item.name}
          image={item.categoryImage.mobile}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ProductList;
