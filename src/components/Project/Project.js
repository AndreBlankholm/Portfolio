import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Projects.css";

//imports props from portfolio

function Project(props) {
  const { project, onCardClicked } = props;

  return (
    <section className="project-page">
      <div
        className="project-container"
        onClick={() => onCardClicked(project.id)}
      >
        <Card sx={{ maxWidth: 245 }} className="row">
          <CardActionArea>
            <CardMedia
              className="color"
              component="img"
              height="140"
              image={require(`../../assests/images/img_folder/${project.img}`)}
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
      </div>
    </section>
  );
}

export default Project;
