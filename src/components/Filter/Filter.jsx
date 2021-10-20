import React from 'react';
import { Title, Input } from './Filter.styled';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/contacts';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <Title>Filter contacts by name</Title>
      <Input type="text" value={value} onChange={onChange} />
    </label>
  );
};

const mapStateToProps = ({ contacts }) => ({
  value: contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
