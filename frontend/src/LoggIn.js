
export default function LoggIn(props) {
return (
    <div className="logg-in">
      <div className="logg-in-el">
      <input  
      type = "text"
      value = {props.User}
      onChange = {props.HandleChangeUser}
      placeholder = "user name"/>
      </div>
      <div className="logg-in-el">
      <input 
      type = "text"
      value = {props.Password}
      onChange = {props.HandleChangePassword}
      placeholder = "password"/> 
      </div>
      <div className="logg-in-el">
        <button onClick={props.CheckUser}> enter </button>
      </div>
    </div>
  );
}
