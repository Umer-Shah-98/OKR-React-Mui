import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PlanDropdown } from "../plan-drop-down/PlanDropDown";
import { NotificationPanel } from "../notification-panel/NotificationPanel";
import { LogoutDropdown } from "../logout-drop-down/LogoutDropDown";
import ProfileIcon from "../../assets/profile-icon.png";
import NotificationIcon from "../../assets/notification-icon.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { notifications } from "../../../constants";

export const Navbar = ({ open, handleLogout }) => {
  const userSubscriptionName = "Free";
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [showNotificationPanel, setShowNotificationPanel] = useState(false);
  const [showPlanDropdown, setShowPlanDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNotifications, setTotalNotifications] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMoreLoader, setLoadMoreLoader] = useState(false);

  // useEffect(() => {
  //   // Fetch more notifications when currentPage changes
  //   const fetchMoreNotifications = async () => {
  //     try {
  //       setLoadMoreLoader(true);
  //       const nextPageNotifications = await getUserNotifications(
  //         userId,
  //         currentPage
  //       );
  //       if (nextPageNotifications?.success) {
  //         setLoadMoreLoader(false);

  //         const { data } = nextPageNotifications;
  //         const { total } = data;
  //         const notificationList = data?.notifications;
  //         setNotifications((prevNotifications) => [
  //           ...prevNotifications,
  //           ...notificationList,
  //         ]);
  //         setTotalNotifications(() => total);
  //       } else {
  //         throw nextPageNotifications;
  //       }
  //     } catch (error) {
  //       setLoadMoreLoader(false);

  //       console.log(error);
  //     }
  //   };

  //   if (currentPage > 1) {
  //     fetchMoreNotifications();
  //   }
  // }, [currentPage]);

  const handleShowNotificationPanel = async () => {
    // setCurrentPage(() => 1);
    setShowNotificationPanel(!showNotificationPanel);
    // try {
    //   setIsLoading(true);
    //   const notifications = await getUserNotifications(userId);
    //   console.log("notifications", notifications);
    //   if (notifications?.success) {
    //     const { data } = notifications;
    //     const { total } = data;
    //     const notificationList = data?.notifications;
    //     console.log(data);
    //     setNotifications(() => notificationList);
    //     setTotalNotifications(() => total);
    //     setIsLoading(false);
    //   } else {
    //     throw notifications;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setIsLoading(false);
    // }
  };

  const handleLoadMoreNotifications = () => {};
  // const handleNavigation = () => {
  //   navigate(-1);
  // };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const logoutButton = document.getElementById("logout-button");
      const notificationButton = document.getElementById("notification-button");
      const planDropdownButton = document.getElementById(
        "plan-drop-down-button"
      );
      // Check if the click is inside the notification panel or its children
      const loadMoreButton = document.getElementById("load-more-button");
      if (loadMoreButton && loadMoreButton.contains(event.target)) {
        return;
      }
      if (logoutButton && !logoutButton.contains(event.target)) {
        setShowLogoutButton(false);
      }
      if (notificationButton && !notificationButton.contains(event.target)) {
        // console.log(event.target);
        setShowNotificationPanel(false);
      }
      if (planDropdownButton && !planDropdownButton.contains(event.target)) {
        // console.log(event.target);
        setShowPlanDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showLogoutButton, showNotificationPanel, showPlanDropdown]);
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
        backgroundColor: "white",
        color: "#f96350",
        boxShadow: "none",
        ml: 10,

        // background: "yellow",
        py: 2,
      }}
    >
      <Toolbar sx={{ ml: open ? 30 : 10 }}>
        <Box
          className="nav-bar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            className="title"
            sx={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "start",
              // flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontFamily: "Outfit",
                fontSize: {
                  xs: "10px",
                  sm: "15px",
                  md: "20px",
                  lg: "25px",
                },
                fontWeight: 500,
                ml: { xs: 0, md: 2 },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              My Agents
            </Typography>
          </Box>

          <Box
            className="icons"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: { xs: 1, sm: 3, md: 3, lg: 4, xl: 5 },
            }}
          >
            <Button
              disableTouchRipple
              disableElevation
              onClick={() => setShowPlanDropdown(!showPlanDropdown)}
              id="plan-drop-down-button"
              sx={{
                width: { xs: "90px", sm: "120px" },
                height: { xs: "25px", sm: "38px" },
                background: "linear-gradient(0deg, #62D2E9, #62D2E9)",
                fontFamily: "Inter",
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "15px",
                letterSpacing: "0em",
                borderRadius: "35.01px",
                color: "#000000",
                position: "relative",
              }}
            >
              {userSubscriptionName} Plan
            </Button>
            <PlanDropdown showPlanDropdown={showPlanDropdown} />
            <Box
              className="notification-icon"
              sx={{
                width: { xs: "20px", sm: "30px" },
                height: { xs: "22px", sm: "32px" },
                position: "relative",
                cursor: "pointer",
              }}
            >
              <img
                id="notification-button"
                src={NotificationIcon}
                alt="notification-icon"
                width="100%"
                height="100%"
                sx={{ cursor: "pointer" }}
                onClick={handleShowNotificationPanel}
              />
              <NotificationPanel
                id="notification-panel"
                showNotificationPanel={showNotificationPanel}
                isLoading={isLoading}
                notifications={notifications}
                handleLoadMore={handleLoadMoreNotifications}
                loadMoreLoader={loadMoreLoader}
                totalNotifications={notifications?.length}
              />
            </Box>
            <Box
              className="profile-icon"
              sx={{
                width: { xs: "20px", sm: "30px" },
                height: { xs: "22px", sm: "32px" },
                position: "relative",
                cursor: "pointer",
              }}
            >
              <img
                src={ProfileIcon}
                alt="profile-icon"
                width="100%"
                height="100%"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setShowLogoutButton(!showLogoutButton);
                }}
                id="logout-button" // Added ID to the logout button
              />
              <LogoutDropdown
                showLogoutButton={showLogoutButton}
                handleLogout={handleLogout}
              />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
