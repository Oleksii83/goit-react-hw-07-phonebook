import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneBookActions from './action';
// import { toast } from 'react-toastify';
// import action from './action';

const contacts = createReducer([], {
  [phoneBookActions.fetchContactsSuccess]: (_, action) => action.payload,
  [phoneBookActions.addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [phoneBookActions.deleteContactSuccess]: (state, { payload }) => {
    alert('Contact deleted from your phonebook!');
    return state.filter(({ id }) => id !== payload);
  },
});

const isLoading = createReducer(false, {
  [phoneBookActions.fetchContactsRequest]: () => true,
  [phoneBookActions.fetchContactsSuccess]: () => false,
  [phoneBookActions.fetchContactsError]: () => false,
});

// const contacts = createReducer(
//   [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   {
//     [action.addContact]: (state, { payload }) =>
//       state.find(contact => contact.name.includes(payload.name)) ? state : [...state, payload],
//     [action.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
//   },
// );

const filter = createReducer('', {
  [phoneBookActions.changeFilter]: (_, action) => action.payload,
});

const error = createReducer(null, {});

export default combineReducers({
  contacts,
  filter,
  isLoading,
  error,
});
