import React, {useState} from "react";
import './SignIn.css'

const SignIn = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.prevent.default();
        console.log(userName);
    }

    return (
        <>
            <h3>
                Hallo there again!
            </h3>

            <div className="signin-container">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="userName">username:
                        <input value={userName} name="userName" id="userName" placeholder="username"/>
                    </label>

                    <label htmlFor="password">password:
                        <input value={password} name="password" id="password" placeholder="password"/>
                    </label>
                    <button type="submit">Sign in!</button>
                </form>
                <button>New user? Create an account here!</button>
            </div>

        </>

    )

}

export default SignIn;
