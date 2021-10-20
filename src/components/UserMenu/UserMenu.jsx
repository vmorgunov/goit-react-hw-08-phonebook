import { Button } from 'components/_share/Button.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Container } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Container>
      <span>Welcome, {name} </span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </Button>
    </Container>
  );
}
