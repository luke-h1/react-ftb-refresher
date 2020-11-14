import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/Contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');
  const { filterContact, clearFilter, filtered } = contactContext;

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <form>
        <input
          type="text"
          ref={text}
          placeholder="Filter Contacts"
          onChange={onChange}
        />
      </form>
    </>
  );
};
export default ContactFilter;
