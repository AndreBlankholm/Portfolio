import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5hoh0sq",
        "template_v4d2u8f",
        form.current,
        "202DDVcyD0uFQZ2YB"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('messege sent!')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
   //make sure your variables in the return are the same on you emailjs site
  return (
    
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};


export default Contact;