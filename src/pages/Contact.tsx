import { Box, Container, Flex, Heading, Text, useColorModeValue, FormControl, FormLabel, Input, Textarea, Button, VStack, Icon } from '@chakra-ui/react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from 'react'
import { ContactFormData } from '../types'

const Contact = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.800', 'white')
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} gap={12}>
          <Box flex={1}>
            <Heading as="h1" size="2xl" mb={8} color={textColor}>
              Kontaktujte mě
            </Heading>
            <Text fontSize="xl" mb={8} color={textColor}>
              Máte zájem o spolupráci nebo máte nějaké otázky? Neváhejte mě kontaktovat.
            </Text>

            <VStack spacing={6} align="start" mb={8}>
              <Flex align="center">
                <Icon as={FaEnvelope} w={6} h={6} color="brand.500" mr={4} />
                <Text color={textColor}>jan.kubes@sportfuture.com</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaPhone} w={6} h={6} color="brand.500" mr={4} />
                <Text color={textColor}>+420 123 456 789</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} w={6} h={6} color="brand.500" mr={4} />
                <Text color={textColor}>Praha, Česká republika</Text>
              </Flex>
            </VStack>
          </Box>

          <Box flex={1}>
            <Box
              as="form"
              p={8}
              bg={bgColor}
              borderRadius="lg"
              boxShadow="sm"
              onSubmit={handleSubmit}
            >
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel color={textColor}>Jméno</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše jméno"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={textColor}>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Váš email"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color={textColor}>Telefon</FormLabel>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Váš telefon"
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel color={textColor}>Zpráva</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Vaše zpráva"
                    rows={6}
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="brand"
                  size="lg"
                  w="full"
                >
                  Odeslat zprávu
                </Button>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Contact 