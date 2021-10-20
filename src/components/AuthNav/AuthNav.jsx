import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledNavLink to="/register" exact>
        Sign Up
      </StyledNavLink>
      <StyledNavLink to="/login" exact>
        Login
      </StyledNavLink>
    </div>
  );
}
