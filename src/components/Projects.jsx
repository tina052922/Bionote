import { Box, Typography, Grid, Card, CardContent, Chip } from '@mui/material';

const projects = [
  { title: 'GSeek Official Website', description: 'A website showcasing the GSeek dance group, events, announcements, and member profiles.', tech: ['HTML', 'CSS', 'JavaScript'], type: 'Group Project', color: '#01143D' },
  { title: 'Class Program Scheduler & Room Utilization Tracker', description: 'A system for admins, teachers, and students to manage class schedules, room assignments, and real-time updates.', tech: ['PyQt5', 'Python', 'SQLite'], type: 'Academic Project', color: '#1B2B42' },
  { title: 'Spendy – Expense Tracker App', description: 'An income and expense management web app with auto-saving logic, categories, and reporting.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'], type: 'Group Project', color: '#3E4E65' },
];

export default function Projects() {
  return (
    <Box sx={{ width: '100%', mx: 'auto', my: 6, px: 3 }}>
      <Typography variant="h2" sx={{ fontSize: 36, color: '#01143D', mb: 3, fontWeight: 700, pb: 2, position: 'relative', textAlign: 'center' }}>
        Featured Projects
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 4, bgcolor: '#43B3EF', borderRadius: 1 }} />
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card sx={{ transition: 'all 0.3s', '&:hover': { transform: 'translateY(-8px)' }, mx: 'auto', bgcolor: '#FFFFFF' }}>
              <CardContent sx={{ position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: 100, height: 100, borderRadius: '50%', background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`, transform: 'translate(30%, -30%)' }} />
                <Chip label={project.type} sx={{ mb: 2, bgcolor: project.color, color: 'white', fontWeight: 600 }} />
                <Typography variant="h5" sx={{ color: '#01143D', mb: 1, fontWeight: 600 }}>{project.title}</Typography>
                <Typography variant="body1" sx={{ mb: 2, color: '#1E2A39' }}>{project.description}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                  {project.tech.map((t) => <Chip key={t} label={t} variant="outlined" sx={{ borderColor: '#01143D', color: '#01143D' }} />)}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}