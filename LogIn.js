import React from "react"


export default class LogIn extends React.Component{
    render() {
        return (
            <div id='logInForm'>
                <h3>Log In</h3>
                <form>
  <label htmlFor="fname">Username</label>
  <br/>
  <input type="text" id="fname" name="fname"/>
  <br/>
  <label htmlFor="lname">Password</label>
  <br/>
  <input type="text" id="lname" name="lname"/>
</form>
            </div>
        ) 
       
    }
}




