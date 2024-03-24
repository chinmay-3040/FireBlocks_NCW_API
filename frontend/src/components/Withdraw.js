import React, { useState } from 'react';
import axios from 'axios';

function Withdraw() {
  const [asset, setAsset] = useState('SOL');
  const [amount, setAmount] = useState();

  const handleAssetChange = (event) => {
    setAsset(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleWithdraw = async () => {
    if (!amount) {
      return alert('Please enter a withdrawal amount');
    }
    // ... (Replace with your Fireblocks NCW API call to initiate withdrawal)
    const response = await axios.post(
      'https://your-fireblocks-api/vault/withdrawals',
      { asset, amount }
    );
    console.log('Withdrawal initiated:', response.data);
    // Handle successful withdrawal or display a confirmation message
  };

  return (
    <div id="withdraw" style={styles.container}>
      <h2 style={{color:'#2dcbf7'}}>Withdraw</h2>
      <select value={asset} onChange={handleAssetChange}  style={styles.dropDown}>
        <option value="SOL">SOL</option>
        <option value="BTC">BTC</option>
      </select>

      <div>
      <input type="number" id="withdraw-amount" placeholder="Enter amount" value={amount} onChange={handleAmountChange} style={styles.inputfield}/>
      <button onClick={handleWithdraw} style={styles.withdraw}>Withdraw</button>
      </div>
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
        padding:'10px', 
        margin:'20px',
        backgroundColor: '#B3B3B3',
        color: 'black',
        border:'2px solid #B3B3B3', 
        borderRadius:'10px',
        fontWeight:'bold',
    },
    withdraw:{
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
            color: 'black', 
        }
    },

}



export default Withdraw;
