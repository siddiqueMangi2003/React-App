import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar from './Navbar';
import UserCard from './UserCard';

const Container = styled.div`
  background-color: #E9F1FA; /* Light blue background color */
  min-height: 100vh;
`;

const Content = styled.div`
  padding: 2rem;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh; /* Adjust as needed */
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Navbar getUsers={getUsers} />
      <Content>
        <h1>Welcome to NexaTech Users</h1>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <UserGrid>
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </UserGrid>
        )}
      </Content>
    </Container>
  );
};

export default Home;
