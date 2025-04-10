import { Box, Container, Flex, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

const MainLayout = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Box as="header" bg={bgColor} py={4} boxShadow="sm">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }}>
                Jan Kubeš
              </Link>
            </Heading>
            <Flex as="nav" gap={6}>
              <Link as={RouterLink} to="/about" color={color}>
                O mně
              </Link>
              <Link as={RouterLink} to="/services" color={color}>
                Služby
              </Link>
              <Link as={RouterLink} to="/blog" color={color}>
                Blog
              </Link>
              <Link as={RouterLink} to="/contact" color={color}>
                Kontakt
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Box as="main" flex="1">
        <Outlet />
      </Box>

      <Box as="footer" bg={bgColor} py={6} mt="auto">
        <Container maxW="container.xl">
          <Flex justify="center" color={color}>
            © {new Date().getFullYear()} Jan Kubeš. Všechna práva vyhrazena.
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default MainLayout 