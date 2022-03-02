import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../../../styles/card-grid.css";
import SnippetCard from "../../UI/SnippetCard/SnippetCard";
import Tags from "../Snippet/Heading/Tags";

function CardGrid() {
  //simulate render icons from db
  const icons = {
    react: "devicon-react-original",
    java: "devicon-java-plain icon",
    ".net": "",
  };

  const iconUrl = "";
  return (
    <Box className="card-grid">
      <Paper elevation={6} className="card-paper">
        <SnippetCard coverColor="#60BE86">
          <Box className="pl-icon">
            <i class={`${icons["java"]} icon`}></i>
          </Box>
          <Box className="card-content">
            <Box className="card-title">
              <h3>Kurac</h3>
            </Box>
            <Typography className="card-description" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Link to="/app/dashboard/snippet/1">
              <Button
                className="card-btn"
                sx={{ width: "100%" }}
                variant="contained"
                color="secondary"
              >
                Pogledaj
              </Button>
            </Link>
          </Box>
        </SnippetCard>
      </Paper>

      <Paper elevation={3} className="card-paper">
        <SnippetCard coverColor="#1E2128">
          <Box className="pl-icon">
            <i class={`${icons["react"]} icon`}></i>
          </Box>
          <Box className="card-content">
            <Box className="card-title">
              <h3>Palac</h3>
            </Box>
            <Typography className="card-description" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Button
              className="card-btn"
              sx={{ width: "100%" }}
              variant="contained"
              color="secondary"
            >
              Pogledaj
            </Button>
          </Box>
        </SnippetCard>
      </Paper>

      <Paper elevation={3} className="card-paper">
        <SnippetCard coverColor="#212121">
          <Box className="pl-icon">
            <i class="devicon-dot-net-plain icon"></i>
          </Box>
          <Box className="card-content">
            <Box className="card-title">
              <h3>Komunalac</h3>
            </Box>
            <Typography className="card-description" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Button
              className="card-btn"
              sx={{ width: "100%" }}
              variant="contained"
              color="secondary"
            >
              Pogledaj
            </Button>
          </Box>
        </SnippetCard>
      </Paper>

      <Paper elevation={3} className="card-paper">
        <SnippetCard coverColor="#E25326">
          <Box className="pl-icon">
            <i class="devicon-css3-plain icon"></i>
          </Box>
          <Box className="card-content">
            <Box className="card-title">
              <h3>Kurac</h3>
            </Box>
            <Typography className="card-description" variant="body2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <Button
              className="card-btn"
              sx={{ width: "100%" }}
              variant="contained"
              color="secondary"
            >
              Pogledaj
            </Button>
          </Box>
        </SnippetCard>
      </Paper>
    </Box>
  );
}

export default CardGrid;
