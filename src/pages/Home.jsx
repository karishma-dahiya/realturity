import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Image,
  Icon,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
} from "@chakra-ui/react";
import { FaHandshake, FaCalculator, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import loanBanner from "../assets/loan.jpg";
import Navbar from "../components/Navbar";
import bgImg from '../assets/bg1.jpeg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import LoanCard from "../components/LoanCard";
import BankingPartners from "../components/BankingPartners"
import personalLoan from '../assets/personalLoan.jpg';
import businessLoan from '../assets/businessLoan.png';
import Awards from "../components/Awards";
import bgAnimated from "../assets/bg2.jpg"
import { useNavigate } from "react-router-dom";
import Values from "../components/Values";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomePage = () => {

  const navigate = useNavigate();

  const loanTypes = [
    {
      title: 'Personal Loan',
      description:
        'Get a flexible, unsecured loan for personal expenses like debt consolidation, home improvements, or emergencies.',
      imgSrc: personalLoan,
      link: '/loans',
      details: {
        interestRate: 'Starting at 10.49% p.a.',
        loanAmount: 'Up to ₹40 Lakh',
        eligibility: 'Minimum age: 21 years, Minimum monthly income: ₹25,000',
      },
    },
    {
      title: 'Business Loan',
      description:
        'Secure the funding you need for your business growth, expansion, or working capital.',
      imgSrc: businessLoan,
      link: '/loans',
      details: {
        interestRate: 'Starting at 12.00% p.a.',
        loanAmount: 'Up to ₹50 Lakh',
        eligibility: 'Minimum business vintage: 2 years, GST registered',
      },
    },
  ];
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    arrows: false,
    dots: true, // Show dots for navigation
    fade: true,
    infinite: true,
    speed: 1000,
  };
  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" width="100%" overflow="hidden">
        <Swiper pagination={{ clickable: true }}
          scrollbar={{ draggable: true }} autoplay={{ delay: 1000 }} loop>
          <SwiperSlide>
            <Box
              position="relative"
              height={{ base: '300px', md: '500px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgImage={hero1}
                bgPosition="center"
                bgSize="cover"
                opacity="0.8"
                zIndex={0}
              />
              <Container
                maxW="7xl"
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                zIndex={1}
                bg="rgba(0, 0, 0, 0.6)"  
                py={6}
                px={8}
              >
                <Box textAlign="left">
                  <Heading as="h1" size="2xl" color="white" mb={4}>
                    Your Trusted Financial Partner
                  </Heading>
                  <Text fontSize="xl" textColor="accent.300" mb={6}>
                    Fast, Secure, and Affordable Loans to Achieve Your Dreams
                  </Text>
                  <Button size="lg" bg="primary.700" _hover={{bg:"primary.100"}} colorScheme="blue" variant="solid">
                    Get Started
                  </Button>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              position="relative"
              height={{ base: '300px', md: '500px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* Transparent black overlay on image */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.8)" // Semi-transparent black overlay
                zIndex={0}
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgImage={bgImg}
                bgPosition="center"
                bgSize="cover"
                zIndex={-1}
              />
              <Container maxW="7xl" textAlign="center" zIndex={1}>
                <Heading as="h1" size="2xl" color="white" mb={4}>
                  Achieve Your Financial Goals
                </Heading>
                <Text fontSize="xl" textColor="accent.300" mb={6}>
                  Tailored Loan Solutions for Your Business and Personal Needs
                </Text>
                <Button size="lg" bg="primary.700" _hover={{ bg: "primary.100" }} colorScheme="blue" variant="solid">
                  Get Started
                </Button>
              </Container>
            </Box>
          </SwiperSlide>
       

          {/* Add more slides */}
        </Swiper>
      </Box>
    
 
      {/* About Us Section */}
      <Box py={20} bg="gray.50" borderTop="5px solid #FF9800" position="relative">
        <Container maxW="7xl">
          <VStack spacing={6} align="center">
            {/* <Heading as="h2" size="xl" color="gray.800" textAlign="center" mb={4}>
              About Us
            </Heading> */}
            <Text fontSize="lg" color="gray.600" textAlign="center" mb={6} maxW="600px">
              At RealTurity, we simplify personal finance and provide tailored loan solutions for individuals and businesses. Our mission is to help you navigate financial decisions with ease and confidence.
            </Text>

            <Button
              size={{ base: 'md', md: 'lg' }}
              colorScheme="blue"
              variant="solid"
              borderRadius="full"
              px={8}
              py={6}
              _hover={{
                bg: 'blue.600',
                transform: 'scale(1.05)',
                transition: 'all 0.3s ease',
              }}
              boxShadow="xl"
              _active={{
                bg: 'blue.700',
                transform: 'scale(1)',
              }}
              onClick={()=>navigate('/about-us')}
            >
              Learn More
            </Button>
          </VStack>

          {/* Background image with subtle animation effect */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage={bgImg}
            bgSize="cover"
            bgPosition="center"
            opacity="0.2"
            zIndex="-1"
            transition="all 0.5s ease"
            _hover={{ opacity: '0.4' }}
          ></Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box px={10} py={20} bg="white" borderTop="5px solid #FF9800">
        <Container maxW="7xl">
          <Heading as="h2" size="xl" textAlign="center" mb={8} color="primary.900">
            Why Choose Us
          </Heading>
          <Text fontSize="lg" textAlign="center" color="gray.600" mb={12}>
            Discover why we’re the right choice for your financial needs. Our commitment to customer satisfaction, security, and speed
            sets us apart.
          </Text>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            <FeatureBox
              icon={FaUsers}
              title="Trusted by Millions"
              description="We’ve helped millions achieve their financial goals with personalized solutions, and we’re ready to help you too!"
            />
            <FeatureBox
              icon={FaShieldAlt}
              title="Secure & Transparent"
              description="Your data security is our priority. With encryption and clear terms, you can trust us to keep your information safe."
            />
            <FeatureBox
              icon={FaRocket}
              title="Fast Approval"
              description="Apply now and receive quick approvals! Get your loan processed in record time with minimal paperwork."
            />
          </SimpleGrid>
        </Container>
      </Box>


      {/* Loans Section */}
      <Box py={{ base: 12, md: 20 }} bg="gray.100">
        <Container maxW="7xl">
          <Heading as="h2" size="xl" textAlign="center" mb={10} color="primary.900">
            Explore Our Loan Options
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {loanTypes.map((loan, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="xl"
                _hover={{ boxShadow: 'xl', transform: 'scale(1.03)', transition: '0.3s ease' }}
                transition="all 0.3s ease"
                bg="white"
              >
                <Flex bg="white"  align="center" p={6}>

                  <Image
                    src={loan.imgSrc}
                    alt={loan.title}
                    boxSize={{ base: '100px', md: '150px' }}
                    objectFit="cover"
                    borderRadius="lg"
                    mb={{ base: 4, md: 0 }}
                  />

                  <VStack align="flex-start" spacing={4} ml={{ md: 6 }}>
                    <Heading size="lg" color="primary.600">
                      {loan.title}
                    </Heading>
                    <Text color="gray.600" mb={4}>
                      {loan.description}
                    </Text>
                  </VStack>
                </Flex>

                {/* Details Section */}
                <Box  p={6} borderTop="1px" borderColor="gray.200">
                  <Text  fontWeight="bold" mb={1}>
                    Interest Rate:
                  </Text>
                  <Text mb={2}>{loan.details.interestRate}</Text>

                  <Text fontWeight="bold" mb={1}>
                    Loan Amount:
                  </Text>
                  <Text mb={2}>{loan.details.loanAmount}</Text>

                  <Text fontWeight="bold" mb={1}>
                    Eligibility:
                  </Text>
                  <Text>{loan.details.eligibility}</Text>

                  {/* Apply Now Button */}
                  <Button
                    as="a"
                    href={loan.link}
                    bg="primary.200"
                    textColor="white"
                    mt={4}
                    size="lg"
                    width="full"
                    _hover={{ bg: 'primary.800' }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <BankingPartners />
      <Awards />
      <Box minH="50px" my={12}></Box>
      <LoanCard />
      {/* CTA Section */}
      {/* <Box py={20} bg="gray.800" color="white">
        <Container maxW="7xl" textAlign="center">
          <Heading as="h2" size="xl" mb={6}>
            Ready to Achieve Your Financial Goals?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Apply now and experience a new way of managing your finances.
          </Text>
          <Button size="lg" colorScheme="blue" variant="solid">
            Apply Now
          </Button>
        </Container>
      </Box> */}
    </Box>
  );
};

const FeatureBox = ({ icon, title, description }) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      p={6}
      boxShadow="lg"
      _hover={{
        boxShadow: 'xl',
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease',
      }}
      textAlign="center"
      bg="gray.50"
    >
      <Icon as={icon} boxSize={12} color="blue.500" mb={4} />
      <Heading size="lg" mb={2} color="gray.800">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
      {/* <Button mt={4} colorScheme="blue" variant="outline" borderRadius="full">
        Learn More
      </Button> */}
    </Box>
  );
};



export default HomePage;
