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
          alert("Message has been sent. Thank you so much!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //make sure your variables in the return are the same on you emailjs site
  return (
    <section className="contact-container">
      <div className="form-map-container">
        <div className="form-container">
          <form className="form" md={12} ref={form} onSubmit={sendEmail}>
            <div className="h1-name-container">
              <h1>Contact Me</h1>
              <FormControl className="formset" variant="standard" required color="primary">
                <InputLabel htmlFor="component-simple" className="formset" >Name</InputLabel>
                <OutlinedInput
                  className="control"
                  id="component-outlined"
                  defaultValue=""
                  type="text"
                  name="user_name"
                />
              </FormControl>
              <FormControl className="row" variant="standard" required color="warning">
                <InputLabel htmlFor="component-simple" className="formset">Email</InputLabel>
                <OutlinedInput
                  className="control"
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
                label="message here"
                multiline
                rows={4}
                defaultValue=""
                required
                color="warning"
                
              ></TextField>
              <div className="button">


                <Button
                  className="formset"
                  variant="outlined"
                  type="submit"
                  value="Send"
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="i-frame-container">
          <h1>I AM LOCATED IN COTTAGE GROVE MINNESOTA</h1>
          <iframe
            className="i-frame-link"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90568.12400075485!2d-93.0243668840206!3d44.81639237404564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7d001bd0cdabf%3A0xafbfc7433e84312!2sCottage%20Grove%2C%20MN!5e0!3m2!1sen!2sus!4v1681854120597!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
