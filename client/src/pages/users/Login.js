

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userLogin } from '../../services/userService';

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const token = await userLogin(form)

        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()
        setUser(user)

        navigate('/')
    }

    return ( 
<div className = "logBody">
    <div className="login">

            <h1 className="centerText"> Log In to Start!</h1>
       
    <form onSubmit={handleSubmit} className="needs-validation" >
            
        
                    <div className="form-group was-validated">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-control" type="username" id="username" name = "username" onChange = {handleChange} value ={form.username} required/>
                    <div className="invalid-feedback">
                        Please enter your User Name
                    </div>
                </div>


                            <div className="form-group was-validated">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" name = "password" onChange = {handleChange} value ={form.password} required/>
                    <div className="invalid-feedback">
                        Please enter your Password
                    </div>
                </div>
                
            
        

            
                <button onClick = {handleSubmit} type="button" class="btn btn-light">Log In</button>
            </form>
        </div>
        </div>
     );
}

export default Login;



