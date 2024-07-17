import React from 'react';
import projects from '../data/projects.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (index) => {
    navigate(`/projects/${index}`);
  };

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <Card sx={{ maxWidth: 345 }} key={index} onClick={() => handleCardClick(index)}>
            <CardActionArea>
              <CardMedia component={"img"} height="140" image={project.image} alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
