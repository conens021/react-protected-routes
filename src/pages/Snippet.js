import { Box,  Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import Heading from "../components/Dashboard/Snippet/Heading/Heading";
import CodeStep from "../components/Dashboard/Snippet/Step/CodeStep";

function Snippet() {
  const { id } = useParams();
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "1em" }}>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1em" }}>
        <Heading id={id} />
        <CodeStep />
        <CodeStep />
        <CodeStep />
        <CodeStep />
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',rowGap:'1em'}}>
          <Paper><h3>Dependencies</h3></Paper>
          <Paper ><h3>Notes</h3></Paper>

      </Box>
    </Box>
  );
}

export default Snippet;
