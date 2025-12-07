import { Box } from '@mui/material';
import Car from './components/Car';
import FormContainer from './components/FormContainer';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <Box sx={{ bgcolor: '#E8ECEF', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <Car />
      <FormContainer />
      <Header />
      <About />
      <Skills />
      <Interests />
      <Experience />
      <Projects />
      <Footer />
    </Box>
  );
}