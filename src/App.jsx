import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, CssBaseline, Typography } from "@mui/material";
import Sidebar from "./components/drawer/Sidebar";
import { PlanBanner } from "./components/plan-banner/PlanBanner";
import ChatbotCard from "./components/chatbot-card/ChatbotCard";
import { agents } from "../constants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Box sx={{ px: 2, width: "100%", mt: "12vh" }}>
          <PlanBanner />
          <ChatbotCard chatBots={agents} />
        </Box>
      </Box>
    </>
  );
}

export default App;
