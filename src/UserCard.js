import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.email}</p>
    </CardContainer>
  );
};

export default UserCard;
