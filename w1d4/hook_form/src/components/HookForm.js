import React, { useState } from 'react';
import style from './HookForm.module.css';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 character");
        } else { setFirstNameError(""); }
    }

    const handleLastName = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 character");
        } else { setLastNameError(""); }
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 character");
        } else { setEmailError(""); }
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 character");
        } else { setPasswordError(""); }
    }

    const handleConfirmPassword = (e) => {
        e.preventDefault();
        setConfirmPassword(e.target.value);
        if (e.target.value != password) {
            setConfirmPasswordError("Password must match");
        } else { setConfirmPasswordError(""); }
    }

    return (
        <div className={style.container}>
            <div className={style.form}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label>First Name</label>
                        <input type="text" onChange={handleFirstName} />
                        {
                            firstNameError ?
                                <p style={{ color: 'red' }}>{firstNameError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" onChange={handleLastName} />
                        {
                            lastNameError ?
                                <p style={{ color: 'red' }}>{lastNameError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange={handleEmail} />
                        {
                            emailError ?
                                <p style={{ color: 'red' }}>{emailError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={handlePassword} />
                        {
                            passwordError ?
                                <p style={{ color: 'red' }}>{passwordError}</p> :
                                ''
                        }
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={handleConfirmPassword} />
                        {
                            confirmPasswordError ?
                                <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                                ''
                        }
                    </div>
                    <input type="submit" value="Create User" />
                </form>
                <div>
                    <p>Your Form Data</p>
                    <ul>
                        <li>First Name: {firstName}</li>
                        <li>Last Name: {lastName}</li>
                        <li>Email: {email}</li>
                        <li>Password: {password}</li>
                        <li>Confirm Password: {confirmPassword}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HookForm;