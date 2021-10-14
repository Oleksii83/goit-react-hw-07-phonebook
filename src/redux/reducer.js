import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import action from './action';

const contacts = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [action.addContact]: (state, { payload }) =>
      state.find(contact => contact.name.includes(payload.name)) ? state : [...state, payload],
    [action.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  },
);

const filter = createReducer('', {
  [action.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
