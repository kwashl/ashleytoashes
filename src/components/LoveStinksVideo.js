import React from 'react';
import { Typography, Box } from '@mui/material';
import loveStinks from '../images/love_stinks.mp4';
import './Video.css';

export function LoveStinksVideo() {
  return (
    <Box sx={{ textAlign: 'center', margin: '20px' }}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: 2,
        }}
      >
        Love Stinks
      </Typography>

      <video className="video" controls>
        <source src={loveStinks} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        This was a Film Studies project that I worked on in high school, and
        marked my first foray into stop-motion animation. Although the frame
        rate is quite low, resulting in a noticeably choppy video, it served as
        a valuable introduction to animation, and stop-motion remains one of my
        favourite film mediums.
      </Typography>
    </Box>
  );
}
