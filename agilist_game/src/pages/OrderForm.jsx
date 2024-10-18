import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './OrderForm.css';
import SpecialNavbar from '../components/special/SpecialNavbar'
import Footer from '../components/Footer'

const OrderForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_email: '',
    discount_code: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_ssixhjk', 'template_4wtymk1', {
      first_name: formData.first_name,
      last_name: formData.last_name,
      user_email: formData.user_email,
      discount_code: formData.discount_code,
      to_email: 'smart@agency.com'
    }, 'Und5cPgtwLdYI8PWP')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true); 
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div className='container_orderForm'>
        <SpecialNavbar/>
      <form onSubmit={handleSubmit} className='form_orderForm'>
        <h3>Order Form</h3>
        <div className='separate_orderForm'>
          <label className='form1_orderForm' htmlFor="first_name">*First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className='input1_orderForm'
          />
        </div>
        <div className='separate_orderForm'>
          <label className='form1_orderForm' htmlFor="last_name">*Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className='input1_orderForm'
          />
        </div>
        <div className='separate_orderForm'>
          <label className='form1_orderForm' htmlFor="user_email">*Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className='input1_orderForm'
          />
        </div>
        <div className='separate_orderForm'>
          <label className='form1_orderForm' htmlFor="discount_code">Discount Code:</label>
          <input
            type="text"
            id="discount_code"
            name="discount_code"
            value={formData.discount_code}
            onChange={handleChange}
            className='input1_orderForm'
          />
        </div>
        <button className='button_orderForm' type="submit"><p>Order Now</p></button>
        {isSubmitted && (
        <p className="confirmation_message">Order Confirmed</p>
      )}
      </form>

      <Footer/>
    </div>
  );
};

export default OrderForm;
