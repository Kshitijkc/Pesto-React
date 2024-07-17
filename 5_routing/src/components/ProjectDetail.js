// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import Typography from '@mui/material/Typography';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <Typography variant="h6">Project not found</Typography>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.about.description}</p>
    </div>
  );
};

export default ProjectDetail;
