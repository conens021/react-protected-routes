import { Paper, Typography } from "@mui/material";
import { CodeBlock, dracula } from "react-code-blocks";

function CodeStep() {
  const code = `
    import CardGrid from "../components/Dashboard/CardGrid/CardGrid";
    import CategoriesBar from "../components/Dashboard/CategoriesBar/CategoriesBar";
    
    function Dashboard() {
      return (
        <>
          <CategoriesBar />
          <h2>Recently Added</h2>
          <CardGrid />
        </>
      );
    }
    
    export default Dashboard;
    
    `;
  return (
    <Paper sx={{ padding: "0 1em" }} elevation={3}>
      <h3>Step 1</h3>
      <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <CodeBlock
        text={code}
        language={"jsx"}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={dracula}
      />
    </Paper>
  );
}

export default CodeStep;
