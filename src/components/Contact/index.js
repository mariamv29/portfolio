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
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
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
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ backgroundColor: "white", width: "50ch" }}
            label="Name"
            id="filled-hidden-label-small"
            defaultValue={name}
            variant="filled"
            size="small"
          />
          <TextField
            style={{ backgroundColor: "white", width: "50ch" }}
            label="Email"
            id="filled-hidden-label-small"
            defaultValue={email}
            variant="filled"
            size="small"
            onBlur={handleChange}
          />
          <TextField
            style={{ backgroundColor: "white", width: "50ch" }}
            label="Message"
            id="filled-hidden-label-small"
            multiline
            rows={7}
            defaultValue={message}
            variant="filled"
            size="small"
          />
          <div>
          <button data-testid="button" type="submit">
            {" "}
            Submit
          </button>
          </div>
        </Box>
      </form>
    </section>
  );
}

export default ContactForm;
