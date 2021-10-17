// import shortid from 'shortid';
// import PropTypes from 'prop-types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = createAction('ADD_CONTACT', ({ name, number }) => {
//   return {
//     payload: {
//       id: shortid.generate(),
//       name,
//       number,
//     },
//   };
// });

const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsError = createAction('phonebook/fetchContactsError');

const addContactRequest = createAction('phoneBook/fetchContactRequest');
const addContactSuccess = createAction('phoneBook/fetchContactSucces');
const addContactError = createAction('phoneBook/fetchContactError');

const deleteContactRequest = createAction('phoneBook/deleteContactRequest');
const deleteContactSuccess = createAction('phoneBook/deleteContactSuccess');
const deleteContactError = createAction('phoneBook/deleteContactError');

const changeFilter = createAction('phoneBook/changeFilter');

const phoneBookActions = {
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};

export default phoneBookActions;
