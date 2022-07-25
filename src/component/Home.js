import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import homeLogo from "../svgs/homeLogo.svg";
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Button,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
const useStyles = makeStyles((theme) => {
  return {
    mainText: {
      marginTop: "100px",
    },
    text: {
      margin: "20px 0",
    },
    image: {
      width: "100%",
      marginTop: "80px",
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
const Home = () => {
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
  const navigate = useNavigate();
  return (
    <Container>
      <Grid container>
        <Grid item md={5} className={classes.mainText}>
          <Typography
            variant="h1"
            className={darkMode ? classes.darkGreet : null}
          >
            HELLO,👋{" "}
          </Typography>
          <Typography
            variant="h4"
            className={darkMode ? classes.darkText : classes.text}
          >
            I'm UJJWAL GUPTA - curious front-end web devloper based in New
            Delhi, India.
          </Typography>
          <Button
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => navigate("/about")}
          >
            Know More
          </Button>
        </Grid>
        <Grid item md={7}>
          <img src={homeLogo} alt="" className={classes.image} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
