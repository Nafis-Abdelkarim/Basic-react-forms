import React, { useState } from "react";
import "./index.css";

export default function App() {

  //create an object hook for the Three values 
  const [value, setValue] = useState({
    firstName : "",
    lastName : "",
    email : ""
  });

  //create a hook for submit 
  const [submitted, setSubmitted] = useState(false);

  //create a hook for validate 
  const [valid, setValid] = useState(false);

  //Create event handlers
  const handlerFirstNameInputChange = (event) => {
    setValue({...value, firstName: event.target.value})
  }

  const handlerLastNameInputChange = (event) => {
    setValue({...value, lastName: event.target.value})
  }

  const handlerEmailInputChange = (event) => {
    setValue({...value, email: event.target.value})
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    if(value.firstName && value.lastName && value.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handlerSubmit}>
        { submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null }
        <input
          id="first-name" class="form-field" type="text" placeholder="First Name" name="firstName" onChange={handlerFirstNameInputChange}/>
        
        {submitted && !value.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
        <input
          id="last-name" class="form-field" type="text" placeholder="Last Name" name="lastName" onChange={handlerLastNameInputChange}/>
        
        {submitted && !value.lastName ? <span id="last-name-error">Please enter a last name</span> : null }
        <input
          id="email" class="form-field" type="text" placeholder="Email" name="email" onChange={handlerEmailInputChange}/>
        
        {submitted && !value.email ? <span id="email-error">Please enter an email address</span> : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}