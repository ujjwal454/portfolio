import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  Container,
  Typography,
  makeStyles,
  Paper,
  Button,
} from "@material-ui/core";
import crypto from "../svgs/crypto.svg";
import amazon from "../svgs/amazon.svg";
import blog from "../svgs/blog.svg";
import netflix from "../svgs/netflix.svg";
import wheather from "../svgs/wheather.svg";
import recepi from "../svgs/recepi.svg";
import LaunchIcon from "@material-ui/icons/Launch";
const useStyles = makeStyles((theme) => {
  return {
    img: {
      width: "80%",
    },
    item: {
      textAlign: "center",
    },
    paper: {
      padding: "10px",
      minHeight: "200px",
      "&:hover": {
        transform: "scale(+105%)",
      },
      transition: "all 0.2s ease",
    },
    text: {
      margin: "20px 0",
      textAlign: "center",
    },
    darkText: {
      color: "#ddd",
      margin: "20px 0",
      textAlign: "center",
    },
    btn: {
      marginTop: "20px",
      // backgroundColor: "#4caf50",
      width: "100%",
    },
    name: {
      margin: "20px 0px",
    },
  };
});
const Project = () => {
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
  const projects = [
    {
      id: 1,
      name: "Amazon Clone",
      img: amazon,
      link: "https://github.com/ujjwal454/amazon-clone",
      desc: "This is a e-commerce website and a clone of amazon I have build this website using react material-ui redux  and firebase for the user authentication ",
    },
    {
      id: 2,
      name: "Cryptoverse",
      img: crypto,
      link: "https://github.com/ujjwal454/cryptoverse",
      desc: "This website gives us information and news about top cryptocurrencies in the world I have build it using react material-ui redux axios for api call This website is integrated with two rest api calls one is for crypto stats and another is Crypto news",
    },
    {
      id: 3,
      name: "Blogs App",
      img: blog,
      link: "https://github.com/ujjwal454/Blogs-App",
      desc: "This is the Blogs website  users can post view thier and other  blogs I have used material ui react redux firebase  with the help of firebase i have integrated authentication and storing user data to the firebase database ",
    },
    // {
    //   id: 4,
    //   name: "Netflix Clone",
    //   img: netflix,
    //   link: "https://github.com/ujjwal454/netflix-clone",
    //   desc: "This website is the clone to the Netflix  where we can only view top movies, tranding movies and allot more I have build this website uisng react plain css axios and firebase ",
    // },
    {
      id: 5,
      name: "Wheather App",
      img: wheather,
      link: "https://github.com/ujjwal454/wheather-app",
      desc: "This website gives us wheather  of the searched city this website i have created using vanila javascript html and css",
    },
    {
      id: 6,
      name: "Recipe App",
      img: recepi,
      link: "https://github.com/ujjwal454/Recipe-app",
      desc: "this website gives us the recipe of the searched dish this website i have created using vanila javascript css and html ",
    },
  ];
  return (
    <Container>
      <Typography
        className={darkMode ? classes.darkText : classes.text}
        variant="h2"
      >
        My Projects
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        className={classes.gridCont}
      >
        {projects.map((project) => {
          return (
            <Grid
              item
              key={project.id}
              md={4}
              sm={7}
              xs={12}
              className={classes.item}
            >
              <Paper className={classes.paper}>
                <img
                  src={project.img}
                  alt={project.name}
                  className={classes.img}
                />
                <Typography variant="body1" className={classes.name}>
                  {project.name}
                </Typography>
                <Typography variant="body2">{project.desc}</Typography>
                <Button
                  variant="contained"
                  href={project.link}
                  target="blank"
                  endIcon={<LaunchIcon />}
                  className={classes.btn}
                >
                  Link to Github Repo
                </Button>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Project;
