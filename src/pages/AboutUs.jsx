import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Divider, Icon } from '@chakra-ui/react';

import satisfactionIcon from '../assets/satisfaction.png'
import integrityIcon from '../assets/integrityIcon.png'
import innovationIcon from '../assets/innovation.png'
import groupImg from '../assets/groupImage.jpeg'
import member1 from '../assets/team/pawan.jpeg'
import member2 from '../assets/team/ravi.jpeg'
import member3 from '../assets/team/vaishali.jpeg'
import member4 from '../assets/team/rahul.jpeg'
import member5 from '../assets/team/tarun.jpeg'
import member6 from '../assets/team/sunil.jpeg'
import { FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';
import Values from '../components/Values';
import Awards from '../components/Awards';
import LoanCard from '../components/LoanCard';

const AboutUs = () => {

    const teamMembers = [
        {
            name: 'Pawan Kumar',
            role: 'Founder & MD',
            bio: 'John leads the company with a passion for innovation and growth.',
            imgSrc: member1,
        },
        {
            name: 'Ravi',
            role: 'ZO',
            bio: 'Jane ensures our products meet customer needs and exceed expectations.',
            imgSrc: member2,
        },
        {
            name: 'Vaishali',
            role: 'Business Head',
            bio: 'John leads the company with a passion for innovation and growth.',
            imgSrc: member3,
        },
        {
            name: 'Rahul Verma',
            role: 'Personal Loan Head',
            bio: 'Jane ensures our products meet customer needs and exceed expectations.',
            imgSrc: member4,
        },
        {
            name: 'Tarun',
            role: 'HR & Account Manager',
            bio: 'Jane ensures our products meet customer needs and exceed expectations.',
            imgSrc: member5,
        },
        {
            name: 'Sunil',
            role: 'Sales Head',
            bio: 'Jane ensures our products meet customer needs and exceed expectations.',
            imgSrc: member6,
        },
       
    ];

    return (
        <Box bg="bg.100" color="white" py={10}>
            <Container maxW="7xl">
                {/* Heading Section */}
                <Box p={4} maxWidth="60%">

                      <Heading color="primary.900" as="h1" size="xl" textAlign="left" mb={6}>
                        Simplifying Your Personal Finance Journey
                    </Heading>
                    <Text textColor="gray.600" fontSize="lg" textAlign="left" mb={8}>
                        We believe in making personal finance straightforward, hassle-free, and fully transparent. Whether you're applying for a loan or managing your finances, our aim is to provide you with easy access, clear processes, and the support you need to make informed decisions.
                    </Text>
                </Box>  
                <Box mb={36} my={20}>
                    <Box position="relative" textAlign="center" my={6} width="100%" maxWidth="90%" margin="0 auto">
                        <Image
                            src={groupImg}
                            alt="Our Team"
                            objectFit="cover"
                            width="100%"
                            height={["250px", "350px", "450px"]}
                            borderRadius="lg"
                            zIndex={0}
                            display="block"
                        />
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            width="100%"
                            height={["250px", "350px", "450px"]}
                            backgroundColor="rgba(0, 0, 0, 0.7)"
                            borderRadius="lg"
                            zIndex={1}
                        />
                        <Box
                            position="absolute"
                            bottom={-20}
                            left="50%"
                            transform="translateX(-50%)"
                            zIndex={2}
                            width="90%"  
                            maxWidth="80%"
                            display={{ base: "none", md: "block" }} 
                        //  mb={10}
                        >
                            <SimpleGrid columns={[1, 2, 3]} spacing={6}>
                                <Box
                                    p={5}
                                    py={8}
                                    bg="white"
                                    borderWidth={1}
                                    borderRadius="md"
                                    textAlign="center"
                                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)" 
                                    transform="scale(1)"
                                    height="250px" 
                                    transition="transform 0.3s ease, box-shadow 0.3s ease" 
                                    _hover={{
                                        transform: "scale(1.05)", 
                                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", 
                                    }}
                                >
                                    <Icon as={FaUsers} boxSize={12} color="primary.900" />
                                    <Heading size="md" my={2}>Trusted by Millions</Heading>
                                    <Text>Our platform is used by millions nationwide.</Text>
                                </Box>
                                <Box
                                    p={5}
                                    py={8}
                                    bg="white"
                                    borderWidth={1}
                                    borderRadius="md"
                                    textAlign="center"
                                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                                    transform="scale(1)"
                                    height="250px"
                                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                                    _hover={{
                                        transform: "scale(1.05)",
                                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <Icon as={FaShieldAlt} boxSize={12} color="primary.900" />
                                    <Heading size="md" my={2}>Secure and Reliable</Heading>
                                    <Text>We prioritize your security and privacy.</Text>
                                </Box>
                                <Box
                                    p={5}
                                    py={8}
                                    bg="white"
                                    borderWidth={1}
                                    borderRadius="md"
                                    textAlign="center"
                                    boxShadow="md"
                                    transform="scale(1)"
                                    height="250px"
                                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                                    _hover={{
                                        transform: "scale(1.05)",
                                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <Icon as={FaRocket} boxSize={12} color="primary.900" />
                                    <Heading size="md" my={2}>Fast and Efficient</Heading>
                                    <Text>Get funds quickly with streamlined processes.</Text>
                                </Box>
                            </SimpleGrid>
                        </Box>
                    
                    </Box>
                </Box>
               
                {/* Our Mission */}
                <Box px={16} py={12}  mt={24}>
                    <Heading as="h2" textColor="primary.800" size="xl" textAlign="center" mb={4}>
                        Our Mission
                    </Heading>
                    <Text my={4} textColor="gray.600" fontSize="lg" textAlign="center">
                        At RealTurity, we aim to provide fast, secure, and affordable loan solutions to individuals and businesses.
                        Our mission is to empower our customers to reach their financial goals with ease and confidence.
                    </Text>
                </Box>

                {/* Our Values Section */}
               <Values/>
                {/* OUR TEAM */}
                <Box p={10} textAlign="center" my={10}>
                    <Box my={12}>
                     <Heading as="h2"  color="primary.800" >Meet Our Dynamic Team</Heading>
                    </Box>
                    <SimpleGrid my={4} columns={[1, 2, 3]} spacing={6}>
                        {teamMembers.map((member, index) => (
                            <Box
                                key={index}
                                borderWidth={1}
                                borderRadius="lg"
                                overflow="hidden"
                                boxShadow="lg"
                                _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
                                transition="transform 0.3s ease-in-out"
                            >
                                <Image
                                    src={member.imgSrc}
                                    alt={member.name}
                                    maxHeight="250px" 
                                    objectFit="contain" 
                                    width="100%" 
                                />
                                <Box p={4} bg="white">
                                    <Heading size="md">{member.name}</Heading>
                                    <Text color="gray.500" mb={2}>{member.role}</Text>
                                  {/* //  <Text>{member.bio}</Text> */}
                                </Box>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
                <Awards />
                <LoanCard/>

            </Container>
        </Box>
    );
};

export default AboutUs;
