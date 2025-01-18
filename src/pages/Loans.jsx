import React from 'react';
import { Box, Heading, Text, Button, Container, VStack, Image, SimpleGrid, Divider } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import loanImagePersonal from '../assets/personal.jpg'; // Example image, replace with your image
import loanImageBusiness from '../assets/loan.jpg'; // Example image, replace with your image

const loanDetails = {
    personalLoan: {
        title: 'Personal Loan',
        description:
            'A personal loan is a flexible, unsecured loan that lets you borrow a specific amount of money from a lender. You repay it in fixed installments over time, usually with a consistent interest rate. Since no collateral is needed, it’s a convenient option for covering personal expenses like debt consolidation, big purchases, or unexpected emergencies.',
        offerDetails: 'Get personal loans of up to Rs.40 lakh & above at attractive rates starting at 10.49% p.a. with flexible tenures of up to 6 years.',
        benefits: [
            'Low interest rates starting at 10.49% p.a.',
            'Flexible repayment tenures up to 6 years',
            'No collateral required',
            'Quick and easy application process',
        ],
        eligibility: [
            'Age between 21 and 60 years',
            'Stable income source',
            'Good credit score (650 or higher)',
            'Minimum income of Rs.30,000 annually',
        ],
        image: loanImagePersonal,
        amount: 'Up to Rs.40 lakh',
        duration: '12 to 72 months',
    },
    businessLoan: {
        title: 'Business Loan',
        description:
            'A business loan can help you expand your business, manage cash flow, or purchase equipment. Get the funding you need to grow your business.',
        offerDetails: 'Up to Rs.500,000 in funding at competitive rates for business needs.',
        benefits: [
            'Flexible repayment terms',
            'Up to Rs.500,000 in funding',
            'No collateral required',
            'Quick approval process',
        ],
        eligibility: [
            'At least 1 year in business',
            'Proof of consistent revenue',
            'Business credit score of 650 or higher',
            'Annual revenue above Rs.100,000',
        ],
        image: loanImageBusiness,
        amount: 'Up to Rs.500,000',
        duration: '12 to 84 months',
    },
};

