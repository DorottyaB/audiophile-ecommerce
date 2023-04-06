import CategoriesCards from '../categories-cards/CategoriesCards';

function MobileMenu() {
  return (
    <div className='h-full absolute top-[89px] left-0 right-0 z-20 bg-[rgba(0,_0,_0,_0.6)]'>
      <CategoriesCards
        flexDirection='flex-col md:flex-row'
        gap='gap-y-[70px] md:gap-x-2.5'
        paddingX='px-6'
        paddingY='pt-24 pb-9'
      />
    </div>
  );
}

export default MobileMenu;
