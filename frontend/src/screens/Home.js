import React from 'react';
import Wallet from '../components/Wallet';
import Deposit from '../components/Deposit';
import Withdraw from '../components/Withdraw';
import {Link, useNavigate} from "react-router-dom";


function Home() {

    const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }


    return (
        <div className="App" style={{ backgroundColor: '#1A1A1A', margin: '0px' }}>
            <div style={{display:'flex', justifyContent:'space-between', marginLeft:'30px', marginRight:'30px'}}>
            <h1 style={{ textAlign: 'center', paddingTop: '20px', color: '#FFA116' }}>Fireblocks' NCW app</h1>
            
            {(!localStorage.getItem("authToken"))?
              <div className='d-flex' style={{padding:'30px'}}>
                <Link className="nav-link fs-5" style={{color:'#B3B3B3',textDecoration:'none',fontSize:'20px',margin:'10px'}} to="/login">Login</Link>
                <Link className="nav-link fs-5" style={{color:'#B3B3B3',textDecoration:'none',fontSize:'20px',margin:'10px'}} to="/signup">SignUp</Link>
              </div>
              :
              <div className='d-flex' style={{padding:'30px'}}>
                <Link className="nav-link fs-5" style={{color:'#B3B3B3',textDecoration:'none',fontSize:'20px',margin:'10px'}} onClick={handleLogout}>LogOut</Link>
              </div>
              }

              </div>

              
            

            <Wallet />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Deposit />
                <Withdraw />
            </div>

        </div>
    );
}



export default Home;
