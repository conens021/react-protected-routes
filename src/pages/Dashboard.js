import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import CardGrid from "../components/Dashboard/CardGrid/CardGrid";
import CategoriesBar from "../components/Dashboard/CategoriesBar/CategoriesBar";

function Dashboard() {
  return (
    <main style={{ display: "flex", flexDirection: "column", rowGap: "2em" }}>
      <Paper elevation={3} sx={{borderLeft:'6px solid #27ae60',padding:'1em'}}>
        <h2>Recently Added</h2>
      </Paper>
      <Box className="outlet">
        <CardGrid />
        <Paper className="side-feature">
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
          <h3>Upcomping feature</h3>
        </Paper>
      </Box>
    </main>
  );
}

export default Dashboard;
