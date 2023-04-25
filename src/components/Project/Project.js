import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


//imports props from portfolio


function Project(props) {


  const {project} = props;

  return (
    <section className="">
     
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require(`../../assests/images/img_folder/${project.img_folder}`)}
          alt={`${project.alt}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <div>{project.title}</div>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>{project.description}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </section>

  );
}

export default Project;
