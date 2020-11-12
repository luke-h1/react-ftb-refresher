import React from 'react';
import Contacts from '../../contacts/Contacts/Contacts';
import ContactForm from '../../contacts/ContactForm/ContactForm';
const Home = () => {
  return (
    <>
      <div className="grid-2">
        <div>
          <ContactForm />
        </div>
        <Contacts />
      </div>
    </>
  );
};
export default Home;
