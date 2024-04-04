import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";

import { CircularProgress } from "@mui/material";

export default function UpdateAgentDropDown({ chatBotId }) {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCustomizeMenuContent = async () => {};

  const handleUpdateChatbot = async () => {};
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
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
        Customize
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleCustomizeMenuContent}
          sx={{
            fontFamily: "Outfit",
            fontWeight: "500",
            fontSize: "1rem",
            color: "#00000080",
            "&:hover": {
              color: "#62D2E9",
            },
          }}
        >
          Customize Agent Interface
        </MenuItem>
        <MenuItem
          onClick={handleUpdateChatbot}
          sx={{
            marginTop: ".6rem",
            fontFamily: "Outfit",
            fontWeight: "500",
            fontSize: "1rem",
            color: "#00000080",
            "&:hover": {
              color: "#62D2E9",
            },
          }}
        >
          Update Agent Data
        </MenuItem>
      </Menu>
    </Box>
  );
}
