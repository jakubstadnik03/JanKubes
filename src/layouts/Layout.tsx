import { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <SportsHandballIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jan Kubeš
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Domů
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            O mně
          </Button>
          <Button color="inherit" component={RouterLink} to="/services">
            Služby
          </Button>
          <Button color="inherit" component={RouterLink} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={RouterLink} to="/events">
            Akce
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Kontakt
          </Button>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>

      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3 }}>
        <Container>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Jan Kubeš - Všechna práva vyhrazena
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout; 