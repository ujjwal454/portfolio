import emailjs from "@emailjs/browser";
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import contact from "../svgs/contact.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles((theme) => {
  return {
    img: {
      width: "80%",
      marginTop: "80px",
      marginBottom: "25px",
    },
    flex: {
      display: "flex",
      alignItems: "center",
    },
    darkFlex: {
      display: "flex",
      alignItems: "center",
      color: "#fff",
    },
    icon: {
      marginRight: "10px",
      cursor: "pointer",
    },
    darkIcon: {
      marginRight: "10px",
      color: "#fff",
      cursor: "pointer",
    },
    mainText: {
      margin: "80px 0 0 0px",
    },
    text: {
      margin: "20px 0",
    },
    image: {
      width: "80%",
      marginTop: "120px",
    },
    darkGreet: {
      color: "#ffeb3b",
    },
    darkText: {
      color: "#ddd",
      margin: "20px 0",
    },
    TextField: {
      width: "90%",
      margin: "20px 0",
      borderColor: "#fff",
    },
    send: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
    },
    btn: {
      marginRight: "10px",
    },
  };
});
const Contact = () => {
  const classes = useStyles();
  const mode = useSelector((state) => state);
  const [darkMode, setdarkMode] = useState(false);
  const [view, setview] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const formRef = useRef();
  useEffect(() => {
    if (mode.darkMode) {
      setdarkMode(true);
    } else {
      setdarkMode(false);
    }
  }, [mode, darkMode]);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("i run");
    if (Name === "" || Email === "" || Subject === "" || Message === "") {
      alert("Please enter Values in all the fields than try to submit");
    } else {
      emailjs
        .sendForm(
          "service_7ieiyh5",
          "template_01pqgk8",
          formRef.current,
          "6yYLKtJ5xuZGcQ2eI"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("message sent");
            setview(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setTimeout(() => {
              setview(false);
            }, 2000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <Typography
            variant="h2"
            className={darkMode ? classes.darkText : classes.text}
          >
            Contact Me
          </Typography>
          <img src={contact} alt="" className={classes.img} />
          <Typography
            variant="h5"
            className={darkMode ? classes.darkFlex : classes.flex}
          >
            <PhoneIcon className={darkMode ? classes.darkIcon : classes.icon} />
            +918373978203
          </Typography>
          <Typography
            variant="h5"
            className={darkMode ? classes.darkFlex : classes.flex}
          >
            <EmailIcon className={darkMode ? classes.darkIcon : classes.icon} />
            ujjwalguptawork@gmail.com
          </Typography>
          <div className={darkMode ? classes.darkFlex : classes.flex}>
            <GitHubIcon
              className={darkMode ? classes.darkIcon : classes.icon}
            />
            <LinkedInIcon
              className={darkMode ? classes.darkIcon : classes.icon}
            />
          </div>
        </Grid>
        <Grid item md={6}>
          <Typography
            variant="h4"
            className={darkMode ? classes.darkText : classes.text}
          >
            Message Me
          </Typography>
          <form onSubmit={sendEmail} ref={formRef}>
            <TextField
              placeholder="Enter Your Name"
              label="Name"
              variant="outlined"
              className={classes.TextField}
              value={Name}
              name="user_name"
              onChange={(e) => setName(e.currentTarget.value)}
            />{" "}
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              variant="outlined"
              className={classes.TextField}
              value={Email}
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
              name="user_email"
            />{" "}
            <br />
            <TextField
              placeholder="Enter Subject"
              label="subject"
              variant="outlined"
              className={classes.TextField}
              value={Subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
              name="user_subject"
            />{" "}
            <br />
            <TextField
              placeholder="Enter your message"
              label="message"
              variant="outlined"
              color="primary"
              className={classes.TextField}
              value={Message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              rows={10}
              name="message"
            />{" "}
            <br />
            <div className={classes.send}>
              <Button
                variant="contained"
                type="submit"
                className={classes.btn}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
              {view && (
                <Typography
                  vairant="body1"
                  className={darkMode ? classes.darkText : classes.text}
                >
                  Thank You
                </Typography>
              )}
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
