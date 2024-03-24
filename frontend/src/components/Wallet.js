import React, { useState } from 'react';
import axios from 'axios';


function Wallet({ balances }) {

    const [asset, setAsset] = useState('SOL');
    const [walletId, setwalletId] = useState();
    const [accountId, setaccountId] = useState();

    const [Balances, setBalances] = useState(0);

  const handleAssetChange = (event) => {
    setAsset(event.target.value);
  };

  const handlewalletId = (event) => {
    setwalletId(event.target.value)
  };

  const handleaccountId = (event) => {
    setaccountId(event.target.value)
  };

  const handleShowbalance = async () => {
   
    try {
        // Make parallel requests using Promise.all
        const response = await axios.get('https://sandbox-api.fireblocks.io/v1/ncw/wallets/{walletId}/accounts/{accountId}/assets/{asset}/balance')
        
        // Update state with retrieved data
        setBalances(response.data);
        alert(`Your balance is: `,Balances);

      } catch (error) {
        console.error('Error fetching balances:', error);
        // Handle potential errors during API calls (optional)
      }
    };


  return (
    <div id="balance" style={styles.container} >
      <h2 style={{color:'#B3B3B3'}}>Check balance</h2>
      <select value={asset} onChange={handleAssetChange} style={styles.dropDown}>
            <option value="SOL">SOL</option>
            <option value="BTC">BTC</option>
       </select>

      <div>
      <input type="string"  placeholder="Enter wallet ID" value={walletId} onChange={handlewalletId} style={styles.inputfield}/>
      <input type="number"  placeholder="Enter account ID" value={accountId} onChange={handleaccountId} style={styles.inputfield}/>
      <button onClick={handleShowbalance} style={styles.deposit} >Check balance</button>
      </div>
      
    </div>
  );
}


// function Wallet({ balances }) {
//     return (
//       <div id="wallet" style={styles.container} >
//         <h2 style={{color:'white'}}>Wallet Balances</h2>
//         <ul >
//          <li style={styles.list}>SOL: {123}</li>
//           <li style={styles.list}>BTC: {123}</li>
//           {/* <li>SOL: {balances.sol}</li>
//           <li>BTC: {balances.btc}</li> */}
//         </ul>
//       </div>
//     );
//   }
  


const styles = {
    container:{
        backgroundColor:'#363636', 
        marginLeft:'30px', 
        marginRight:'30px', 
        padding:"30px",
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

export default Wallet;
