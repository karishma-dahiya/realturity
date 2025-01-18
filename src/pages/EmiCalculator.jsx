import React, { useEffect, useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    Stack,
    VStack,
    useBreakpointValue,
    Flex,
    Container,
    Image,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb
} from '@chakra-ui/react';
import calculator from '../assets/calculator.jpg'
import logo from '../assets/logo.jpg'
import LoanCard from '../components/LoanCard';

const EmiCalculator = () => {

    const [loanAmount, setLoanAmount] = useState(1000000);
    const [interestRate, setInterestRate] = useState('12');
    const [loanTerm, setLoanTerm] = useState('5');
    const [emi, setEmi] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);

    const calculateEmi = () => {
        if (!loanAmount || !interestRate || !loanTerm) return;

        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 12 / 100;
        const months = parseInt(loanTerm) * 12;

        const emiAmount =
            (principal * rate * Math.pow(1 + rate, months)) /
            (Math.pow(1 + rate, months) - 1);

        const total = emiAmount * months;

        setEmi(emiAmount.toFixed(2));
        setTotalPayment(total.toFixed(2));
    };

    useEffect(() => {
        calculateEmi();
    }, [loanAmount, interestRate, loanTerm]);

    return (
        <Box p={4} bg="background.100">
            {/* <Heading fontWeight="normal" as="h1" textAlign="center" color="primary.200">
                Use our EMI calculator to plan your finances better.
            </Heading> */}
            <Flex
               // maxW="1200px"
              //  mt={6}
                 mx="auto"
                 my={10}
              //  p={8}
                borderRadius="xl"
                boxShadow="lg"
                overflow="hidden"
                position="relative"
                bg="white"
              
            >
                {/* Left Content */}
                <Box flex="1" p={8}>
                    <Heading as="h1" size="2xl" mb={4} color="primary.900">
                        Calculate your <Text as="span" color="accent.200">EMI</Text>
                    </Heading>
                    <Text fontSize="lg" color="primary.800">
                        Use our EMI calculator to plan your finances better.
                    </Text>
                    <VStack
                        spacing={6}
                        align="stretch"
                        maxWidth="600px"
                       
                        p={8}
                      
                    >
                      
                        <FormControl id="loanAmount">
                            <Flex justify="space-between" align="center" mb={4}>
                                <FormLabel fontWeight="semibold" fontSize="lg" color="gray.700" htmlFor="loanAmount">Loan Amount</FormLabel>
                                <Box py={2} px={4} borderRadius="full" border="1px solid" borderColor="gray.300">
                                    <Text fontSize="lg" align="center">₹{loanAmount}</Text>
                                </Box>
                            </Flex>
                            <Slider
                                value={loanAmount}
                                min={100000}
                                max={20000000}
                                step={100000}
                                onChange={(value) => setLoanAmount(value)}
                                focusThumbOnChange={false}
                               // mb={4}
                                height="16px" 
                            >
                                <SliderTrack boxSize={2} boxShadow="2xl" bg="gray.600"> 
                                    <SliderFilledTrack bg="primary.900" /> 
                                </SliderTrack>
                                <SliderThumb boxShadow="lg" boxSize={6} bg="primary.200"  /> 
                            </Slider>
                            <Flex textColor="gray.200" justify="space-between" color="gray.200">
                                <Text  textColor="gray.400" fontSize="md">1 Lakh</Text>
                                <Text textColor="gray.400" fontSize="md">2 Cr</Text>
                            </Flex>
                        </FormControl>

                        {/* Interest Rate Slider */}
                        <FormControl id="interestRate">
                            <Flex justify="space-between" align="center" mb={4}>

                                <FormLabel fontWeight="semibold" fontSize="lg" color="gray.700" htmlFor="interestRate">Interest Rate (PA)</FormLabel>
                                <Box py={2} px={4} borderRadius="full" border="1px solid" borderColor="gray.300">
                                    <Text fontSize="lg" align="center">{interestRate}%</Text>
                                </Box>
                            </Flex>
                            <Slider
                                value={interestRate}
                                min={8}
                                max={25}
                                step={1}
                                onChange={(value) => setInterestRate(value)}
                                focusThumbOnChange={false}
                                height="16px"
                            >
                                <SliderTrack boxSize={2} boxShadow="2xl" bg="gray.600"> 
                                    <SliderFilledTrack bg="primary.900" /> 
                                </SliderTrack>
                                <SliderThumb boxShadow="lg" boxSize={6} bg="primary.600" /> 
                            </Slider>
                            <Flex textColor="gray.200" justify="space-between" color="gray.200">
                                <Text textColor="gray.400" fontSize="md">8%</Text>
                                <Text textColor="gray.400" fontSize="md">25%</Text>
                            </Flex>
                        </FormControl>

                        {/* Loan Term Slider */}
                        <FormControl id="loanTerm">
                            <Flex justify="space-between" align="center" mb={4}>
                         
                                <FormLabel fontWeight="semibold" fontSize="lg" color="gray.700" htmlFor="loanTerm">Term (Years)</FormLabel>

                                <Box py={2} px={4} borderRadius="full" border="1px solid" borderColor="gray.300">
                                    <Text fontSize="lg" align="center">{loanTerm} Yrs</Text>
                                </Box>
                            </Flex>
                            <Slider
                                value={loanTerm}
                                min={1}
                                max={30}
                                step={1}
                                onChange={(value) => setLoanTerm(value)}
                                focusThumbOnChange={false}
                                // mb={4}
                                height="16px"
                            >
                                <SliderTrack boxSize={2} boxShadow="2xl" bg="gray.600">
                                    <SliderFilledTrack bg="primary.900" />
                                </SliderTrack>
                                <SliderThumb boxShadow="lg" boxSize={6} bg="primary.600" /> 
                            </Slider>
                            <Flex textColor="gray.200" justify="space-between" color="gray.200">
                                <Text textColor="gray.400" fontSize="md">1</Text>
                                <Text textColor="gray.400" fontSize="md">30</Text>
                            </Flex>
                        </FormControl>

                        <Flex my={4} textColor="gray.200" justify="space-between" color="gray.200">
                            <Text fontFamily="initial" fontWeight="bold" textColor="primary.900" fontSize="2xl">Monthly Payment (EMI)</Text>
                            <Text fontFamily="initial" fontWeight="bold" textColor="primary.900" fontSize="3xl">₹{emi}</Text>
                        </Flex>
                    </VStack>
                </Box>
                
                <Box
                    flex="1"
                    position="relative"
                  //  borderRadius="lg"
                    overflow="hidden"
                    display={{ base: "none", md: "block" }}
                >
                    {/* Image */}
                    <Image
                        src={calculator}
                        alt="EMI Background"
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        filter="blur(1px)"
                    />


                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="100%"
                        h="100%"
                        bgGradient="linear(to-l, rgba(255, 255, 255, 0) 30%, white 85%)"
                    />
                </Box>
            </Flex>
            <Box my={4} bg="white" p={6}>
                <Heading my={12}  textAlign="center" as="h2" size="xl" mb={4} color="primary.600">
                    Calculate Your Monthly Loan Repayments with Ease 
                </Heading>
                <Text textAlign="center" mx={6} my={4} fontWeight="medium" lineHeight="1.6" letterSpacing="0.2px" fontSize="lg" color="gray.500" >
                    Business owners frequently secure loans using their assets to obtain the capital needed for business growth and expansion. However, unsecured loans offer a simpler and more straightforward option, as they don't require putting assets at risk for funding
                </Text>
                <Text mx={6} my={4} textAlign="center" fontWeight="medium" lineHeight="1.6" letterSpacing="0.2px" fontSize="lg" color="gray.500" >
                    It's crucial to explore the different loan options available before committing. We suggest using a Business Loan EMI Calculator to help plan your monthly repayments effectively.
                </Text>
                <Text mx={6} my={4} textAlign="center" fontWeight="medium" lineHeight="1.6" letterSpacing="0.2px" fontSize="lg" color="gray.500" >
                    The interest rate on your loan is influenced by factors such as the loan amount, repayment tenure, type of loan, and your credit history. Since unsecured loans carry higher risk for lenders, they typically come with higher interest rates. It's essential to calculate your monthly EMI in advance to ensure that you can manage your repayment commitments effectively.
                </Text>
                <Text mx={6} my={4} textAlign="center" fontWeight="medium" lineHeight="1.6" letterSpacing="0.2px" fontSize="lg" color="gray.500" >
                    Our EMI Calculator is easy to use and gives accurate results. Simply enter the total loan amount and the tenure, and you will instantly see the EMI payable every month.
                </Text>
                <Text mx={6} my={4} textAlign="center" fontWeight="medium" lineHeight="1.6" letterSpacing="0.2px" fontSize="lg" color="gray.500" >
                    *Results generated by the calculator are indicative in nature.
                </Text>
            </Box>
            <LoanCard/>
        
        </Box>
    );
};

export default EmiCalculator;
