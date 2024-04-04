import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import ChatbotIcon from "../../assets/chatbot-png-icon.png";

export const NotificationPanel = ({
  showNotificationPanel,
  isLoading,
  notifications,
  handleLoadMore,
  loadMoreLoader,
  totalNotifications,
}) => {
  const handleReadNotification = async (chatbotId, docId) => {
    console.log(chatbotId);
  };
  return (
    <>
      {showNotificationPanel &&
        (isLoading ? (
          <Box
            className="notification-button"
            sx={{
              position: "absolute",
              zIndex: 1000,
              top: "calc(100% + 10px)", // Adjust the value as needed
              left: "50%", // Position the box horizontally in the center
              transform: "translateX(-95%)",
              borderRadius: "0.3125rem",
              background: "#FFF",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
              width: "500px",
              height: "200px",
              px: 2,
            }}
          >
            <Box
              className="profile-icon-with-empty-box"
              sx={{
                // p: 1,
                display: "flex",
                // justifyContent: "space-around",
                width: "100%",
                height: "120px",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "hsl(200, 20%, 95%)",
                  width: "60px",
                  height: "60px",
                }}
              >
                {""}
              </Box>
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  backgroundColor: "hsl(200, 20%, 95%)",
                  height: "60px",
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                {""}
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: "Outfit",
                color: "grey",
              }}
            >
              Loading ...
            </Typography>
          </Box>
        ) : notifications?.length > 0 ? (
          <Box
            className="notification-panel-after-fetching"
            sx={{
              position: "absolute",
              zIndex: 1000,
              top: "calc(100% + 10px)", // Adjust the value as needed
              left: "50%", // Position the box horizontally in the center
              transform: "translateX(-95%)",
              borderRadius: "0.3125rem",
              background: "#FFF",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
              width: "500px",
              height: "600px",
              overflowY: notifications?.length > 5 ? "scroll" : "auto",
              px: 2,
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "thin",
            }}
          >
            {notifications?.map((notification, index) => {
              return (
                <Box
                  className="profile-icon-with-notification-message"
                  key={index}
                  onClick={() =>
                    handleReadNotification(
                      notification?.chatbotId,
                      notification?._id
                    )
                  }
                  sx={{
                    p: 1,
                    // justifyContent: "space-around",
                    backgroundColor: !notification?.read
                      ? "#DEECFF"
                      : "hsl(200, 20%, 95%)",
                    my: 1,
                    width: "100%",
                    height: "100px",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    className="date-and-time"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "black",
                    }}
                  >
                    {" "}
                    <Typography
                      align="left"
                      sx={{ fontFamily: "Outfit", pl: 0.5 }}
                    >
                      {notification?.date}
                    </Typography>
                    <Typography
                      align="right"
                      sx={{ fontFamily: "Outfit", pr: 0.5 }}
                    >
                      {notification?.time}
                    </Typography>
                  </Box>

                  <Box
                    className="icon-with-message"
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "50%",
                        backgroundColor: "transparent",
                        width: "60px",
                        height: "60px",
                      }}
                    >
                      <img src={ChatbotIcon} width="100%" height="100%" />
                    </Box>
                    <Box
                      sx={{
                        p: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        // backgroundColor: "hsl(200, 20%, 95%)",
                        height: "60px",
                        width: "100%",
                        borderRadius: "15px",
                      }}
                    >
                      <Typography
                        sx={{ px: 0.5, fontWeight: 600, fontFamily: "Outfit" }}
                      >
                        {notification?.title}
                      </Typography>
                      <Typography
                        align="left"
                        sx={{
                          px: 0.5,
                          overflow: "hidden",
                          fontFamily: "Outfit",
                        }}
                      >
                        {notification?.body}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            {notifications?.length < totalNotifications && (
              <Button
                onClick={handleLoadMore}
                disableElevation
                disableTouchRipple
                sx={{ my: 1, "&:focus": { background: "transparent" } }}
              >
                <Typography variant="text" id="load-more-button">
                  {loadMoreLoader ? (
                    <CircularProgress
                      color="inherit"
                      size="1rem"
                      sx={{ mr: 2 }}
                    />
                  ) : (
                    ""
                  )}
                  Load More ...
                </Typography>
              </Button>
            )}
          </Box>
        ) : (
          <Box
            className="notification-panel-after-fetching"
            sx={{
              position: "absolute",
              zIndex: 1000,
              top: "calc(100% + 10px)", // Adjust the value as needed
              left: "50%", // Position the box horizontally in the center
              transform: "translateX(-95%)",
              borderRadius: "0.3125rem",
              background: "#FFF",
              boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
              width: "500px",
              height: "100px",

              px: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                my: 3,
                fontFamily: "Outfit",
                fontWeight: 600,
              }}
            >
              No Notifications.
            </Typography>
          </Box>
        ))}
    </>
  );
};
