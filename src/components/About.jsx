import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', my: 6, px: 3 }}>
      <Typography variant="h2" sx={{ fontSize: 36, color: '#01143D', mb: 3, fontWeight: 700, pb: 2, position: 'relative', textAlign: 'center' }}>
        About Me
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 4, bgcolor: '#43B3EF', borderRadius: 1 }} />
      </Typography>
      <Box sx={{
        bgcolor: '#FFFFFF',
        p: 4,
        borderRadius: 3,
        boxShadow: 1,
        border: '1px solid rgba(1, 20, 61, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        mx: 'auto',
        maxWidth: 1200,
        width: '100%'
      }}>
        <Typography variant="body1" sx={{ fontSize: 17, lineHeight: 1.9, color: '#1E2A39', textAlign: 'center' }}>
          I am an aspiring IT professional and a passionate web and app developer. I specialize in
          creating clean, responsive, and user-friendly applications. I enjoy learning new
          technologies, solving problems, and building digital projects that people can use in real life.
          I am also experienced with UI design, database handling, and system structuring. My goal is
          to grow as a developer and eventually work abroad to support my family.
        </Typography>
      </Box>
    </Box>
  );
}