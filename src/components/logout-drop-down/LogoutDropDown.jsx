import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ProfileIcon from "../../assets/profile-icon.png";
import LogoutIcon from "@mui/icons-material/Logout";

export const LogoutDropdown = ({ showLogoutButton, handleLogout }) => {
  const username = "Umer Shah";
  const email = "usmershah1998@gmail.com";
  return (
    <>
      {showLogoutButton && (
        <Box
          className="logout-button"
          sx={{
            position: "absolute",
            zIndex: 1000,
            top: "calc(100% + 10px)", // Adjust the value as needed
            left: "50%", // Position the box horizontally in the center
            transform: "translateX(-95%)",
            borderRadius: "0.3125rem",
            background: "#FFF",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
            width: "max-content",
            height: "160px",
            px: 2,
          }}
        >
          <Box
            className="profile-icon-with-username"
            sx={{
              // p: 1,
              display: "flex",
              // justifyContent: "space-around",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <img
              src={ProfileIcon}
              alt="profile-icon"
              width="20%"
              height="20%"
              sx={{ cursor: "pointer" }}
            />
            <Box
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontFamily: "Outfit", mt: 2.5 }}>
                {username}
              </Typography>

              <Typography sx={{ fontFamily: "Outfit" }}>{email}</Typography>
            </Box>
          </Box>
          <hr />
          <Button
            sx={{ width: "100%" }}
            endIcon={<LogoutIcon sx={{ color: "grey" }} />}
            onClick={handleLogout}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Outfit",
                color: "grey",
              }}
            >
              Logout
            </Typography>
          </Button>
        </Box>
      )}
    </>
  );
};
