import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ChatBotImg from "../../assets/ChatBotimg.png";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import StatusDropDown from "../status-drop-down/StatusDropDown";
import UpdateAgentDropDown from "../update-agent-drop-down/UpdateAgentDropDown";
import { ContinueButton } from "../continue-button/ContinueButton";

const ChatbotCard = ({ chatBots }) => {
  const [showCompleteName, setShowCompleteName] = useState(false);

  const handleMenuData = (chatbotId) => {
    console.log(chatbotId);
    setChatbotIdRedux(chatbotId);
    setMenuData("ChatbotDetails");
    navigate("/agent-details");
  };

  // Function to toggle showing complete name
  const handleShowCompleteName = () => {
    setShowCompleteName(!showCompleteName); // Toggle showCompleteName state
  };

  return (
    <Box className="chatbot-cards-box">
      <Grid
        className="chatbot-cards-grid"
        container
        spacing={4}
        sx={{
          marginTop: "1rem",
          marginBottom: "1rem",
          justifyContent: "start",
          alignItems: "center",
          // marginLeft:0,
          // padding: 0,
        }}
      >
        {chatBots?.map((chatbot, index) => (
          <Grid
            item
            key={chatbot?._id}
            xs={11}
            sm={6}
            md={6}
            lg={3}
            sx={{ margin: "0 0" }}
            style={{}}
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: "11.31px",
                border: "1px solid #FE705F",
                position: "relative",
              }}
            >
              <Box
                className="image-box-container"
                sx={{
                  height: 180,
                  borderRadius: "11.31px", // Make it a perfect circle
                  backgroundColor: "#FF8C7D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  src={ChatBotImg}
                  alt={chatbot?.name}
                  style={{
                    height: "134px",
                    width: "134px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <CardContent>
                <Box
                  className="name-with-status-tag"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: ".9rem",
                    gap: 1,
                    width: "100%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="Box"
                    onClick={handleShowCompleteName}
                    sx={{
                      fontSize: "1.7rem",
                      fontWeight: "400px",
                      fontFamily: "Outfit",
                      width: "50%",
                      overflow: "hidden",
                      height: "2rem",
                      // backgroundColor:"red",
                      // marginLeft:'-2.4rem',
                      marginTop: "1rem",
                      // position: "relative",
                    }}
                  >
                    {chatbot?.name}
                  </Typography>

                  <Box
                    size="small"
                    sx={{
                      backgroundColor:
                        chatbot?.status === "inactive" ||
                        chatbot?.status === "saved"
                          ? "#BEBEBE"
                          : "#49D917",
                      color: "#fff",
                      borderRadius: "2rem",
                      padding: "5px",
                      fontFamily: "Outfit",
                      fontSize: "11px",

                      boxShadow: "0px 4px 4px 0px #0000001A",
                      width: "5.2rem",
                      whiteSpace: "nowrap",
                      height: "1.6rem",
                      marginTop: ".4rem",
                      textAlign: "center",

                      cursor: "default",
                    }}
                  >
                    {chatbot?.status}
                  </Box>

                  {chatbot?.status !== "onTraining" && (
                    <StatusDropDown
                      chatBotId={chatbot?._id}
                      chatbotStatus={chatbot?.status}
                    />
                  )}
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      marginBottom: "1.2rem",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "13.57px",
                      color: "#000000B2",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Messages Usage
                  </Typography>

                  <LinearProgress
                    style={{
                      flexGrow: 1,
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      marginBottom: "1rem",
                    }}
                    variant="determinate"
                    value={(chatbot?.msgsUsed / chatbot?.msgsAllowed) * 100} // Set the value as per your requirement
                    sx={{
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#62D2E9", // Set the color of the progress bar
                      },
                    }}
                  />

                  <Typography
                    style={{
                      marginLeft: "auto",
                      marginBottom: "1.2rem",
                      fontSize: "13.57px",
                      fontFamily: "Outfit",
                      fontWeight: "400",
                      color: "#000000B2",
                    }}
                  >
                    {chatbot?.msgsUsed}/{chatbot?.msgsAllowed}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      marginBottom: "1.2rem",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "13.57px",
                      color: "#000000B2",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Characters Usage
                  </Typography>
                  <LinearProgress
                    style={{
                      flexGrow: 1,
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      marginBottom: "1rem",
                    }}
                    variant="determinate"
                    value={(chatbot?.charsUsed / chatbot?.charsAllowed) * 100} // Set the value as per your requirement
                    sx={{
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#62D2E9", // Set the color of the progress bar
                      },
                    }}
                  />

                  <Typography
                    style={{
                      marginLeft: "auto",
                      marginBottom: "1.2rem",
                      fontSize: "13.57px",
                      fontFamily: "Outfit",
                      fontWeight: "400",
                      color: "#000000B2",
                    }}
                  >
                    {chatbot?.charsUsed}/{chatbot?.charsAllowed}
                  </Typography>
                </Box>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      marginBottom: "1.2rem",
                      fontFamily: "Inter",
                      fontWeight: "400",
                      fontSize: "13.57px",
                      color: "#000000B2",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Chat Responses
                  </Typography>

                  <Typography
                    style={{
                      marginLeft: "auto",
                      marginBottom: "1.2rem",
                      fontSize: "13.57px",
                      fontFamily: "Outfit",
                      fontWeight: "400",
                      color: "#000000B2",
                    }}
                  >
                    {chatbot?.chatResponses}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {chatbot?.status === "saved" ? (
                  <ContinueButton chatBotId={chatbot?._id} />
                ) : (
                  <UpdateAgentDropDown chatBotId={chatbot?._id} />
                )}
                {chatbot?.status === "saved" ? null : (
                  <Button
                    size="small"
                    onClick={() => {
                      handleMenuData(chatbot?._id);
                    }}
                    sx={{
                      padding: "8px",
                      marginLeft: ".5rem",
                      width: "40%", // Make button full width
                      height: "2.5rem",
                      borderRadius: "22.49px",
                      background: "#FFFFFF",
                      fontFamily: "Outfit",
                      fontWeight: "400",
                      fontSize: "13.57px",
                      color: "#62D2E9",
                      marginBottom: ".7rem",
                      border: "1px solid #62D2E9",
                      boxShadow: "0px 4px 8px 0px #0000001A",
                      "&:hover": {
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 4px 8px 0px #0000001A",
                      },
                    }}
                  >
                    See Details
                  </Button>
                )}

                {/*</Link> */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChatbotCard;
