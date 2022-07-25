import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Button,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { lightMode, darkMode } from "./redux/actions";

const useStyle = makeStyles((theme) => {
  return {
    DarkToolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#263238",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#ddd",
    },
    link: {
      color: "#000",
      marginRight: "10px",
    },
    darkLink: {
      color: "#fff",
      marginRight: "10px",
    },
    brand: {
      color: "#000",
    },
    darkBrand: {
      color: "#fff",
    },
    empty: theme.mixins.toolbar,
    links: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    page: {
      backgroundColor: "#c8cfcc",
      width: "100%",
      minHeight: "100vh",
    },
    darkPage: {
      backgroundColor: "#37474f",
      width: "100%",
      minHeight: "100vh",
    },
    darkIcon: {
      color: "#000",
      zIndex: "9999",
    },
    hamburger: {
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
      display: "none",
    },
    drawerPaper: {
      width: "240px",
      backgroundColor: "#ddd",
    },
    DarkDrawerPaper: {
      width: "240px",
      backgroundColor: "#263238",
    },
    icons: {
      zIndex: "9999",
    },
    darkButton: {
      color: "#fff",
    },
    active: {
      color: "darkBlue",
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state);
  const [Text, setText] = useState({ text: "Light Mode" });
  const [DarkMode, setDarkMode] = useState(false);
  const [Open, setOpen] = useState(false);
  const navigate = useNavigate();
  const sidebar = useRef();
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (sidebar.current !== e.currentTarget) {
        setOpen(false);
      }
    });
  });
  useEffect(() => {
    console.log("i run");
    setText({ text: mode.text });
    setDarkMode(mode.darkMode);
  }, [mode, dispatch]);
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Projects", path: "/project" },
    { text: "Contact Me", path: "/contact" },
  ];
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      {/* appbar */}
      <AppBar elevation={0}>
        <Toolbar className={DarkMode ? classes.DarkToolbar : classes.toolbar}>
          <div>
            <Typography
              variant="h5"
              className={DarkMode ? classes.darkBrand : classes.brand}
            >
              WELCOME
            </Typography>
          </div>
          <div className={classes.links}>
            <Link to="/" className={DarkMode ? classes.darkLink : classes.link}>
              Home
            </Link>
            <Link
              to="/About"
              className={DarkMode ? classes.darkLink : classes.link}
            >
              About
            </Link>
            <Link
              to="/Project"
              className={DarkMode ? classes.darkLink : classes.link}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={DarkMode ? classes.darkLink : classes.link}
            >
              Contact Me
            </Link>
            <div className={classes.mode}>
              <Button
                onClick={() => {
                  if (Text.text === "Light Mode") {
                    dispatch(darkMode());
                  } else {
                    dispatch(lightMode());
                  }
                }}
                className={DarkMode ? classes.darkButton : classes.button}
                endIcon={DarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
              >
                {Text.text}
              </Button>
            </div>
          </div>
          <div className={classes.hamburger}>
            {Open ? (
              <CloseIcon
                className={DarkMode ? classes.icons : classes.darkIcon}
                onClick={() => setOpen(!Open)}
              />
            ) : (
              <MenuIcon
                className={DarkMode ? classes.icons : classes.darkIcon}
                onClick={() => setOpen(!Open)}
              />
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* sidebar */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={Open}
        // className={DarkMode ? classes.darkDrawer : classes.drawer}
        classes={{
          paper: DarkMode ? classes.DarkDrawerPaper : classes.drawerPaper,
        }}
        ref={sidebar}
      >
        <List>
          {menuItems.map((items, index) => {
            return (
              <ListItem
                key={index}
                onClick={() => handleClick(items.path)}
                className={DarkMode ? classes.darkLink : classes.link}
                classes={{
                  backgroundColor:
                    location.pathname === items.path ? classes.active : null,
                }}
              >
                <ListItemText>{items.text}</ListItemText>
              </ListItem>
            );
          })}
          <ListItem>
            <Button
              className={DarkMode ? classes.darkButton : classes.button}
              onClick={() => {
                if (Text.text === "Light Mode") {
                  dispatch(darkMode());
                } else {
                  dispatch(lightMode());
                }
              }}
              endIcon={DarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            >
              {Text.text}
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <div className={DarkMode ? classes.darkPage : classes.page}>
        <div className={classes.empty}></div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
