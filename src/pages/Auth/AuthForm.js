import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserProvider';
import { StyledAuthForm, Header, Label, Input, Message, SubmitBtn } from './AuthStyling'


function AuthForm({ toggled }) {
    const { createUser, signIn, message, setMessage } = useContext(UserContext)
    const initInputs = {
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [inputs, setInputs] = useState(initInputs)
    const { email, password, confirmPassword } = inputs

    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!toggled) {
            createUser(email, password, confirmPassword)
        } else {
            signIn(email, password)
        }
    }

    useEffect(() => {
        setMessage(null)
    }, [toggled])

    return (
        <StyledAuthForm 
            toggled={toggled} 
            onSubmit={handleSubmit}
        >
            <Header form={'true'} >{toggled ? "Returning Customers" : "New Users"}</Header>
            <Label>
                Email
                <Input 
                    name="email"
                    onChange={handleChange}
                    value={email}
                    message={message}
                    onClick={() => setMessage(null)}
                />
            </Label>
            <Label>
                Password
                <Input 
                    type="password" 
                    name="password"
                    onChange={handleChange}
                    value={password}
                    message={message}
                    onClick={() => setMessage(null)}
                />
            </Label>
            {!toggled && <Label>
                Confirm Password
                <Input 
                    type="password" 
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword}
                    message={message}
                    onClick={() => setMessage(null)}
                />
            </Label>}
            <SubmitBtn>Sign {toggled ? "In" : "Up"}</SubmitBtn>
            <Message>{message}</Message>
        </StyledAuthForm>
    );
}

export default AuthForm;