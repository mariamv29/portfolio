import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
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
        setErrorMessage(`Message is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="cotainer">
      <form action="action_page.php" id="contact-form" onSubmit={handleSubmit}>
        <h1 id="contact-text">Contact</h1>
        <div class="row">
          <div class="col-25">
            <label htmlFor="name" 
            // style={{ color: "white" }}
            >
              Name:
            </label>
          </div>
          <div class="col-75">
            <input
              // style={{ backgroundColor: "white", width: "82ch", height: "35px"}}
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label htmlFor="email" 
            // style={{ color: "white" }}
            >
              Email:
            </label>
          </div>
          <div class="col-75">
            <input
             
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label htmlFor="message" 
            // style={{ color: "white" }}
            >
              Message:
            </label>
          </div>
          <div class="col-75">
            <textarea
              // style={{
              //   backgroundColor: "white",
              //   width: "76ch",
              //   height: "120px",
              // }}
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div class="row">
          <button data-testid="button" type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
