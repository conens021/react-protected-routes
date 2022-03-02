import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function AppCard() {
  const handleBtnLink = () => {};
  return (
    <Card className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/app/dashboard/snippet/1'}>
          <Button color="secondary" variant="contained" size="small">
            Go To Snippet
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default AppCard;
