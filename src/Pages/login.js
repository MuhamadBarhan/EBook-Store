import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../../src/form.css'
import Illustration from '../data/illustration.svg'


function Login() {

    const history = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/", {
                username, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history("/home", { state: { id: username } })
                    }
                    else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                });

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <section className="formCard">
            <div className="formContainer">
                <div className="illustration">
                    <img src={Illustration} alt="Login Illustration" style={{ width: '500px', height: '400px' }}/>
                </div>

                <form action="POST" className="form">
                    <span className="formHeading">Login</span>
                    <input id='ips' type="email" onChange={(e) => { setUsername(e.target.value) }} placeholder="Email" required/>
                    <input id='ips' type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required/>
                    <button type="submit" className='formBtn' onClick={submit} >Login</button>
                    <Link to="/forgotpass" className="fpass">Forgot Password?</Link>
                    
                    <p className="formLink">Don't have an account? <Link to="/signup">Create one!</Link></p>
                </form>
            </div>

        </section>

    )
}

export default Login