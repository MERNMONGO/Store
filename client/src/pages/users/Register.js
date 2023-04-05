

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo, userRegister } from "../../services/userService";

let emptyForm = { 
    username: '',
    password: '',
    email: ''
}

function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            console.log("alert:", "alerted")
        const token = await userRegister(form)
        console.log("tokenm:", token)
        if (!token) {
            setForm(emptyForm)
            return
        }

        localStorage.setItem("token", token)

        const user = await userInfo()
        setUser(user)

        navigate('/login')
    }
    return ( 
        <div className = "logBody">
            <div className="login">
        
                    <h1 className="centerText"> Register Now!</h1>
               
            <form onSubmit={handleSubmit} className="needs-validation" >
                    
                
                            <div className="form-group was-validated">
                            <label className="form-label" htmlFor="username">Username</label>
                            <input className="form-control" type="username" id="username" name = "username" onChange = {handleChange} value ={form.username} required/>
                            <div className="invalid-feedback">
                                Choose your User Name
                            </div>
                        </div>
    
                        <div className="form-group was-validated">
                            <label className="form-label" htmlFor="email">Email:</label>
                            <input className="form-control" type="email" id="email" name = "email" onChange = {handleChange} value ={form.email} required/>
                            <div className="invalid-feedback">
                                Enter your Email
                            </div>
                        </div>
        
        
                                    <div className="form-group was-validated">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input className="form-control" type="password" id="password" name = "password" onChange = {handleChange} value ={form.password} required/>
                            <div className="invalid-feedback">
                                Enter your Password
                            </div>
                        </div>
                        
                    
                
        
                    
                        <button  >Register</button>
                    </form>
                </div>
                </div>
             );
        }

   

export default Register;
//  return ( 
//         <div className="user-auth">
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Username:</label>
//                 <br />
//                 <input 
//                     type="text" 
//                     id="username"
//                     name="username"
//                     onChange={handleChange}
//                     value={form.username}
//                 />
//                 <br /><br />
//                 <label htmlFor="email">Email:</label>
//                 <br />
//                 <input 
//                     type="email" 
//                     id="email"
//                     name="email"
//                     onChange={handleChange}
//                     value={form.email}
//                 />
//                 <br /><br />
//                 <label htmlFor="password">Password:</label>
//                 <br />
//                 <input 
//                     type="password" 
//                     id="password"
//                     name="password"
//                     onChange={handleChange}
//                     value={form.password}
//                 />
//                 <br /><br />
//                 <button>Register</button>
//             </form>
//         </div>
//      );
// }

