import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Card } from 'react-bootstrap'
//==========================================================
//=========from inclass 20 activity 16'=====================
// with help from Brian and the study group.


// Here we import a helper function that will check if the email is valid
import {  validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    
    alert(`Hello ${userName} this part of my portfolio is under construction`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>
     
      <h1 className="text-center"> How to reach out? </h1> 
      <h3 className="text-center">
        Chances are if you are reading this you already have!
      </h3>
      <br/>
      <p className="text-center">
        By all means, try this form... see if it works (it doesn't)
      </p>

      <Card>
      <form className="form justify-content-center">

        <input 
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="YOUR EMAIL"
        />
        <input 
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="YOUR NAME"
        />
        <input
         type="text"
         placeholder="YOUR MESSAGE"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      </Card>


      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
