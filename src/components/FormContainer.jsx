import { Box } from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

export default function FormContainer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, p: 2, width: '100%', mx: 'auto' }}>
      <LoginForm />
      <SignUpForm />
    </Box>
  );
}