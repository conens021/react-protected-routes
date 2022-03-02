import Tags from "./Tags";
import {  Paper, Typography } from "@mui/material";

function Heading({id}) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "0.5em 1em",
        display: "flex",
        flexDirection: "column",
        rowGap: "1em",
      }}
    >
      <Typography variant="h4" component="h1">
        Snippet {id}
      </Typography>
      <Tags />

      <Typography variant="body2" component="p" sx={{ paddingRight: "2em" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </Paper>
  );
}

export default Heading;
