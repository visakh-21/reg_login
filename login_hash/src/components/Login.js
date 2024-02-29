import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Login() {

    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);
    const navigate=useNavigate()
  
  axios.defaults.withCredentials=true;
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:8000/login',{email,password})
      .then(result=>{console.log(result)
        console.log(result);
        if(result.data==="success"){
            navigate('/home')    

        }
      })
      .catch(err=>console.log(err))
  }
  return (
    <div className='container w-25'>
        <form onSubmit={handleSubmit}>

<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">
    Email{" "}
  </label>
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    onChange={(e)=>SetEmail(e.target.value) }

  ></input>
</div>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">
    password
  </label>
  <input
    type="password"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    onChange={(e)=>SetPassword(e.target.value) }

  ></input>
</div>
<button className='mb-3' type="submit" class="btn btn-primary">
  Login
</button>
<br />

<Link to={"/register"}>
<button className='mb-3 mt-2' type="button" class="btn btn-danger">Signup</button> 
  
</Link>
  </form>


    </div>
  )
}

export default Login