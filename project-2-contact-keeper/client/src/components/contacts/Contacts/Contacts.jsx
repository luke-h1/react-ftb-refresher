import React, { useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from '../../ContactItem/ContactItem';
const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h3>Add a contact</h3>;
  }
  return (
    <>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))
        : contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
    </>
  );
};
export default Contacts;
