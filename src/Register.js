import React from "react";
import './Register.css'

const Register = () => {

    return (
        <>
            <h3>
                Hallo future user!
            </h3>

            <div className="register-container">

                <label>username:
                    <input />
                </label>
                <label>firstname:
                    <input />
                </label>
                <label>lastname:
                    <input />
                </label>
                <label>email address:
                    <input />
                </label>
                <label>password:
                    <input />
                </label>
            </div>

        </>

    )

}

export default Register;
