import { Typography, Box, Button, Avatar } from '@mui/material';
import Picture from '../Picture.jpg';

export default function Header() {
  return (
    <Box component="header" sx={{
      background: 'linear-gradient(135deg, #01143D 0%, #1B2B42 50%, #3E4E65 100%)',
      color: 'white',
      py: 10,
      textAlign: 'center',
      boxShadow: 3,
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', top: -100, right: -100 }} />
      <Box sx={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)', bottom: -50, left: -50 }} />
      <Box sx={{ maxWidth: 1200, mx: 'auto', position: 'relative', zIndex: 1, width: '100%', px: 3 }}>
        <Avatar
          src={Picture}
          alt="Profile"
          sx={{
            width: 140,
            height: 140,
            mx: 'auto',
            mb: 3,
            boxShadow: 4,
            border: '4px solid rgba(255, 255, 255, 0.3)'
          }}
        />
        <Typography variant="h1" sx={{ my: 2, fontSize: 42, fontWeight: 700, letterSpacing: 1 }}>
          Christina Joan M. Gelbolingo
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 300, opacity: 0.95, fontSize: 20 }}>
          BSIT Student | Web & App Developer | UI Designer
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
          {['GitHub', 'LinkedIn', 'Email'].map((link, idx) => (
            <Button key={idx} variant="outlined" sx={{ px: 4, py: 1, borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white', borderRadius: 25, transition: 'all 0.3s', backdropFilter: 'blur(10px)', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.25)', transform: 'translateY(-2px)' } }}>
              {link}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}