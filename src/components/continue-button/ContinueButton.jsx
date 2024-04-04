import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
export const ContinueButton = ({ chatBotId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContinueSavedChatbot = async () => {};
  return (
    <Button
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={() => handleContinueSavedChatbot()}
      size="small"
      sx={{
        padding: "8px",
        width: "8rem",
        height: "2.5rem",
        borderRadius: "22.49px",
        background: "#62D2E9",
        fontFamily: "Outfit",
        fontWeight: "400",
        fontSize: "13.57px",
        color: "#FFFFFF",
        marginBottom: ".7rem",
        marginLeft: ".5rem",
        "&:hover": {
          backgroundColor: "#62D2E9",
        },
      }}
    >
      {" "}
      {isLoading ? (
        <CircularProgress color="inherit" size="1rem" sx={{ mr: 2 }} />
      ) : (
        ""
      )}
      Continue
    </Button>
  );
};
