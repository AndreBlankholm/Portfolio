import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


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
          console.log("messege sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //make sure your variables in the return are the same on you emailjs site
  return (
    <section className="Contact-container">
      <div className="form-container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue=""
            type="text"
            name="user_name"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <OutlinedInput
            id="component-outlined"
            defaultValue=""
            label="Name"
            type="email"
            name="user_email"
          />
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          name="message"
          label="Message Me"
          multiline
          rows={4}
          defaultValue=""
        />

        <Button variant="outlined" type="submit" value="Send">
          Submit
        </Button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
