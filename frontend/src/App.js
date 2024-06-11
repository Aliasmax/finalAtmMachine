
import './App.css';
import React, {useState, useEffect} from 'react';
import LoggIn from './LoggIn.js'
import Account from './Account.js'

function App() {

const[userList, setUserList] = useState([""])  
const [loggedIn, setLoggedIn] =useState(false)
const [userAccountBalance,setUserAccountBalance] = useState(0)
const [userId, setUserId] = useState(1)


  useEffect(() => {
    fetch('http://localhost:4000/users')
  .then(response => response.json())
  .then(data => setUserList(data) )
  .catch(error => {
    console.error('Error fetching data:', error);
    
  });
  }, []);  
  const [user, setUser] = useState('');
  const [password, setPassword] = useState ('')
  const [withdrawValue, setWithdrawValue] = useState(0)
  //const [depositValue, setDepositValue] = useState(0)

  const handleChangeUser = (e) => {
    setUser(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeWithdraw = (e) => {
    setWithdrawValue(e.target.value)
  }

  // const handleChangeDeposit = (e) => {
  //   setDepositValue(e.target.value)
  // }

//loops through all items of userList and checks if any is equal to the state of the userName and password
//if so the view changes because loggedIn is set to true 
// the accountBalance is asked to get displayed on the frontend 
// the userID is asked as a prop for the fetchrequest in case of a change of the value of the accountBalance
//then the loop is interrupted
  function checkUserAndGetAccountBalance () {
    let idFound = false
    for (let i=0; i<=userList.length-1; i++){
      if(userList[i].email === user && userList[i].password === password) 
        {setLoggedIn(true)
         setUserAccountBalance(userList[i].accountBalance)
         setUserId(userList[i].id)
         idFound = true 
         break;}     
    }
    if (idFound === false)
      {console.log("the password or ID you've entered is wrong")}
  }


function handleWithdraw () {
  let data = {
    userId: userId, 
    withdrawValue: withdrawValue 
  }
  console.log(withdrawValue)
  console.log(userId)
  fetch('http://localhost:4000/test',{
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }  
  })
  .then(res => {
    if (res.ok) {
      console.log("PUT successful")
    }
    else {console.log("PUT unsuccessful")}
    return res
  })
  .then (res => res.json())
  .then( data => console.log(data))
  .catch(error => {
    console.error('Error fetching data:', error);  
  });
}  

function handleDeposit () {
  
} 

  let loggInView = <LoggIn  User = {user}
                      HandleChangeUser = {handleChangeUser}
                      HandleChangePassword = { handleChangePassword}
                      Password = { password }
                      CheckUser= {checkUserAndGetAccountBalance}/>
let accountView = <Account 
                    AccountBalance = {userAccountBalance}
                    HandleWithdraw = {handleWithdraw}
                    HandleChangeWithdraw = {handleChangeWithdraw}
                    HandleDeposit = {handleDeposit}
                   // HandleChangeDeposit = {handleChangeDeposit}
                    />                      

  return (
    <div className="App">
      {loggedIn? (
        accountView 
      ) : (loggInView)
      }
    </div>
  );
}

export default App;
