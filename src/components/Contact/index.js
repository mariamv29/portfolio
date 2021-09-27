import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.label]: e.target.value });
      console.log("Form", formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.label === "email") {
      const isValid = validateEmail(e.target.value.label);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Message is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section>
    
      <form id="contact-form" onSubmit={handleSubmit}>
          <h1 id="contact-text">Contact</h1>  
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ backgroundColor: "white", width: "50ch" }}
            label="Name"
            defaultValue={name}
            variant="filled"
            size="small"
            onBlur={handleChange}
          />
          <TextField
            style={{ backgroundColor: "white", width: "50ch" }}
            label="Email"
            defaultValue={email}
            variant="filled"
            size="small"
            onBlur={handleChange}
          />
          <TextField
            style={{ backgroundColor: "white", width: "50ch" }}
            label="Message"
            multiline
            rows={7}
            defaultValue={message}
            variant="filled"
            size="small"
            onBlur={handleChange}
          />
           </Box>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div>
            <button data-testid="button" type="submit">
              {" "}
              Submit
            </button>
          </div>
       
      </form>
    </section>
  );
}

export default ContactForm;
