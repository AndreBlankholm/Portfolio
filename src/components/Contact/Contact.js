import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/joy";

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
    <section className="contact-container">
      <div className="form-container">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="row">
            <FormControl className="row"  variant="standard" required >
              <InputLabel htmlFor="component-simple" >Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue=""
                type="text"
                name="user_name"
              />
            </FormControl>
          </div>
          <div className="row">
            <FormControl className="row" variant="standard" required >
              <InputLabel htmlFor="component-simple">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue=""
                label="Name"
                type="email"
                name="user_email"
              />
            </FormControl>
          </div>
          <div className="row">
            <TextField
              className="row"
              id="outlined-multiline-static"
              name="message"
              label="Message Me"
              multiline
              rows={4}
              defaultValue=""
              required 
            />
          </div>

          <div className="row">
            <Button
              className="row "
              variant="outlined"
              type="submit"
              value="Send"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div>
       <Card>
        <CardContent>
          <Grid>

          </Grid>
        </CardContent>
       </Card>
      </div>
      <div><h1>section 3</h1></div>
    </section>
  );
};

export default Contact;
