import React, { Fragment, useRef, useState, useEffect } from 'react'
import "./LoginSignup.css";
import Loader from '../Loader/Loader';
import { Link, redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../actions/userActions';
import { createBrowserHistory } from 'history';
//import { Location } from 'history';

const Regester = () => {

    const dispatch = useDispatch();
    const history = createBrowserHistory();

    const { loading, isAuthenticated } = useSelector((state) => state.users);



    const [registerEmail, setRegisterEmail] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");



    /*
        const [user, setUser] = useState({
            name: "",
            email: "",
            password: ""
        });
    */
    /*
        const regesterDataChange = (e) => {
            e.preventDefault();
            setUser({ ...user, [e.target.name]: e.target.value });
        }
    */
    //  const { name, email, password } = user;
    const registerSubmit = (e) => {
        e.preventDefault();
        //userData  -----userAction.js
        //const myForm = new FormData();
        //myForm.set("name", name);
        //myForm.set("email", email);
        //myForm.set("password", password);


        dispatch(register(registerName, registerEmail,  registerPassword));
        console.log("signUp Form Submited")
    }


    // const redirect = Location.search ? Location.search.split(" ")[1] : "/account";
    useEffect(() => {
        // window.location.reload();
        if (isAuthenticated) {
            history.push("/");
        }
        // history.push("/");

    }, [dispatch, history, isAuthenticated, redirect]);


    return (
        <Fragment>
            {
                loading ? <Loader /> :
                    <Fragment>
                        <div className="LoginSignUpContainer">
                            <div className="LoginSignUpBoxx" id="LoginSignUpBoxx">

                                <form className="loginForm"  onSubmit={registerSubmit}>
                                    <div className="loginEmail">

                                        <input
                                            type="name"
                                            placeholder="Name   "
                                            required
                                            value={registerName}
                                            onChange={(e) => setRegisterName(e.target.value)}

                                        />

                                    </div>
                                    <div className="loginEmail">

                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            value={registerEmail}
                                            onChange={(e) => setRegisterEmail(e.target.value)}

                                        />

                                    </div>
                                    <div className="loginPassword">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            value={registerPassword}
                                            onChange={(e) => setRegisterPassword(e.target.value)}
                                        />
                                    </div>

                                    <input type="submit" value="Login" className="loginBtn" />
                                </form>




                            </div>
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

export default Regester