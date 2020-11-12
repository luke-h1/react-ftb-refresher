import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import { UPDATE_CONTACT } from '../../context/types';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setcontact(current);
    } else {
      setcontact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setcontact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });
  const { name, email, phone, type } = contact;

  const onChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setcontact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? 'Edit Contact' : 'Add Contact'}
        </h2>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <h5>Contact Type:</h5>
        {/* professional */}
        <input
          type="radio"
          placeholder="type"
          name="type"
          value="personal"
          checked={type === 'personal'}
          onChange={onChange}
        />
        Personal{''}
        {/* personal */}
        <input
          type="radio"
          placeholder="type"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange}
        />
        professional{''}
        <div>
          <input
            type="submit"
            value={current ? 'Update Contact' : 'Add Contact'}
            className="btn btn-primnary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </>
  );
};
export default ContactForm;
