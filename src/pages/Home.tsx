import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box>
      {/* Hero Section */}
      <Box bg={bgColor} py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4} color={textColor}>
                Profesionální trénink pro vaše sportovní cíle
              </Heading>
              <Text fontSize="xl" mb={8} color={textColor}>
                Specializuji se na trénink triatlonu, atletiky a cyklistiky. Pomohu vám dosáhnout vašich sportovních cílů s individuálním přístupem a odbornými znalostmi.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <Button as={RouterLink} to="/services" colorScheme="brand" size="lg">
                  Nabídka služeb
                </Button>
                <Button as={RouterLink} to="/contact" variant="outline" size="lg">
                  Kontaktujte mě
                </Button>
              </Stack>
            </Box>
            <Box flex={1}>
              <Image
                src="/hero-image.jpg"
                alt="Jan Kubeš - trenér"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h={{ base: '300px', md: '400px' }}
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Featured Services */}
      <Box py={20}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" textAlign="center" mb={12} color={textColor}>
            Moje služby
          </Heading>
          <Flex direction={{ base: 'column', md: 'row' }} gap={8}>
            <Box flex={1} p={6} bg={bgColor} borderRadius="lg" boxShadow="sm">
              <Heading as="h3" size="lg" mb={4} color={textColor}>
                Individuální tréninky
              </Heading>
              <Text color={textColor}>
                Šité na míru vašim potřebám a cílům. Zahrnuje běh, triatlon a cyklistiku.
              </Text>
            </Box>
            <Box flex={1} p={6} bg={bgColor} borderRadius="lg" boxShadow="sm">
              <Heading as="h3" size="lg" mb={4} color={textColor}>
                Fyziologické testování
              </Heading>
              <Text color={textColor}>
                Laktátové testy, VO₂ max a HRV analýza pro přesné nastavení tréninku.
              </Text>
            </Box>
            <Box flex={1} p={6} bg={bgColor} borderRadius="lg" boxShadow="sm">
              <Heading as="h3" size="lg" mb={4} color={textColor}>
                Online coaching
              </Heading>
              <Text color={textColor}>
                Profesionální vedení na dálku s pravidelnými konzultacemi a analýzou tréninku.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 