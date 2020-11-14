/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.payload
        ),
        loading: false,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false,
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const re = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(re) || contact.email.match(re);
        }),
        loading: false,
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
        loading: false,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        current: null,
        loading: false,
      };
  }
};
