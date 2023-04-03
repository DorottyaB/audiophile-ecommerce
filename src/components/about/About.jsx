function About() {
  return (
    <article className='text-center mb-xl md:flex md:flex-col md:items-center'>
      <div className='rounded-md overflow-hidden'>
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet='https://res.cloudinary.com/dcigubvxn/image/upload/v1680198060/audiophile/shared/mobile/image-best-gear_roohid.jpg'
          />
          <source
            media='(max-width: 1199px)'
            srcSet='https://res.cloudinary.com/dcigubvxn/image/upload/v1680198061/audiophile/shared/tablet/image-best-gear_whorum.jpg'
          />
          <img
            src='https://res.cloudinary.com/dcigubvxn/image/upload/v1680198058/audiophile/shared/desktop/image-best-gear_jkpghw.jpg'
            alt=''
          />
        </picture>
      </div>
      <h2 className='text-2xl md:text-5xl md:leading-tight font-bold uppercase tracking-wide mt-10 md:mt-16 mb-8 md:max-w-xl'>
        Bringing you the <span className='text-orange'>best</span> audio gear
      </h2>
      <p className='text-gray leading-6 md:max-w-xl'>
        Located at the heart of New York City, Audiophile is the premier store for high end
        headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
        demonstration rooms available for you to browse and experience a wide range of our products.
        Stop by our store to meet some of the fantastic people who make Audiophile the best place to
        buy your portable audio equipment.
      </p>
    </article>
  );
}

export default About;
