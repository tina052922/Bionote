import { Box, Typography, Card, CardContent } from '@mui/material';

export default function Experience() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', my: 6, px: 3 }}>
      <Typography variant="h2" sx={{ fontSize: 36, color: '#01143D', mb: 3, fontWeight: 700, pb: 2, position: 'relative', textAlign: 'center' }}>
        Professional Profile
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 4, bgcolor: '#43B3EF', borderRadius: 1 }} />
      </Typography>
      <Card sx={{ mb: 3, bgcolor: '#FFFFFF', boxShadow: 1, mx: 'auto', maxWidth: 1200, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" sx={{ color: '#01143D', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
            Experience
          </Typography>
          <Box sx={{ pl: 3, borderLeft: 3, borderColor: '#43B3EF', mb: 3, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: '#01143D', mb: 1, fontWeight: 600 }}>Student Developer & UI Designer</Typography>
            <Typography variant="body2" sx={{ color: '#3E4E65', mb: 1 }}>CTU Argao | 2023 - Present</Typography>
            <Typography variant="body1" sx={{ color: '#1E2A39' }}>
              Worked on multiple academic and group projects including schedulers, POS systems, and mobile/web UI layouts. Specialized in frontend development and clean UI designs.
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ bgcolor: '#FFFFFF', boxShadow: 1, mx: 'auto', maxWidth: 1200, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" sx={{ color: '#01143D', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
            Education
          </Typography>
          <Box sx={{ pl: 3, borderLeft: 3, borderColor: '#43B3EF', textAlign: 'center' }}>
            <Typography variant="h5" sx={{ color: '#01143D', mb: 1, fontWeight: 600 }}>Bachelor of Science in Information Technology</Typography>
            <Typography variant="body2" sx={{ color: '#3E4E65', mb: 1 }}>Cebu Technological University – Argao Campus</Typography>
            <Typography variant="body1" sx={{ color: '#1E2A39' }}>
              Currently an IT student specializing in system development and frontend UI/UX design.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}