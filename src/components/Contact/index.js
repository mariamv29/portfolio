import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function ContactForm() {
  return (
    <section>
      <h1>Contact Me</h1>
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
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-email"
            label="Email"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-message"
            label="Message"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
      </Box>
    </section>
  );
}

export default ContactForm;
