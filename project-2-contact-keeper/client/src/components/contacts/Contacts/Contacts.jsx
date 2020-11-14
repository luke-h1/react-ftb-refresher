import React, { useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from '../../ContactItem/ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h3>Add a contact</h3>;
  }
  return (
    <>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  );
};
export default Contacts;
