import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth/Auth';
import Booking from './pages/Booking/Booking';
import styled from 'styled-components';
import { UserContext } from './context/UserProvider';
import firebase from 'firebase/app';
import 'firebase/auth';
import Reserve from './pages/Reserve/Reserve';
import Landing from './pages/Landing/Landing';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  oveflow-x: hidden;
  display: grid;
  place-items: center;
  color: whitesmoke;
`;

function App() {
  const { user, setUser, signOut } = useContext(UserContext);
  const [isSignedIn, setIsSignedIn] = useState(
    JSON.parse(localStorage.getItem('user'))
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        localStorage.setItem('user', true);
        setIsSignedIn(true);
      } else {
        localStorage.removeItem('user');
        setIsSignedIn(false);
      }
    });
  }, []);

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
      {/* <Booking signOut={signOut} /> */}
    </Container>
  );
}

export default App;
