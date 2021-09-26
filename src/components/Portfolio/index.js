import React  from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import PhotoList from "../PhotoList";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Portfolio() {
  const projects = ([
    {
      name: "projects",
      description:
        "Recent projects with respective github and deployment links.",
    },
  ]);

  // const [setCurrentProjects] = useState(projects[0]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div className="flip-card">
        <div className="image-container">
          <div className="flip-card-front">
            <CardMedia height="140">
              <PhotoList />
            </CardMedia>
          </div>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Taskinator{projects.name}
          </Typography>
            <div className="flip-card-back"></div>
        </CardContent>
      </div>
    </Card>
  );
}

export default Portfolio;
