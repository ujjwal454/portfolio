import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Container, Typography, makeStyles } from "@material-ui/core";
import about from "../svgs/about.svg";
const useStyles = makeStyles((theme) => {
  return {
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
  };
});
const About = () => {
  const classes = useStyles();
  const mode = useSelector((state) => state);
  const [darkMode, setdarkMode] = useState(false);
  useEffect(() => {
    if (mode.darkMode) {
      setdarkMode(true);
    } else {
      setdarkMode(false);
    }
  }, [mode, darkMode]);
  return (
    <Container>
      <Typography
        variant="h2"
        className={darkMode ? classes.darkText : classes.text}
      >
        ABOUT ME
      </Typography>
      <Grid container>
        <Grid item md={5}>
          <img src={about} alt="" className={classes.image} />
        </Grid>
        <Grid item md={7} className={classes.mainText}>
          <Typography
            variant="h4"
            className={darkMode ? classes.darkText : classes.text}
          >
            " I am a front-end web developer and I have strong grasp on js css
            html I can work with ui framewroks like material-ui bootstrap, And
            react js is my favourite javascript library all of my major project
            I have build using react js and redux js "{" "}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
