import React, { useContext, useEffect } from 'react';
import Contacts from '../../contacts/Contacts/Contacts';
import ContactForm from '../../contacts/ContactForm/ContactForm';
import ContactFilter from '../../contacts/ContactFilter/ContactFilter';
import AuthContext from '../../context/auth/authContext';
const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
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
