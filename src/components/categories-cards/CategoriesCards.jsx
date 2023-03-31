import React from 'react';
import CategoryCard from '../category-card/CategoryCard';
import headphonesImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

function CategoriesCards({ flexDirection, gap, height }) {
  const categories = [
    {
      title: 'headphones',
      url: '/headphones',
      img: headphonesImg,
    },
    {
      title: 'speakers',
      url: '/speakers',
      img: speakersImg,
    },
    {
      title: 'earphones',
      url: '/earphones',
      img: earphonesImg,
    },
  ];

  return (
    <div
      className={`flex ${flexDirection} ${gap} pt-24 pb-9 px-6 bg-offWhite w-full rounded-bl-md rounded-br-md z-30`}
    >
      {categories.map(category => (
        <CategoryCard
          key={category.title}
          image={category.img}
          url={category.url}
          title={category.title}
          height={height}
        />
      ))}
    </div>
  );
}

export default CategoriesCards;
