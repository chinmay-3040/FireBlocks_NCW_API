import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

export const Login = () => {

  const [credentials,setcredentials] = useState({email:"",password:""});

   let navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        });

        const json= await response.json();
        console.log(json);

        if(!json.success){  //true or false
            alert('Enter valid credentials!')
        }

        if(json.success){
          localStorage.setItem("userEmail", credentials.email);
          localStorage.setItem("authToken", json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/");
        }


    }

    const onChange=(event)=>{
        setcredentials({...credentials ,[event.target.name]:event.target.value});
    }

  return (
    <span>
        <div className="container" style={styles.container}>
            <h1 style={{color:'white'}}>Login</h1>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group mb-3" style={styles.email}>
                    <label htmlFor="exampleInputEmail1" style={{color:'white'}}>Email address:</label>
                    <input type="email" id="exampleInputEmail"  style={styles.inputemail} className="form-control" name="email" value={credentials.email} onChange={onChange} placeholder="Enter email"/>
                </div>
               
                <div className="form-group mb-3" style={styles.password}>
                    <label htmlFor="exampleInputPassword1" style={{color:'white'}}>Password:</label>
                    <input type="password" className="form-control"style={styles.inputpassword}  name="password" value={credentials.password} onChange={onChange} placeholder="Password"/>
                </div>
               
               <div style={styles.navigate}>
                <button type="submit" className="btn" style={styles.submit} >Submit</button>
                <Link to='/signup' className='m-3 btn' style={styles.newUser} >New user?</Link> 
              </div>
            </form>
        </div>
    </span>
  )
}


const styles = {

    container:{
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:"center",
         margin:"70px",
        
         backgroundColor:'#3c3d3b',
         padding:'20px',
         borderRadius:'10px'
    },
    email:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'10px',
    },
    password:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'10px',

    },
    inputemail:{
        padding:'10px',
        border:'2px solid black',
        borderRadius:'10px',
        margin:'10px',
        
    },
    inputpassword:{
        padding:'10px',
        border:'2px solid black',
        borderRadius:'10px',
        margin:'10px'
    },
    submit:{
        backgroundColor:'#1bf588',
        padding:'10px',
        border:'2px solid black',
        borderRadius:'10px',
        margin:'10px'

    },
    newUser:{
        backgroundColor:'#27B0D5',
        padding:'10px',
        border:'2px solid black',
        borderRadius:'10px',
        margin:'10px',
        textDecoration:'none',
        color:'black',
    },
    navigate:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        margin:'10px',

    }

}

export default Login;