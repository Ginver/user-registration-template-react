import React, {useState} from "react";
import './Register.css'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.prevent.default();
        console.log(email);
    }

    return (
        <>
            <p>
                Hello future user!
            </p>
            <form onSubmit={handleSubmit}>

                <label htmlFor="firstname">firstname:
                    <input value={firstName} name="firstname" id="firstname" placeholder="firstname"/>
                </label>
                <label htmlFor="lastname">lastname:
                    <input value={lastName} name="lastname" id="lastname" placeholder="lastname"/>
                </label>
                <label htmlFor="email">email address:
                    <input value={email} name="email" id="email" placeholder="email"/>
                </label>
                <label htmlFor="username">username:
                    <input value={userName} name="username" id="username" placeholder="username"/>
                </label>
                <label htmlFor="password">password:
                    <input value={password} name="password" id="password" placeholder="password"/>
                </label>
                <button>Register</button>
            </form>
            <button>If you already have an account, sign in here!</button>
        </>

    )

}

export default Register;
