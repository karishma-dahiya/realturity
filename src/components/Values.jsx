import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import satisfactionIcon from '../assets/satisfaction.png'
import integrityIcon from '../assets/integrityIcon.png'
import innovationIcon from '../assets/innovation.png'

const Values = () => {
    return (
      <>
     
      <Box
          p={8}
          my={12}
          bgGradient="linear(to-b, primary.700,primary.100)"
          borderRadius="lg"
          boxShadow="xl"
      >
          <Box mb={12}>
              <Heading
                  textColor="white"
                  as="h2"
                  size="xl"
                  textAlign="center"
                  fontWeight="bold"
              >
                  Our Values
              </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <Box
                  textAlign="center"
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  transition="transform 0.2s ease, box-shadow 0.2s ease"
                        _hover={{
                            //   transform: "scale(1.05)",
                            boxShadow: "2xl",
                        }}
              >
                  <Image
                      src={integrityIcon}
                      alt="Integrity Icon"
                      boxSize="80px"
                      mx="auto"
                      mb={4}
                  />
                  <Heading size="md" mb={2}>Integrity</Heading>
                  <Text fontSize="md" color="gray.600">
                      We uphold honesty and transparency in all our dealings.
                  </Text>
              </Box>
              <Box
                  textAlign="center"
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  transition="transform 0.2s ease, box-shadow 0.2s ease"
                  _hover={{
                   //   transform: "scale(1.05)",
                      boxShadow: "2xl",
                  }}
              >
                  <Image
                      src={satisfactionIcon}
                      alt="Customer Satisfaction Icon"
                      boxSize="80px"
                      mx="auto"
                      mb={4}
                  />
                  <Heading size="md" mb={2}>Customer Satisfaction</Heading>
                  <Text fontSize="md" color="gray.600">
                      Our customers are at the heart of everything we do.
                  </Text>
              </Box>
              <Box
                  textAlign="center"
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  transition="transform 0.2s ease, box-shadow 0.2s ease"
                        _hover={{
                            //   transform: "scale(1.05)",
                            boxShadow: "2xl",
                        }}
              >
                  <Image
                      src={innovationIcon}
                      alt="Innovation Icon"
                      boxSize="80px"
                      mx="auto"
                      mb={4}
                  />
                  <Heading size="md" mb={2}>Innovation</Heading>
                  <Text fontSize="md" color="gray.600">
                      We embrace technology to provide faster and smarter solutions.
                  </Text>
              </Box>
          </SimpleGrid>
      </Box>
      </>
  )
}

export default Values