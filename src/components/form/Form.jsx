import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    payment: '',
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
    console.log(formData);
  }

  return (
    <form className='mt-6 mb-8 rounded-md bg-white p-6 w-full shadow-sm'>
      <h1 className='text-2xl uppercase text-black font-bold tracking-wider'>Checkout</h1>
      <section className='pt-8 flex flex-col'>
        <h2 className='uppercase text-orange font-bold text-sm tracking-widest'>Billing details</h2>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          Name
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='Alexei Ward'
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          Email Address
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='alexei@mail.com'
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          Phone Number
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='+1 202-555-0136'
            type='tel'
            name='phone'
            id='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </section>
      <section className='pt-8 flex flex-col'>
        <h2 className='uppercase text-orange font-bold text-sm tracking-widest'>Shipping info</h2>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          Your Address
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='1137 Williams Avenue'
            type='text'
            name='address'
            id='address'
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          ZIP Code
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='10001'
            type='text'
            name='zip'
            id='zip'
            value={formData.zip}
            onChange={handleChange}
          />
        </label>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          City
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='New York'
            type='text'
            name='city'
            id='city'
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label className='mt-6 text-xs font-bold text-black flex flex-col'>
          Country
          <input
            className='mt-2 w-full border border-gray/20 rounded-md text-[14px] py-[18px] px-6 focus-visible:border-orange focus-visible:outline-none invalid:outline-none invalid:border-red'
            placeholder='United States'
            type='text'
            name='country'
            id='country'
            value={formData.country}
            onChange={handleChange}
          />
        </label>
      </section>
      <section className='pt-8 flex flex-col'>
        <h2 className='uppercase text-orange font-bold text-sm tracking-widest'>Payment details</h2>
        <h3 className='mt-6 text-xs font-bold text-black'>Payment method</h3>
        <label
          className={`border ${
            formData.payment === 'card' ? 'border-orange' : 'border-gray/20 '
          } font-bold text-black text-[14px] mt-4 w-full rounded-md py-[18px] px-4 flex items-center gap-x-4`}
        >
          <input
            className='accent-orange'
            type='radio'
            name='payment'
            id='card'
            value='card'
            checked={formData.payment === 'card'}
            onChange={handleChange}
            selected
          />
          e-Money
        </label>
        <label
          className={`border ${
            formData.payment === 'cash' ? 'border-orange' : 'border-gray/20 '
          } font-bold text-black text-[14px] mt-4 w-full rounded-md py-[18px] px-4 flex items-center gap-x-4`}
        >
          <input
            className='accent-orange'
            type='radio'
            name='payment'
            id='cash'
            value='cash'
            checked={formData.payment === 'cash'}
            onChange={handleChange}
          />
          Cash on Delivery
        </label>
      </section>
    </form>
  );
}

export default Form;
