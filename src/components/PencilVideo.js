import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import pencil from '../images/pencil.mp4';
import './Video.css';

export function PencilVideo() {
  return (
    <Box sx={{ textAlign: 'center', margin: '20px' }}>
      <Link
        href="https://github.com/kwashl/pencil-animation"
        target="_blank"
        rel="noopener"
        sx={{ textDecoration: 'none', color: '#000' }}
      >
        <Typography
          variant="h5"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
          }}
        >
          Pencil Animation
          <GitHubIcon sx={{ marginLeft: 1 }} />
        </Typography>
      </Link>

      <video className="video" controls>
        <source src={pencil} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
