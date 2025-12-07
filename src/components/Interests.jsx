import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const interests = [
  { title: 'Dancing', desc: 'Street dance, hip-hop, and cultural dance' },
  { title: 'Programming', desc: 'Building apps and solving logic problems' },
  { title: 'Designing', desc: 'UI/UX layouts and app interface visuals' },
  { title: 'Learning', desc: 'Improving skills and exploring new tech' },
];

export default function Interests() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', my: 6, px: 3 }}>
      <Typography variant="h2" sx={{ fontSize: 36, color: '#01143D', mb: 3, fontWeight: 700, pb: 2, position: 'relative', textAlign: 'center' }}>
        Interests
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 4, bgcolor: '#43B3EF', borderRadius: 1 }} />
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {interests.map((interest, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ background: 'linear-gradient(135deg, #01143D 0%, #1B2B42 100%)', color: 'white', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' }, mx: 'auto' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{interest.title}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>{interest.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}