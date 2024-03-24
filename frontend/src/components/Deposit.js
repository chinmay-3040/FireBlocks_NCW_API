import React, { useState } from 'react';
import axios from 'axios';

function Deposit() {
  const [asset, setAsset] = useState('SOL');
  const [amount, setAmount] = useState();
  const [depositAddress, setDepositAddress] = useState(null);

  const handleAssetChange = (event) => {
    setAsset(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDeposit = async () => {
    if (!amount) {
      return alert('Please enter a deposit amount');
    }
    // ... (Replace with your Fireblocks NCW API call to get deposit address)
    const response = await axios.post(
      'https://your-fireblocks-api/vault/wallet/<walletId>/addresses',
      { asset, amount }
    );
    setDepositAddress(response.data.address);
  };

  return (
    <div id="deposit" style={styles.container} >
      <h2 style={{color:'#1bf588'}}>Deposit</h2>
      <select value={asset} onChange={handleAssetChange} style={styles.dropDown}>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
       </select>

      <div>
      <input type="number" id="deposit-amount" placeholder="Enter amount" value={amount} onChange={handleAmountChange} style={styles.inputfield}/>
      <button onClick={handleDeposit} style={styles.deposit} >Deposit</button>
      </div>
      {depositAddress && (
        <p>Deposit Address: {depositAddress}</p>
      )}
    </div>
  );
}


const styles = {
    container:{
        backgroundColor:'#363636', 
        width:'100%',
        padding:'20px',
        margin:'30px', 
        height:'300px', 
        display:'flex', 
        flexDirection:'column', 
        alignItems:'center',
        borderRadius:'20px'
    },
    dropDown:{
        margin:'20px',
        padding:'10px', 
        backgroundColor: '#B3B3B3',
         color: 'black',
          border:'2px solid #B3B3B3', 
          borderRadius:'10px',
          fontWeight:'bold',
    },
    deposit:{
        padding:'10px', 
        backgroundColor: '#363636', 
        color: '#B3B3B3', 
        border:'2px solid #B3B3B3', 
        borderRadius:'10px',
        fontWeight:'bold',
        cursor:'pointer',
    },
    inputfield:{
        margin:'20px' , 
        padding:'10px', 
        backgroundColor: '#363636', 
        color: '#B3B3B3', 
        border:'2px solid #B3B3B3', 
        borderRadius:'10px' ,
        '::placeholder': {
            color: 'white', 
        }
    },

}

export default Deposit;
