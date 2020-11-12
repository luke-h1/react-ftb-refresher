import React, { useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from '../../ContactItem/ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;
  return (
    <>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </>
  );
};
export default Contacts;
