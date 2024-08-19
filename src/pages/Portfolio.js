import React from 'react';
import { Typography, Box, Card } from '@mui/material';
import { PencilVideo } from '../components/PencilVideo';
import { PinocchioVideo } from '../components/PinocchioVideo';
import { LoveStinksVideo } from '../components/LoveStinksVideo';
import './Portfolio.css';

export function Portfolio() {
  return (
    <Box>
      <Typography variant="h6" color="#00695c">
        Here are some of my very professional, serious, no-nonsense projects.
      </Typography>
      <Card className="card">
        <PencilVideo />
      </Card>
      <Card className="card">
        <PinocchioVideo />
      </Card>
      <Card className="card">
        <LoveStinksVideo />
      </Card>
    </Box>
  );
}
