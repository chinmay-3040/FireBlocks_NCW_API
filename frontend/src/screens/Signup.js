import React, { useState } from 'react';
import {Link} from 'react-router-dom';


function Signup() {

    const [credentials,setcredentials] = useState({name:"",geolocation:"",email:"",password:""});

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/creatUser",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name, location:credentials.geolocation, email:credentials.email, password:credentials.password})
        });

        const json= await response.json();
        console.log(json);

        if(!json.success){
            alert('Enter valid credentials!')
        }

    }

    const onChange=(event)=>{
        setcredentials({...credentials ,[event.target.name]:event.target.value});
    }
    return (
        <div style={styles.container}>
        <div className="container" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:"center", margin:"70px"}}>
            <h1 style={{color:'white'}}>Sign up</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group mb-3" style={styles.email}>
                    <label htmlFor="name" style={{color:'white'}}>Name:</label>
                    <input type="text" style={styles.inputpassword}  className="form-control"  name="name" value={credentials.name} onChange={onChange} placeholder="Enter your name"/>
                </div>

                <div className="form-group mb-3" style={styles.email}>
                    <label htmlFor="exampleInputEmail1" style={{color:'white'}}>Email address:</label>
                    <input type="email"  style={styles.inputemail} id="exampleInputEmail" className="form-control" name="email" value={credentials.email} onChange={onChange} placeholder="Enter email"/>
                </div>

                <div className="form-group mb-3" style={styles.email}>
                    <label htmlFor="exampleInputPassword1" style={{color:'white'}}>Address:</label>
                    <input type="text" style={styles.inputpassword}  className="form-control" id="exampleInputPassword" name="geolocation" value={credentials.geolocation} onChange={onChange} placeholder="address"/>
                </div>
                <div className="form-group mb-3" style={styles.password}>
                    <label htmlFor="exampleInputPassword1" style={{color:'white'}}>Password:</label>
                    <input type="password" style={styles.inputpassword}  className="form-control" name="password" value={credentials.password} onChange={onChange} placeholder="Password"/>
                </div>
               
                <div style={styles.navigate}>
                    <button type="submit" style={styles.submit} className="btn">Submit</button>
                    <Link to='/login' className='m-3 btn' style={styles.signup}>Already a user</Link> 
                </div>
            </form>
        </div>
        </div>
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
    signup:{
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

export default Signup