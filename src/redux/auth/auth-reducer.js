import { createReducer } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './auth-operations';

const setError = (_, { payload }) => payload;
const resetError = () => null;

export const authError = createReducer(null, {
  [register.rejected]: setError,
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [register.pending]: resetError,
  [logIn.pending]: resetError,
  [logOut.pending]: resetError,
});
