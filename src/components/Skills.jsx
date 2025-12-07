import { Box, Typography, Grid, Card, CardContent, Chip } from '@mui/material';

const skillCategories = [
  { category: 'Frontend', skills: ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Material UI', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'PostgreSQL'] },
  { category: 'Tools & Others', skills: ['Git/GitHub', 'VS Code', 'npm/yarn', 'Vite', 'Responsive Design'] },
];

export default function Skills() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', my: 6, px: 3 }}>
      <Typography variant="h2" sx={{ fontSize: 36, color: '#01143D', mb: 3, fontWeight: 700, pb: 2, position: 'relative', textAlign: 'center' }}>
        Skills
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 4, bgcolor: '#43B3EF', borderRadius: 1 }} />
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skillCategories.map((category, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card sx={{ transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 3 }, mx: 'auto', bgcolor: '#FFFFFF' }}>
              <CardContent>
                <Typography variant="h4" sx={{ color: '#01143D', mb: 2, textAlign: 'center', fontWeight: 600 }}>{category.category}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                  {category.skills.map((skill) => <Chip key={skill} label={skill} color="primary" />)}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}