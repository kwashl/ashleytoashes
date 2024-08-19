import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import barleybrown from '../images/barleybrown.png';
import './About.css';

export function About() {
  return (
    <Box>
      <Typography variant="h5" color="#3CCBC7">
        Hello! My name is Ashley.
      </Typography>
      <Typography variant="h6" color="#00695c">
        Welcome to my very professional, serious, no-nonsense website.
      </Typography>

      <Typography className="description">
        I hold a Bachelor of Science (Major in Computer Science) from the
        University of British Columbia and am currently a software engineer
        based in Vancouver... but I am so much more than that. I am also a bread
        enthusiast (both in terms of baking and eating), the world's biggest
        chiweenie fan and an avid collector of Peanuts memorabilia. My life
        aspirations include storytelling, adopting an army of dogs, serving as a
        rural juror, and having everyone I meet like me (though I can settle for
        being okay with those who may not).
      </Typography>
      <img className="barleybrown" src={barleybrown} alt="barleybrown" />
      <Typography variant="body1" className="websiteDescription">
        This{' '}
        <Link
          href="https://github.com/kwashl/ashleytoashes"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#3CCBC7',
          }}
        >
          website
          <GitHubIcon sx={{ verticalAlign: 'middle', marginLeft: '5px' }} />
        </Link>{' '}
        features interactive elements and animations built with React and hosted
        on GitHub Pages.
      </Typography>
    </Box>
  );
}
