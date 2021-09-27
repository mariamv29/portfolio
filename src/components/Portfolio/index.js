import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhotoList from "../PhotoList";

function Portfolio(props) {
  const { challenges = [] } = props;


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia>
        <PhotoList />
      </CardMedia>
      <CardContent>
        {challenges.map((challenge) => (
          <Typography
            key={challenge.name}
            gutterBottom
            variant="h5"
          >
            {challenge.name}
        
          </Typography>
        ))}
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small">GitHub</Button>
      </CardActions>
    </Card>
  );
}

export default Portfolio;
