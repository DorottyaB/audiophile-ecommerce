import CategoriesCards from '../categories-cards/CategoriesCards';

function MobileMenu() {
  return (
    <div className='min-h-screen absolute top-[89px] left-0 right-0 z-20 bg-[rgba(0,_0,_0,_0.6)]'>
      <CategoriesCards
        flexDirection='flex-col md:flex-row'
        gap='gap-y-[70px] md:gap-x-2.5'
        height='h-[165px]'
      />
    </div>
  );
}

export default MobileMenu;
