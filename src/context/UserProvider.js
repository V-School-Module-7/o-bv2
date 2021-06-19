import React, { useState } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth'

export const UserContext = React.createContext()

function UserProvider(props) {
    const [user, setUser] = useState(firebase.auth().currentUser)
    const [message, setMessage] = useState(null)

    function createUser(email, password, confirmPassword) {
        if(password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    setUser(userCredential.user)
                    console.log(user)
                })
                .catch((error) => {
                    var errorCode = error.code;
                    setMessage(error.message)
                    console.log(errorCode)
                    console.log(error.message)
                });
        } else {
            setMessage("Passwords do not match!")
            console.log("Passwords do not match!")
        }
    }

    function signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user)
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                setMessage(error.message)
                console.log(errorCode)
                console.log(error.message)
            });
    }

    function signOut() {
        firebase.auth().signOut().then(() => {
            setUser(firebase.auth().currentUser)
            console.log("Signed Out")
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <UserContext.Provider
            value={{
                user,
                createUser,
                signIn,
                signOut,
                message,
                setMessage
            }}
        >
            { props.children }
        </UserContext.Provider>
    );
}

export default UserProvider;