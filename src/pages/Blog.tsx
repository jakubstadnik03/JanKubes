import { Box, Container, Flex, Heading, Text, useColorModeValue, SimpleGrid, Button, Icon } from '@chakra-ui/react'
import { FaCalendarAlt, FaTags } from 'react-icons/fa'
import { BlogPost } from '../types'

const BlogPostCard = ({ title, excerpt, date, category, imageUrl }: BlogPost) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s' }}
    >
      <Box h="200px" bgImage={`url(${imageUrl})`} bgSize="cover" position="center" />
      <Box p={6}>
        <Flex mb={4} gap={2}>
          <Button size="sm" colorScheme="brand" variant="outline">
            {category}
          </Button>
        </Flex>
        <Heading as="h3" size="lg" mb={4} color={textColor}>
          {title}
        </Heading>
        <Text color={textColor} mb={4}>
          {excerpt}
        </Text>
        <Flex align="center" color="gray.500">
          <Icon as={FaCalendarAlt} mr={2} />
          <Text fontSize="sm">{date}</Text>
        </Flex>
      </Box>
    </Box>
  )
}

const Blog = () => {
  const textColor = useColorModeValue('gray.800', 'white')

  const blogPosts: BlogPost[] = [
    {
      title: 'Základy tréninku VO₂ max',
      excerpt: 'Pochopení a trénink maximální spotřeby kyslíku je klíčové pro výkonnost ve vytrvalostních sportech.',
      date: '15. března 2024',
      category: 'Trénink',
      imageUrl: '/blog/vo2max.jpg',
    },
    {
      title: 'Příprava na první Ironman',
      excerpt: 'Kompletní průvodce přípravou na váš první Ironman závod, včetně tréninkového plánu a výživových doporučení.',
      date: '10. března 2024',
      category: 'Triatlon',
      imageUrl: '/blog/ironman.jpg',
    },
    {
      title: 'HRV analýza v praxi',
      excerpt: 'Jak využít variabilitu srdečního rytmu pro optimalizaci tréninku a prevenci přetrénování.',
      date: '5. března 2024',
      category: 'Věda',
      imageUrl: '/blog/hrv.jpg',
    },
  ]

  const categories = ['Vše', 'Trénink', 'Triatlon', 'Věda', 'Výživa']

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading as="h1" size="2xl" mb={4} color={textColor}>
            Blog
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Články o tréninku, sportovní vědě a zkušenostech
          </Text>
        </Box>

        <Flex mb={8} gap={4} wrap="wrap" justify="center">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              colorScheme="brand"
              leftIcon={<Icon as={FaTags} />}
            >
              {category}
            </Button>
          ))}
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              {...post}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Blog 