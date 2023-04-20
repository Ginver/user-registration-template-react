import React, {useRef, useState, useEffect} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useForm} from "react-hook-form";
import './Register.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState();
    const [validName, setValidName] = useState();
    const [userFocus, setUserFocus] = useState();

    const [pwd, setPwd] = useState();
    const [validPwd, setValidPwd] = useState();
    const [pwdFocus, setPwdFocus] = useState();

    const [matchPwd, setMatchPwd] = useState();
    const [validMatch, setValidMatch] = useState();
    const [matchFocus, setMatchFocus] = useState();

    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState();

    useEffect(() => {
        useRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    },[user, pwd, matchPwd])

    // let's see if I can fix this github bug//

    return (
        <section>

        </section>
    )
}

// const Register = () => {
// const [firstName, setFirstName] = useState('')
// const [lastName, setLastName] = useState('')
// const [email, setEmail] = useState('')
// const [userName, setUserName] = useState('')
// const [password, setPassword] = useState('')

// const handleSubmit = (e) => {
//     e.prevent.default();
//     console.log(email);
// }

// return (
//     <>

{/*<p>*/
}
{/*    Hello future user!*/
}
{/*</p>*/
}
{/*<form onSubmit={handleSubmit}>*/
}

{/*    <label htmlFor="firstname">firstname:*/
}
{/*        <input value={firstName} name="firstname" id="firstname" placeholder="firstname"/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="lastname">lastname:*/
}
{/*        <input value={lastName} name="lastname" id="lastname" placeholder="lastname"/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="email">email address:*/
}
{/*        <input value={email} name="email" id="email" placeholder="email"/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="username">username:*/
}
{/*        <input value={userName} name="username" id="username" placeholder="username"/>*/
}
{/*    </label>*/
}
{/*    <label htmlFor="password">password:*/
}
{/*        <input value={password} name="password" id="password" placeholder="password"/>*/
}
{/*    </label>*/
}
{/*    <button>Register</button>*/
}
{/*</form>*/
}
{/*<button>If you already have an account, sign in here!</button>*/
}
//
// </>
//
//     )
//
// }

export default Register;
