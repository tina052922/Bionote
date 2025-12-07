import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

export default function FormContainer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 2, width: '100%', mx: 'auto' }}>
      <Card sx={{ maxWidth: 400, bgcolor: '#FFFFFF' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#01143D', fontWeight: 600 }}>Login</Typography>
          <Box component="form">
            <TextField fullWidth label="Username" name="username" margin="normal" />
            <TextField fullWidth type="password" label="Password" name="password" margin="normal" />
            <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, bgcolor: '#01143D', '&:hover': { bgcolor: '#1B2B42' } }}>Login</Button>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 400, bgcolor: '#FFFFFF' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ color: '#01143D', fontWeight: 600 }}>Sign Up</Typography>
          <Box component="form">
            <TextField fullWidth label="Email" name="email" type="email" margin="normal" />
            <TextField fullWidth label="Password" name="password" type="password" margin="normal" />
            <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, bgcolor: '#01143D', '&:hover': { bgcolor: '#1B2B42' } }}>Register</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}