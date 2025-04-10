import { Box, Container, Flex, Heading, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} gap={12}>
          <Box flex={1}>
            <Heading as="h1" size="2xl" mb={8} color={textColor}>
              O mně
            </Heading>
            <Text fontSize="xl" mb={8} color={textColor}>
              Jsem profesionální trenér specializující se na triatlon, atletiku a cyklistiku. Mým cílem je pomáhat sportovcům všech úrovní dosáhnout jejich plného potenciálu.
            </Text>
          </Box>
          <Box flex={1}>
            <Image
              src="/about-image.jpg"
              alt="Jan Kubeš - trenér"
              borderRadius="lg"
              objectFit="cover"
              w="100%"
              h="400px"
            />
          </Box>
        </Flex>

        <Box mt={16}>
          <Heading as="h2" size="xl" mb={8} color={textColor}>
            Profesní historie
          </Heading>
          <List spacing={4}>
            <ListItem>
              <Text color={textColor}>
                <strong>2015 - současnost:</strong> Nezávislý trenér triatlonu, atletiky a cyklistiky
              </Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>
                <strong>2012 - 2015:</strong> Trenér v klubu SportFuture
              </Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>
                <strong>2010 - 2012:</strong> Asistent trenéra na Fakultě tělesné výchovy a sportu
              </Text>
            </ListItem>
          </List>
        </Box>

        <Box mt={16}>
          <Heading as="h2" size="xl" mb={8} color={textColor}>
            Vzdělání a certifikace
          </Heading>
          <List spacing={4}>
            <ListItem>
              <Text color={textColor}>
                <strong>Magisterské studium:</strong> Fakulta tělesné výchovy a sportu, specializace Sportovní trénink
              </Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>
                <strong>Certifikace:</strong> ITU Level 2 Triathlon Coach
              </Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>
                <strong>Certifikace:</strong> IAAF Level 2 Athletics Coach
              </Text>
            </ListItem>
          </List>
        </Box>

        <Box mt={16}>
          <Heading as="h2" size="xl" mb={8} color={textColor}>
            Filosofie tréninku
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Věřím v individuální přístup ke každému sportovci. Každý máme jiné předpoklady, cíle a životní styl. Můj trénink je založen na:
          </Text>
          <List spacing={4} mt={4}>
            <ListItem>
              <Text color={textColor}>• Vědecky podložených metodách tréninku</Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>• Pravidelném monitoringu a analýze výkonnosti</Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>• Důrazu na prevenci zranění a dlouhodobou udržitelnost</Text>
            </ListItem>
            <ListItem>
              <Text color={textColor}>• Komplexním přístupu zahrnujícím výživu, regeneraci a psychickou přípravu</Text>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  )
}

export default About 