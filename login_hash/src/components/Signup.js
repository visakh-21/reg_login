import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';




function Signup() {
    const [name, SetName] = useState([]);
    const [email, SetEmail] = useState([]);
    const [password, SetPassword] = useState([]);
    const navigate=useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/register',{name,email,password})
        .then(result=>{console.log(result)
        navigate('/login')    
        })
        .catch(err=>console.log(err))
    }
    

  return (
    <div className='container w-25'>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e)=>SetName(e.target.value) }

        ></input>
      </div> 
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          email
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
      <button className=''  type="submit" class="btn btn-primary">
        Register
      </button><br/>
      <Link to={"/login"}>
        <button className="" type="submit" class="btn btn-primary">
          Login
        </button>
      </Link>
        </form>

    </div>  
     
    
    

  )
}

export default Signup