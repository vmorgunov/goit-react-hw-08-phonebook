import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import * as contactsAction from './contacts-action';
import { fetchContacts, addContact, deleteContact } from './contacts-operation';
import { changeFilter } from './contacts-action';
import { logOut } from 'redux/auth/auth-operations';

const initialState = [];

const setError = (_, { payload }) => payload;
const resetError = () => null;

const items = createReducer(initialState, {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [logOutg.fulfilled]: state => (state = []),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: setError,
  [addContact.rejected]: setError,
  [deleteContact.rejected]: setError,
  [fetchContacts.pending]: resetError,
  [addContact.pending]: resetError,
  [deleteContact.pending]: resetError,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
