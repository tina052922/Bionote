import { Box, Typography } from '@mui/material';

export default function Car() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', textAlign: 'center', py: 2 }}>
      <Typography variant="h2" sx={{ color: '#01143D', fontWeight: 700 }}>Hi, I am a Car!</Typography>
    </Box>
  );
}