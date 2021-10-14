import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/action';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.container}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={s.item}>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)} className={s.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
};

const getFilterSearch = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getFilterSearch(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
