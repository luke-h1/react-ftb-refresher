import React, { useState, useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';
const ContactForm = () => {
  const contactContext = useContext(ContactContext);

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
    contactContext.addContact(contact);
    setcontact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">Add Contact</h2>
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
            value="Add contact"
            className="btn btn-primnary btn-block"
          />
        </div>
      </form>
    </>
  );
};
export default ContactForm;
