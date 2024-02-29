import axios from 'axios'
import React, { useEffect } from 'react'


function Home() {
 axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:8000/home')
    .then(result=>{console.log(result)
      if(result.data !== "success"){
          // navigate('/login')    
      }
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div>Home</div>
  )
}

export default Home