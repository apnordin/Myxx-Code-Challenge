import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h4" component="h1">
          Welcome to the Myxx coding challenge.
        </Typography>
        <Typography variant="subtitle1" component="h1">
          We wish you the best of luck and hope you have fun! =)
        </Typography>
      </Box>
    </Container>
  );
}