import React, { useContext, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Auth from './pages/Auth/Auth';
import Booking from './pages/Booking/Booking';
import Checkout from './pages/Checkout/Checkout'
import styled from 'styled-components';
import { UserContext } from './context/UserProvider';
import firebase from 'firebase/app';
import 'firebase/auth';
import Reserve from './pages/Reserve/Reserve';

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
      <Switch>
        <Route path="/checkout" component={Checkout} redirectTo="/"></Route>
        {/* <Auth /> */}
        {/* <Booking signOut={signOut} /> */}
        <Reserve />
        {/* <span>
                    <h2>You are logged in as</h2>
                    <h1 style={{ color: "#ccc" }}>{user?.email}!</h1>
                    <button
                        onClick={signOut}
                        style={{
                            padding: "0.5rem",
                            fontWeight: "bold",
                            background: "indianred",
                            border: "none",
                            borderRadius: "100px",
                            color: "whitesmoke",
                            marginTop: 10,
                        }}
                    >
                        Sign Out
                    </button>
                </span> */}
      </Switch>
    </Container>
  );
}

export default App;
