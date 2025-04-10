import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Workshop: Základy běhu',
    date: '25. března 2024',
    time: '10:00 - 14:00',
    location: 'Tréninkové centrum, Praha',
    type: 'Workshop',
    price: '1 200 Kč',
    description: 'Naučte se správnou techniku běhu a základy tréninku pro začátečníky.',
    image: '/images/events/running-workshop.jpg'
  },
  {
    id: 2,
    title: 'Tréninkový kemp: Příprava na Ironman',
    date: '15. - 17. dubna 2024',
    time: 'Celodenní',
    location: 'Sportovní centrum, Špindlerův Mlýn',
    type: 'Kemp',
    price: '4 500 Kč',
    description: 'Intenzivní víkendový kemp zaměřený na přípravu na Ironman závod.',
    image: '/images/events/ironman-camp.jpg'
  },
  {
    id: 3,
    title: 'Fyziologické testování',
    date: '5. května 2024',
    time: '9:00 - 17:00',
    location: 'Laboratoř, Brno',
    type: 'Testování',
    price: '1 500 Kč',
    description: 'Komplexní fyziologické testování včetně laktátových testů a VO₂ max.',
    image: '/images/events/testing.jpg'
  },
  {
    id: 4,
    title: 'Seminář: Výživa ve sportu',
    date: '12. května 2024',
    time: '14:00 - 18:00',
    location: 'Konferenční sál, Praha',
    type: 'Seminář',
    price: '800 Kč',
    description: 'Praktické rady a tipy pro správnou výživu při tréninku a závodech.',
    image: '/images/events/nutrition-seminar.jpg'
  }
];

const Events = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Kalendář akcí
            </Typography>
            <Typography variant="h5">
              Připojte se k našim tréninkům, workshopům a seminářům
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Events Grid */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid key={event.id} columns={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {event.title}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={event.type}
                        color="primary"
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={event.price}
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography color="text.secondary" gutterBottom>
                      {event.date} • {event.time}
                    </Typography>
                    <Typography color="text.secondary" paragraph>
                      {event.location}
                    </Typography>
                    <Typography paragraph>
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="large"
                      color="primary"
                      component={RouterLink}
                      to={`/events/${event.id}`}
                    >
                      Více informací
                    </Button>
                    <Button
                      size="large"
                      color="secondary"
                      component={RouterLink}
                      to="/contact"
                    >
                      Přihlásit se
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events; 