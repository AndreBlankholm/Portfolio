import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Projects.css";

//imports props from portfolio

function Project(props) {
  const { project } = props;

  return (
    <section className="project-container">
      <Card sx={{ maxWidth: 395 }} className="row">
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={require(`../../assests/images/img_folder/${project.img_folder}`)}
            alt={`${project.alt}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body3" color="text.primary">
             {project.description} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </section>
  );
}

export default Project;
