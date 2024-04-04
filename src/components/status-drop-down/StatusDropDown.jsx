import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { CircularProgress, List, ListItem } from "@mui/material";

export default function StatusDropDown({ chatBotId, chatbotStatus }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showActionModal, setShowActionModal] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setShowActionModal(true);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [anchorEl]);
  const handleClose = () => {
    // setAnchorEl(null);
    setShowActionModal(false);
  };
  const handleActiveORInactiveChatbot = async () => {
    console.log(chatbotStatus);
    console.log(chatBotId);
  };

  const handleDeleteClick = () => {
    console.log(chatBotId);
  };
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // console.log(event?.target);
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        // Clicked outside the modal, close the modal
        setShowActionModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalRef]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        // backgroundColor: "red",
        position: "relative",
      }}
    >
      <Button
        disableElevation
        disableTouchRipple
        sx={{
          color: "#808080",
          display: "flex",
          justifyContent: "flex-end",
          width: "20px",
          "&:hover": { backgroundColor: "transparent" },
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      {showActionModal && (
        <Box
          // ref={modalRef}
          sx={{
            position: "absolute",
            backgroundColor: "blue",
            // zIndex: 1000,
            top: "calc(100% + 8px)", // Adjust the value as needed
            left: isLoading ? "-70%" : "-40%", // Position the box horizontally in the center
            transform: "translateX(-5%)",
            borderRadius: "0.3125rem",
            border: "1px solid #D2D8DF",
            background: "#FFF",
            boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
            width: "100px",
            zIndex: 20000, // Increase the zIndex to ensure the modal is above other elements
          }}
          onClick={(e) => e.stopPropagation()} // Prevent click events from propagating to parent elements
        >
          <List>
            <ListItem
              onClick={handleClose}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "gray",
                },
              }}
            >
              {" "}
              <CloseIcon
                sx={{
                  width: "1rem",
                  marginBottom: "0",
                  color: "#00000080",
                  "&:hover": { color: "#62D2E9" },
                }}
              />
            </ListItem>
            <ListItem
              onClick={handleDeleteClick}
              sx={{
                fontFamily: "Outfit",
                fontWeight: "500",
                fontSize: "1rem",
                color: "#00000080",
                cursor: "pointer",
                display: "flex",
                justifyContent: isLoading ? "flex-end" : "flex-start",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#62D2E9",
                  fontWeight: "600",
                },
              }}
            >
              Delete
            </ListItem>
            <ListItem
              onClick={handleActiveORInactiveChatbot}
              sx={{
                marginTop: ".2rem",
                fontFamily: "Outfit",
                fontWeight: "500",
                fontSize: "1rem",
                color: "#00000080",
                cursor: "pointer",

                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#62D2E9",
                  fontWeight: "600",
                },
              }}
            >
              {isLoading ? (
                <CircularProgress color="inherit" size="1rem" sx={{ mr: 2 }} />
              ) : (
                ""
              )}
              {chatbotStatus === "inactive" ? "Activate" : "Inactive"}
            </ListItem>
          </List>
        </Box>
      )}
    </Box>
  );
}
