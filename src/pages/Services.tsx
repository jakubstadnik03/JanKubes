import { Box, Container, Heading, Text, useColorModeValue, SimpleGrid, Icon } from '@chakra-ui/react'
import { FaRunning, FaBicycle, FaSwimmer, FaLaptop, FaFlask, FaUsers } from 'react-icons/fa'
import { Service } from '../types'

const ServiceCard = ({ title, description, icon }: Service) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box
      p={6}
      bg={bgColor}
      borderRadius="lg"
      boxShadow="sm"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s' }}
    >
      <Icon as={icon} w={10} h={10} color="brand.500" mb={4} />
      <Heading as="h3" size="lg" mb={4} color={textColor}>
        {title}
      </Heading>
      <Text color={textColor}>{description}</Text>
    </Box>
  )
}

const Services = () => {
  const textColor = useColorModeValue('gray.800', 'white')

  const services: Service[] = [
    {
      title: 'Individuální tréninky',
      description: 'Šité na míru vašim potřebám a cílům. Zahrnuje běh, triatlon a cyklistiku.',
      icon: FaRunning,
    },
    {
      title: 'Online coaching',
      description: 'Profesionální vedení na dálku s pravidelnými konzultacemi a analýzou tréninku.',
      icon: FaLaptop,
    },
    {
      title: 'Fyziologické testování',
      description: 'Laktátové testy, VO₂ max a HRV analýza pro přesné nastavení tréninku.',
      icon: FaFlask,
    },
    {
      title: 'Konzultace pro kluby',
      description: 'Vývoj tréninkových programů a metodik pro sportovní kluby.',
      icon: FaUsers,
    },
    {
      title: 'Triatlon tréninky',
      description: 'Komplexní příprava na triatlonové závody všech vzdáleností.',
      icon: FaSwimmer,
    },
    {
      title: 'Cyklistické tréninky',
      description: 'Specializované tréninky pro silniční i horskou cyklistiku.',
      icon: FaBicycle,
    },
  ]

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading as="h1" size="2xl" mb={4} color={textColor}>
            Moje služby
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Nabízím širokou škálu tréninkových a konzultačních služeb pro sportovce všech úrovní
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </SimpleGrid>

        <Box mt={16} textAlign="center">
          <Heading as="h2" size="xl" mb={8} color={textColor}>
            Ceník služeb
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Ceny jsou individuální a závisí na typu a rozsahu služeb. Pro konkrétní cenovou nabídku mě prosím kontaktujte.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Services 