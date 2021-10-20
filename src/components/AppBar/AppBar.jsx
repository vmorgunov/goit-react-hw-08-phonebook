import AuthNav from 'components/AuthNav/';
import Navigation from 'components/Navigation/';
import UserMenu from 'components/UserMenu/';
import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
