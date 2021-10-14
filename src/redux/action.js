import shortid from 'shortid';
import PropTypes from 'prop-types';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

addContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const deleteContact = createAction('DELETE');

const changeFilter = createAction('CHANGE_FILTER');

const phonebookActions = { addContact, deleteContact, changeFilter };

export default phonebookActions;
