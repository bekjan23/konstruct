import './Contact.css'
import React, { useState } from 'react';
import axios from '../../api/axios-firebase'
import Preloader from '../../UI/Preloader/Preloader';
import { useHistory } from 'react-router-dom';

function Contact() {
  const [customer, setCustomer] = useState({
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  function changeHandler(e) {
    setCustomer(customer => {
      return {
        ...customer,
        [e.target.name]: e.target.value
      }
    })
  }

  function userHandler(e) {
    e.preventDefault();
    setLoading(true);

    const user = {
      ...customer
    };

    axios.post('/users.json', user)
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          history.push('/');
        }, 500);
      })
  }

  if(loading) return <Preloader/>

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact-advice">
            <h2 className="contact__title">To get the consultation</h2>
            <form onSubmit={userHandler} className="advice__form">
              <input type="text" name="name" className="advice__input" placeholder="Name" onChange={changeHandler}/>
              <input type="tel" name="phone" className="advice__input" placeholder="Number" onChange={changeHandler}/>
              <button className="btn advice__btn">SEND</button>
            </form>
          </div>
          <address className="contact-address">
            <h2 className="contact__title">Contact Us</h2>
            <p className="contact-address__name">213 Baker StreetOriel City Kounty7000 KNW,Kountry Name</p>
            <p className="contact-address__number">+23 994 233 0422</p>
            <p className="contact-address__email">info@konstruct.com</p>
          </address>
        </div>
      </div>
    </section>
  )
}

export default Contact
