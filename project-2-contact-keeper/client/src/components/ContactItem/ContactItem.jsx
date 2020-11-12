import React from 'react';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import PropTypes from 'prop-types';
const ContactItem = ({ contact }) => {
  const { name, id, email, phone, type } = contact;

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <div className="card bg-light">
        <h3 className="text-primary text-left">
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'badge' +
              (type === 'professional' ? 'badge-success' : 'badge-primary')
            }
          >
            {capitalize(type)}
          </span>
        </h3>
        <ul className="list">
          {email && (
            <li>
              <BsEnvelopeOpen />
              {email}
            </li>
          )}
          {phone && (
            <li>
              <AiOutlinePhone />
              {phone}
            </li>
          )}
        </ul>
        <p>
          <button className="btn btn-dark btn-sm">Edit</button>
          <button
            className="btn btn-danger
           btn-sm"
          >
            Delete
          </button>
        </p>
      </div>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
