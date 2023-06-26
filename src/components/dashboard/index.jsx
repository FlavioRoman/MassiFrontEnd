import React from "react";
import { StyledDasboardContend } from "./components/styledDasboard";

const Dashboard = () => {
  return (
    <div>
      <StyledDasboardContend>
        <Box sx={{ backgroundColor: "red" }}></Box>
      </StyledDasboardContend>
    </div>
  );
};

export default Dashboard;
