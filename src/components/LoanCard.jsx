import { Box, Button, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineFileText, AiOutlineThunderbolt, AiOutlineWallet } from 'react-icons/ai'
import { FaBolt, FaClipboardCheck, FaClock, FaMoneyCheckAlt, FaWallet } from 'react-icons/fa'

const LoanCard = () => {
  return (
      <Box my={6} p={4} bg="background.100">
    
      <Heading textAlign="center" as="h1" size="xl" mb={8} color="primary.900">
        Get A Loan In <Text as="span" color="accent.200">3 Simple Steps</Text>
      </Heading>
      <Flex  my={12} justify="space-around" wrap="wrap" gap={6}>
        <Box
          py={8}
          px={14}
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          width={["100%", "48%", "22%"]}
          transition="all 0.3s"
          _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        >
          <Icon as={AiOutlineFileText} boxSize={14} color="primary.100" mb={4} />
          <Text   fontSize="lg" fontWeight="semibold" color="primary.800">
            Apply with Ease
          </Text>
        </Box>

        {/* Card 2: Instant Funds Decision */}
        <Box
          py={8}
          px={14}
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          width={["100%", "48%", "22%"]}
          transition="all 0.3s"
          _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        >
          <Icon as={AiOutlineThunderbolt} boxSize={14} color="primary.100" mb={4} />
          <Text fontSize="lg" fontWeight="semibold" color="primary.800">
            Instant Funds Decision
          </Text>
        </Box>

        {/* Card 3: Get Funds in Your Account */}
        <Box
          py={8}
          px={14}
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          textAlign="center"
          width={["100%", "48%", "22%"]}
          transition="all 0.3s"
          _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
        >
          <Icon as={AiOutlineWallet} boxSize={14} color="primary.100" mb={4} />
          <Text fontSize="xl" fontWeight="semibold" color="primary.800">
            Get funds in your account
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" justifyItems="center">

        <Button
          bg="primary.800"
          alignSelf="center"
          color="white"
          fontSize={["md", "lg", "xl"]}  
       //   px={["8", "10", "12"]}  
         // py={["3", "4", "5"]}  
          borderRadius="full" 
          p={6}
        //  width={["80%", "70%", "60%"]}  
          boxShadow="lg"  
          _hover={{ bg: "primary.600" }}  
          transition="all 0.3s ease"  
        >
          Apply Now
        </Button>
      </Flex>
    </Box>
  )
}

export default LoanCard