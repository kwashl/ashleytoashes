import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import either_or from '../pdfs/either_or.pdf';

export function WritingSamples() {
  const files = [
    {
      title: "Kierkegaard's Either/Or",
      description:
        'An exploration of the seminal philosophical concept of Either/Or conceived by Kierkegaard, the father of existentialism.',
      pdfUrl: either_or,
    },
  ];

  const handleDownload = (url, filename) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Typography variant="h6" color="#00695c">
        Here are some of my writing samples.
      </Typography>
      <Grid container spacing={3} padding={5}>
        {files.map((file, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {file.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {file.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() =>
                    handleDownload(file.pdfUrl, `${file.title}.pdf`)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WritingSamples;
