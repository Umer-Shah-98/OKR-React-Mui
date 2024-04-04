import React from "react";
import { Box, Typography } from "@mui/material";
export const PlanDropdown = ({ showPlanDropdown }) => {
  const userSubscriptionName = "Free";
  const chatBotsAllowed = 10;
  const chatBotsCreated = 8;
  const messagesAllowed = 2000;
  const messageCreditsUsed = 1000;
  return (
    <>
      {showPlanDropdown && (
        <Box
          className="plan-drop-down-button"
          sx={{
            position: "absolute",
            zIndex: 1000,
            top: "calc(100% + 10px)", // Adjust the value as needed
            left: "62%", // Position the box horizontally in the center
            transform: "translateX(100%)",
            borderRadius: "15px",
            background: "#FFF",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
            width: "max-content",

            height: "160px",
            px: 4,
            border: "1px solid #62D2E9",
          }}
        >
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              gap: 3,
            }}
          >
            <Typography
              sx={{ fontFamily: "Outfit", color: "#000000", fontWeight: "600" }}
            >
              AI Agent
            </Typography>
            <Box
              sx={{
                width: "auto",
                fontFamily: "Outfit",
                color: "#000000",
                border: "1px solid #62D2E9",
                borderRadius: "21px",
                p: 0.2,
                px: 1,
              }}
            >
              {chatBotsCreated}/{chatBotsAllowed}
            </Box>
          </Box>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              gap: 3,
            }}
          >
            <Typography
              sx={{ fontFamily: "Outfit", color: "#000000", fontWeight: "600" }}
            >
              Messages
            </Typography>
            <Box
              sx={{
                width: "auto",
                fontFamily: "Outfit",
                color: "#000000",
                border: "1px solid #62D2E9",
                borderRadius: "21px",
                p: 0.2,
                px: 1,
              }}
            >
              {messageCreditsUsed}/{messagesAllowed}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
