import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';
import { StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <StyledNavLink to="/" exact>
        Home Page
      </StyledNavLink>

      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
      {/* <StyledNavLink to="/contacts">Contacts</StyledNavLink> */}
    </nav>
  );
}
