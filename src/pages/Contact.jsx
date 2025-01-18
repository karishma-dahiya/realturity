import React from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    SimpleGrid,
    GridItem,
} from '@chakra-ui/react';
import { PhoneIcon, AtSignIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import Location Icon from react-icons

const ContactUs = () => {
    return (
        <Box bg="background.100" py={16}>
            <Container px={0} maxW="7xl">
                {/* Page Heading and Description */}
                    <Box w="100%" p={10} mx={0} bg="blue.50"  mb={16}>
                                  <Heading textAlign="left" as="h1" size="xl" mb={8} color="primary.900">
                                              Contact  <Text as="span" color="accent.200">Us</Text>
                                       </Heading>
                                    <Text fontSize="lg" mb={8} fontWeight="light" color="gray.600">
                        We're here to help! Whether you have a question or need support, feel free to reach out to us.
                                    </Text>
                                </Box>
               

                {/* Contact Information Section */}
                <Box px={10} p={6} borderRadius="md"  mb={12}>
                    <Heading as="h2" size="lg" mb={4} color="primary.200" textAlign="center">
                        Contact Information
                    </Heading>

                    <Box mb={6}>
                        <PhoneIcon boxSize={6} color="primary.200" mb={3} />
                        <Text fontSize="lg" color="gray.700">
                            <a href="tel:+919728765494" style={{ color: 'inherit' }}>+91 9728765494</a>
                        </Text>
                    </Box>

                    <Box mb={6}>
                        <AtSignIcon boxSize={6} color="primary.200" mb={3} />
                        <Text fontSize="lg" color="gray.700">
                            <a href="mailto:realturitybusiness@gmail.com" style={{ color: 'inherit' }}>realturitybusiness@gmail.com</a>
                        </Text>
                    </Box>

                    <Box mb={6}>
                        <FaMapMarkerAlt size={24} color="#66A9FF" mb={3} />
                        <Text fontSize="lg" color="gray.700">
                            L-315,LAL BAHADUR SHASHTRI CHOWK,MODEL TOWN, REWARI HRY123401
                        </Text>

                        {/* Google Map Embed */}
                        <Box my={6} borderRadius="md" overflow="hidden" boxShadow="lg">
                            <iframe
                                width="100%"
                                height="300"
                                frameBorder="0"
                                style={{ border: 0, borderRadius: '8px' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14066.33386930158!2d76.60478528530155!3d28.18958051454746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d5128e064cc53%3A0x1762656fb5402b77!2sLal%20bahadur%20sastri%20chowk!5e0!3m2!1sen!2sin!4v1737203194760!5m2!1sen!2sin"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            ></iframe>
                           
                        </Box>
                    </Box>
                </Box>

                {/* Contact Form Section */}
                <Box bg="white" p={6} borderRadius="md" shadow="xl" maxW={{base:"80%",md:"60%"}} mx="auto">
                    <Heading as="h2" size="lg" mb={4} color="primary.600" textAlign="center">
                        Get in Touch
                    </Heading>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="name">Your Name</FormLabel>
                        <Input id="name" type="text" placeholder="John Doe" bg="gray.100" />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input id="email" type="email" placeholder="john@example.com" bg="gray.100" />
                    </FormControl>

                    <FormControl mb={4}>
                        <FormLabel htmlFor="message">Your Message</FormLabel>
                        <Textarea id="message" placeholder="Write your message..." bg="gray.100" />
                    </FormControl>

                    <Button bg="primary.200" color="white" w="full" mt={4} _hover={{ bg: "primary.300" }}>
                        Send Message
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ContactUs;
