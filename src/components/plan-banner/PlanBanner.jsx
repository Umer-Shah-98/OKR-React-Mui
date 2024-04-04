import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const PlanBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#62D2E9",
        borderRadius: "15px",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Outfit",
            fontSize: "1.5rem",
          }}
        >
          Free Plan
        </Typography>
        <Typography sx={{ color: "white", fontFamily: "Outfit" }}>
          Wants to level up your multiple business with more
        </Typography>
        <Typography sx={{ color: "white", fontFamily: "Outfit" }}>
          Agents
        </Typography>
      </Box>
      <Button
        sx={{
          fontFamily: "Outfit",
          backgroundColor: "#ffffff",
          color: "#62D2E9",
          borderRadius: "15px",
          px: 3,
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#62D2E9",
          },
        }}
      >
        Upgrade Plan
      </Button>
    </Box>
  );
};
