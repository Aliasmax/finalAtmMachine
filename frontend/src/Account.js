
export default function Account(props) {
    return (
      <div >
        <div>
          <p> Your account balance is : {props.AccountBalance} $$.</p>
          </div>
          <div className="account-field">
            <div>  
              <input  
                type = "number"
                value = {props.Deposit}
                onChange = {props.HandleChangeDeposit}
                placeholder = "deposit"/>
            </div>
            <div>
              <button onClick={props.HandleDeposit}> enter </button>
            </div>
          <div className="account-field">
            <div> 
              <input  
                type = "number"
                value = {props.Withdraw}
                onChange = {props.HandleChangeWithdraw}
                placeholder = "withdraw"/>
            </div>
            <div>
              <button onClick={props.HandleWithdraw}> enter </button>
            </div>     
          </div>
        </div>
      </div>
      );
    }
    