import React, { useState } from "react";
import { send } from "emailjs-com";

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_ho4m6nf",
      "template_zmhs6gr",
      toSend,
      "user_LcYkUo0ZXmuY94CEhQoj6"
    )
      .then((response) => {
        window.alert("Your message has been sent", response.text);
      })
      .catch((err) => {
        window.prompt("Your message failed to sent, try again...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="cotainer">
      <form className="contact-form" onSubmit={onSubmit}>
        <h1 id="contact-text">Contact</h1>

        <input
          type="text"
          name="from_name"
          placeholder="From"
          value={toSend.from_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="to_name"
          placeholder="To"
          value={toSend.to_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          rows={5}
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
