import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

export default function SignUpForm() {
  return (
    <Card sx={{ maxWidth: 400, bgcolor: '#FFFFFF' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ color: '#01143D', fontWeight: 600 }}>
          Sign Up
        </Typography>
        <Box component="form">
          <TextField 
            fullWidth 
            label="Email" 
            name="email" 
            type="email" 
            margin="normal" 
          />
          <TextField 
            fullWidth 
            label="Password" 
            name="password" 
            type="password" 
            margin="normal" 
          />
          <Button 
            variant="contained" 
            type="submit" 
            fullWidth 
            sx={{ 
              mt: 2, 
              bgcolor: '#01143D', 
              '&:hover': { bgcolor: '#1B2B42' } 
            }}
          >
            Register
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

