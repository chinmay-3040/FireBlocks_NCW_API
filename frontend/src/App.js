import React from 'react';


import {Login} from './screens/Login.js';
import Home from './screens/Home';
// import Wallet from './components/Wallet.js';
import Signup from './screens/Signup.js';

// import Deposit from './components/Deposit.js';
// import Withdraw from './components/Withdraw.js';
// import Wallet from './components/Wallet.js';

 import { Routes,Route} from "react-router-dom";



function App() {


  return (


      <div>
        <Routes>
          <Route exact path="/" element= {<Home/>}></Route>
          <Route exact path="/login" element= {<Login/>}></Route>
          <Route exact path="/signup" element= {<Signup/>}></Route>
          
        </Routes>
      </div>

   
    // <div>
    // <Home/>
    // </div>

   
  );
}



export default App;
