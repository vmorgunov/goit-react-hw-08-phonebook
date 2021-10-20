import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  margin: 0 10px;
  color: #000;
  &.active {
    font-weight: bold;
    color: tomato;
  }
  &:hover {
    color: tomato;
    font-weight: bold;
  }
`;