const LoansForYou = () => {
    return (
        <Box bg="gray.50"  minHeight="100vh" py={10}>
            <Container px={0} maxW="full" color="gray.700" pb={16}>
         
                <Box w="100%" p={10} mx={0} bg="blue.50"  mb={16}>
                  <Heading textAlign="left" as="h1" size="xl" mb={8} color="primary.900">
                         Loan Tailored <Text as="span" color="accent.200">For You</Text>
                       </Heading>
                    <Text fontSize="lg" mb={8} fontWeight="light" color="gray.600">
                        Choose between personal or business loans, designed to meet your unique needs.
                    </Text>
                </Box>

                {/* Personal Loan Section */}
                <Box px={10} mb={16}>
                    <VStack spacing={6} align="center" mb={8}>
                        <Heading as="h3" textAlign="center" size="xl" color="primary.800">
                            {loanDetails.personalLoan.title}
                        </Heading>
                        <Text fontSize="md" color="gray.600"  mx="auto">
                            {loanDetails.personalLoan.description}
                        </Text>
                        <Text fontSize="lg" textAlign="center" color="accent.300" maxW="90%" fontWeight="bold" mt={6}>
                            {loanDetails.personalLoan.offerDetails}
                        </Text>
                        <Image
                            src={loanDetails.personalLoan.image}
                            alt="Personal Loan"
                            borderRadius="lg"
                            boxShadow="md"
                            width="100%"
                            maxWidth="800px"
                            mx="auto"
                            mt={8}
                        />
                    </VStack>

                    {/* Loan Details */}
                    <Box p={8} border="1px solid #e2e8f0" borderRadius="xl" bg="white" shadow="lg" mt={8}>
                        <Heading as="h4" size="md" color="orange.500" mb={4}>
                            Loan Details
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <Box>
                                <Text fontWeight="bold" color="gray.700" mb={2}>
                                    Loan Amount:
                                </Text>
                                <Text color="gray.600">{loanDetails.personalLoan.amount}</Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" color="gray.700" mb={2}>
                                    Duration:
                                </Text>
                                <Text color="gray.600">{loanDetails.personalLoan.duration}</Text>
                            </Box>
                        </SimpleGrid>

                        <Divider my={4} />

                        <Heading as="h5" size="md" color="primary.200" mb={4}>
                            Key Benefits:
                        </Heading>
                        <VStack spacing={2} align="start" pl={4} mb={4}>
                            {loanDetails.personalLoan.benefits.map((benefit, index) => (
                                <Text key={index} color="gray.600">
                                    - {benefit}
                                </Text>
                            ))}
                        </VStack>

                        <Heading as="h5" size="md" color="primary.200" mb={4}>
                            Eligibility Criteria:
                        </Heading>
                        <VStack spacing={2} align="start" pl={4}>
                            {loanDetails.personalLoan.eligibility.map((eligibility, index) => (
                                <Text key={index} color="gray.600">
                                    - {eligibility}
                                </Text>
                            ))}
                        </VStack>

                        {/* Apply Now Button */}
                        <Button
                            bg="primary.800"
                            variant="solid"
                            size="lg"
                            textColor="white"
                            rightIcon={<ChevronRightIcon />}
                            mt={6}
                         //   width="full"
                            _hover={{
                                bg: 'primary.200',
                                transform: 'scale(1.05)',
                            }}
                        >
                            Apply Now
                        </Button>
                    </Box>
                </Box>

                {/* Business Loan Section */}
                <Box px={10} mb={16}>
                    <VStack spacing={6} align="center" mb={8}>
                        <Heading as="h3" textAlign="center" size="xl" color="primary.800">
                            {loanDetails.businessLoan.title}
                        </Heading>
                        <Text fontSize="md" color="gray.600"  mx="auto">
                            {loanDetails.businessLoan.description}
                        </Text>
                        <Text fontSize="lg" color="accent.300" fontWeight="bold" mt={6}>
                            {loanDetails.businessLoan.offerDetails}
                        </Text>
                        <Image
                            src={loanDetails.businessLoan.image}
                            alt="Business Loan"
                            borderRadius="lg"
                            boxShadow="md"
                            width="100%"
                            maxWidth="800px"
                            mx="auto"
                            mt={8}
                        />
                    </VStack>

                    {/* Loan Details */}
                    <Box  p={8} border="1px solid #e2e8f0" borderRadius="xl" bg="white" shadow="lg" mt={8}>
                        <Heading as="h4" size="md" color="orange.500" mb={4}>
                            Loan Details
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                            <Box>
                                <Text fontWeight="bold" color="gray.700" mb={2}>
                                    Loan Amount:
                                </Text>
                                <Text color="gray.600">{loanDetails.businessLoan.amount}</Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold" color="gray.700" mb={2}>
                                    Duration:
                                </Text>
                                <Text color="gray.600">{loanDetails.businessLoan.duration}</Text>
                            </Box>
                        </SimpleGrid>

                        <Divider my={4} />

                        <Heading as="h5" size="md" color="primary.200" mb={4}>
                            Key Benefits:
                        </Heading>
                        <VStack spacing={2} align="start" pl={4} mb={4}>
                            {loanDetails.businessLoan.benefits.map((benefit, index) => (
                                <Text key={index} color="gray.600">
                                    - {benefit}
                                </Text>
                            ))}
                        </VStack>

                        <Heading as="h5" size="md" color="primary.200" mb={4}>
                            Eligibility Criteria:
                        </Heading>
                        <VStack spacing={2} align="start" pl={4}>
                            {loanDetails.businessLoan.eligibility.map((eligibility, index) => (
                                <Text key={index} color="gray.600">
                                    - {eligibility}
                                </Text>
                            ))}
                        </VStack>

                        {/* Apply Now Button */}
                        <Button
                            bg="primary.800"
                            variant="solid"
                            size="lg"
                            textColor="white"
                            rightIcon={<ChevronRightIcon />}
                            mt={6}
                            //   width="full"
                            _hover={{
                                bg: 'primary.200',
                                transform: 'scale(1.05)',
                            }}
                        >
                            Apply Now
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default LoansForYou;
