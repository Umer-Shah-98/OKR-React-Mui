import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HelpIcon from "@mui/icons-material/Help";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatBotLogo from "../../assets/ChatBotIcon.png";
import { useState } from "react";

import { useTheme, useMediaQuery, Button, Container } from "@mui/material";

// import { useAtom } from "jotai";
// import {
//   accountSubOptions,
//   atomShowUpgradePlanModal,
//   chatbotDetailsAtom,
//   chatbotSubOptions,
//   editDiscardOption,
//   menuContent,
//   navBarTitle,
//   tempMenuContent,
//   defaultAtomAgentDetails,
//   atomTempRoute,
//   atomUrlsPending,
//   atomUrlsCrawled,
//   atomCanNotTrainAndSave,
//   atomIsFetchingUrls,
// } from "../../jotai/atom";

import { Navbar } from "../../components/navbar/Navbar";
import theme from "../../../theme/theme";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  boxShadow: open
    ? "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)"
    : "none", // Apply box shadow when the drawer is open

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  // const userSubscriptionName = "Free"
  // const chatBotsAllowed = userSubscription?.planId?.chatBotsAllowed;
  // const chatBotsCreated = userSubscription?.chatBotsCreated;
  // const reduxAgentDetails = useSelector(
  //   (state) => state?.chatbot?.chatbotDetails
  // );
  // const edit = useSelector((state) => state?.chatbot?.edit);

  // const theme = useTheme();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const currentRoute = location.pathname;
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [open, setOpen] = useState(isLargeScreen);
  const [showAccountOptions, setShowAccountOptions] = useState(false); // New state to manage the display of account options
  const [showChatbotOptions, setShowChatbotOptions] = useState(false);

  useEffect(() => {
    // Close the drawer automatically when screen size becomes less than 1200px
    if (!isLargeScreen) {
      console.log("use");
      setOpen(false);
      setShowChatbotOptions(false);
      setShowAccountOptions(false);
    }
  }, [isLargeScreen]);
  const handleSelectOption = (text) => {
    console.log(text);
    if (text === "Your Profile") {
      setSelectedOptionText("Profile");
      return;
    }
    if (text === "Billing usage and settings") {
      setSelectedOptionText("Billing & settings");
      return;
    }
  };

  const styles = {
    sideBarButtons: {
      display: "block",
      my: 3,
      // color: "#62D2E9",
      borderColor: "blue",
      borderRadius: "10px",
      background: "white",
      // boxShadow: open ? "-1px 4px 5px -2px rgba(0,0,0,0.7)" : "none",
      border: "2px solid #62D2E9",
    },
    selectedButton: {
      // Change this color for the selected state
      borderRadius: "0.625rem",
      border: "1px solid #FF8C7D",
      background: "linear-gradient(0deg, #FF8C7D 0%, #FF8C7D 100%)",
      "&:hover": {
        // background: "white",
      },
    },
    listStyles: {
      backgroundColor: "white",
      m: 1,
      px: open ? 2 : "5px",
      // py: open ? 2 : "10px",
    },
    expandedOptionsStyles: {
      paddingTop: 0,
      marginTop: 0,
      "&:hover": {
        backgroundColor: "transparent",
        color: "#FF7F72",
        fontFamily: "Outfit",
      },
    },
    selectedOptionStyles: {
      color: "#FF7F72",
    },
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(() => false);
    setShowChatbotOptions(false);
    setShowAccountOptions(false);
  };

  const handleNavigation = (text, route) => {
    if (text === "Agent") {
      setOpen(true);
      setShowChatbotOptions(true);
      setShowAccountOptions(false);
      return;
    }

    if (text === "Account") {
      console.log("account-block");

      setOpen(true);
      setShowAccountOptions(true);
      setShowChatbotOptions(false);
      return;
    }

    if (text === "My Agents") {
      setShowChatbotOptions(true);

      return;
    }

    if (text === "Create Agent") {
      setShowChatbotOptions(true);

      return;
    }

    if (text === "Agent templates") {
      setShowChatbotOptions(true);

      return;
    }
    if (text === "Profile" || text === "Billing & settings") {
      setShowAccountOptions(true);

      return;
    }
    if (text === "Subscription") {
      setShowChatbotOptions(false);
      setShowAccountOptions(false);
      return;
    }
    setShowChatbotOptions(false);
    setShowAccountOptions(false);
  };

  const getIcon = (text) => {
    if (text === "Dashboard") {
      return <DashboardIcon />;
    }
    if (text === "Agent") {
      // return(<img src={ChatbotIcon} alt="Chatbot Icon" />);
      return <SmartToyIcon />;
    }
    if (text === "Account") {
      return <PeopleAltIcon />;
    }
    if (text === "Subscription") {
      return <SubscriptionsIcon />;
    }
    if (text === "Need help?") {
      return <HelpIcon />;
    }
  };

  const handleLogout = () => {};
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1200);
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1200);
    setIsSmallSidebarOpen(window?.innerWidth <= 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isSmallSidebarOpen, setIsSmallSidebarOpen] = useState(true);

  const handleClose = () => {
    console.log("clicked box close");
    setIsSmallSidebarOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Navbar open={open} handleLogout={handleLogout} />
      <Drawer
        className="my-drawer"
        variant="permanent"
        open={open}
        sx={{
          boxShadow:
            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        }}
      >
        <DrawerHeader className="my-drawer-header">
          <Box
            sx={{
              display: "flex",
              justifyContent: open ? "space-between" : "start",
              alignItems: "center",
              gap: 5,
              mt: 2,
            }}
          >
            <Box
              className="profile-circle"
              sx={{
                width: "45px",
                height: "45px",
                backgroundColor: "white",
                borderRadius: "50%",
                border: "none",
              }}
            >
              <img
                src={ChatBotLogo}
                width={"100%"}
                height={"100%"}
                alt="logo"
              />
            </Box>
            {open && (
              <Box className="title">
                <Typography
                  color="#FF7F72"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    fontFamily: "Outfit",
                  }}
                >
                  Spoky
                </Typography>
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                disableTouchRipple
                onClick={() =>
                  open ? handleDrawerClose() : handleDrawerOpen()
                }
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  color: "#FF8C7D",
                }}
              >
                {open ? (
                  <ChevronLeftIcon />
                ) : (
                  <MenuIcon
                    sx={{
                      color: "#FF8C7D",
                      fontSize: "32px",
                      fontWeight: "600",
                    }}
                  />
                )}
              </IconButton>
            </Box>
          </Box>
        </DrawerHeader>
        <List sx={styles.listStyles}>
          {[
            { text: "Dashboard", route: "/dashboard" },
            { text: "Agent", route: "/my-agents" },
            { text: "Account", route: "/account" },
            { text: "Subscription", route: "/subscription" },
            { text: "Need help?", route: "/need-help" },
          ].map((page, index) => (
            <Box key={index}>
              <ListItem
                disablePadding
                sx={{
                  ...styles.sideBarButtons,
                  ...(page?.text === "Agent" && styles.selectedButton),

                  fontFamily: "Outfit",
                  "&:hover": {
                    backgroundColor: "#FF8C7D",
                    border: "1px solid #FF8C7D",
                    color: "#ffffff",
                  },
                  // width: "90%",
                  // ml: 1,
                }}
              >
                <ListItemButton
                  disableTouchRipple
                  disableRipple
                  onClick={() => {
                    handleNavigation(page?.text, page?.route);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    // "&:hover": { backgroundColor: "#FF8C7D" },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: page?.text === "Agent" ? "#ffffff" : "#000000",
                    }}
                  >
                    {getIcon(page?.text)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          opacity: open ? 1 : 0,
                          color: page?.text === "Agent" ? "#ffffff" : "#000000",
                          fontFamily: "Outfit",
                        }}
                      >
                        {page?.text}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
              {showChatbotOptions && page?.text === "Agent" && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                    ml: 2,

                    padding: 0,
                    // "&hover":{backgroundColor:'white'},
                  }}
                >
                  <Divider
                    orientation="vertical"
                    // flexItem
                    sx={{
                      mt: 2,
                      border: 2,
                      borderColor: "#FF5841",
                      height: "120px",
                      //set height back to 130px when adding chatbot templates
                    }}
                  />
                  <List sx={{ fontFamily: "Outfit", color: "#00000080" }}>
                    {/*deleted chatbot templates from the array */}
                    {[
                      { text: "My Agents", route: "/my-agents" },
                      { text: "Create Agent", route: "/create-agent" },
                      {
                        text: "Agent templates",
                        route: "/agent-templates",
                      },
                    ].map((page, index) => (
                      <ListItemButton
                        key={index}
                        disableTouchRipple
                        onClick={() =>
                          handleNavigation(page?.text, page?.route)
                        }
                        sx={{ "&hover": { backgroundColor: "white" } }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                ...styles.expandedOptionsStyles,
                                // ...(drawerExpandedButtonColor(
                                //   currentRoute,
                                //   page?.route
                                // ) && styles.selectedOptionStyles),
                                fontFamily: "Outfit",
                              }}
                            >
                              {page?.text}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              )}
              {showAccountOptions && page?.text === "Account" && (
                <Box sx={{ display: "flex", alignItems: "start", ml: 2 }}>
                  <Divider
                    orientation="vertical"
                    // flexItem
                    sx={{
                      mt: 2,
                      border: 2,
                      borderColor: "#FF5841",
                      height: "90px",
                    }}
                  />

                  <List sx={{ fontFamily: "Outfit", color: "#00000080" }}>
                    {[
                      { text: "Profile", route: "/account" },
                      {
                        text: "Billing & settings",
                        route: "/billing-settings",
                      },
                    ]?.map((page, index) => (
                      <ListItemButton
                        key={index}
                        disableTouchRipple
                        onClick={() =>
                          handleNavigation(page?.text, page?.route)
                        }
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                ...styles.expandedOptionsStyles,
                                // ...(drawerExpandedButtonColor(
                                //   currentRoute,
                                //   page?.route
                                // ) && styles.selectedOptionStyles),
                                fontFamily: "Outfit",
                              }}
                            >
                              {page?.text}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
