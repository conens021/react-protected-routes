import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../components/Dashboard/Header/Header";
import MobileSideBarComponent from "../components/Dashboard/MobileSideBar";

import DekstopSideBar from "../components/Dashboard/DekstopSideBar";

import "../styles/dashboard.css";

function DashboardLayout() {
  return (
    <>
      <MobileSideBarComponent />
      <Header />
      <Box className="dashboard-layout">
        <DekstopSideBar />
        <Outlet />
      </Box>
    </>
  );
}

export default DashboardLayout;
