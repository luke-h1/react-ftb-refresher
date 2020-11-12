import React, { useState } from 'react';

const ContactForm = () => {
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

  return (
    <>
      <form>
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
