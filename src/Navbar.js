import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  color: white;
`;

const Button = styled.button`
  background-color: #00ABE4;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00ABE4;
  }
`;

const Navbar = ({ getUsers }) => {
  return (
    <Nav>
      <Brand>NexaTech</Brand>
      <Button onClick={getUsers}>Get Users</Button>
    </Nav>
  );
};

export default Navbar;
