import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {


  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
         <form id="contact-form" onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-name"
            label="Name"
            multiline
            value={name}
            onChange={handleChange}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-email"
            label="Email"
            multiline
            maxRows={4}
            value={email}
            onChange={handleChange}
            variant="filled" />
        </div>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={7}
            value={message}
            variant="standard"
          />
            <p className="error-text">{errorMessage}</p>
        </div>
        <button data-testid="button" type="submit">Submit</button>
      </Box>
      </form>
    </section>
  );
}

export default ContactForm;
