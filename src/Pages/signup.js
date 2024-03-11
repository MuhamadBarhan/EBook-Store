import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../../src/form.css'
import Illustration from '../data/illustration.svg'


function Signup() {
    const history=useNavigate();

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [number,setNumber]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                username,email,number,password
            })
            .then(res=>{

                alert(res.data.message);
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
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
                    <span className="formHeading">Signup</span>

                    <input id='ips' type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Name" required/>
                    <input id='ips' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required/>
                    <input id='ips' type="text" onChange={(e) => { setNumber(e.target.value) }} placeholder="Mobile No." required/>
                    <input id='ips' type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required/>
                    <button type="submit" className='formBtn' onClick={submit} >Signup</button>
                    <p className="formLink">Already have an account? <Link to="/login">Login</Link></p>
                    
                </form>
            </div>
        </section>

    )
}

export default Signup