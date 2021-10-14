import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import action from '../../redux/action';
import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.SearchContainer}>
    <p className={s.ContName}>Find contacts by name:</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="InputSearch"
      placeholder="Paul Richardson"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispath => ({
  onChange: e => dispath(action.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
