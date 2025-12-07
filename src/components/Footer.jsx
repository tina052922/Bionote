import { Typography, Box } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{
      background: 'linear-gradient(135deg, #01143D 0%, #1B2B42 50%, #3E4E65 100%)',
      color: 'white',
      py: 4,
      mt: 8,
      textAlign: 'center',
      position: 'relative',
      width: '100%'
    }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', width: '100%', px: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Let's Connect
          </Typography>
          <Typography sx={{ fontSize: 16, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Feel free to reach out for collaborations or projects!
          </Typography>
        </Box>
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', pt: 3, mt: 3 }}>
          <Typography sx={{ mb: 1, fontSize: 15 }}>
            © {currentYear} Christina Joan M. Gelbolingo. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: 14, opacity: 0.8 }}>
            Built with React | Designed with passion
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}