// import { createAsyncThunk } from '@reduxjs/toolkit';
import phoneBookActions from './action';
import axios from 'axios';
import shortid from 'shortid';

axios.defaults.baseURL = 'http://localhost:4040/contacts';

const fetchContacts = () => async dispatch => {
  dispatch(phoneBookActions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');

    dispatch(phoneBookActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneBookActions.fetchContactsError(error));
  }
};

const addContact = (name, number) => async dispatch => {
  dispatch(phoneBookActions.addContactRequest());
  const contact = {
    id: shortid.generate(),
    name,
    number,
  };

  dispatch(phoneBookActions.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(phoneBookActions.addContactSuccess(data));
  } catch (error) {
    dispatch(phoneBookActions.addContactError(error));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(phoneBookActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(phoneBookActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(phoneBookActions.deleteContactError(error));
  }
};

const allfetchOperations = { deleteContact, addContact, fetchContacts };

export default allfetchOperations;
