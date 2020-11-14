import React from 'react';
import Contacts from '../../contacts/Contacts/Contacts';
import ContactForm from '../../contacts/ContactForm/ContactForm';
import ContactFilter from '../../contacts/ContactFilter/ContactFilter';
const Home = () => {
  return (
    <>
      <div className="grid-2">
        <div>
          <ContactForm />
        </div>
        <ContactFilter />
        <Contacts />
      </div>
    </>
  );
};
export default Home;
