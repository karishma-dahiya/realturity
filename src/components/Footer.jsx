import { Box, Flex, Text, IconButton, Stack, Link, SimpleGrid, Container, Image } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo2.png'

const Footer = () => {
    return (
        <>
            <Box bgGradient="linear(to-b, primary.900,primary.200)" color="white" py={8}>
                <Container maxW="container.lg">
                    {/* Footer Sections: Logo & Info, Company, Get in Touch */}
                    <SimpleGrid columns={[1, 2, 3]} spacing={8} textAlign="left" mb={8}>
                        {/* Logo and Info */}
                        <Box>
                            <Image src={logo}alt="Logo" boxSize="120px" mb={4} />
                            <Text fontSize="sm" color="gray.400">
                                Your one-stop solution for business and personal loans. Secure, fast, and easy loans that meet your needs.
                            </Text>
                        </Box>

                        {/* Company */}
                        <Box>
                            <Text fontSize="lg" color="gray.500" mb={2}>Company</Text>
                            <Link href="/about-us" fontSize="sm" color="white" _hover={{ color: "primary.200" }} mb={1} display="block">
                                About Us
                            </Link>
                            <Link href="/contact-us" fontSize="sm" color="white" _hover={{ color: "primary.200" }} mb={1} display="block">
                                Contact
                            </Link>
                            <Link href="/faq" fontSize="sm" color="white" _hover={{ color: "primary.200" }} mb={1} display="block">
                                FAQs
                            </Link>
                            <Link href="/tools/emi-calculator" fontSize="sm" color="white" _hover={{ color: "primary.200" }} mb={1} display="block">
                                EMI Calculator
                            </Link>
                            <Link href="/" fontSize="sm" color="white" _hover={{ color: "primary.200" }} display="block">
                                Terms of Service
                            </Link>
                        </Box>

                        {/* Get in Touch */}
                        <Box>
                            <Text fontSize="lg" color="gray.500" mb={2}>Get in Touch</Text>
                            <Link href="mailto:realturitybusiness@gmail.com" fontSize="sm" color="white" _hover={{ color: "primary.200" }} mb={1} display="block">
                                Email: realturitybusiness@gmail.com
                            </Link>
                            <Link href="tel:+919728765494" fontSize="sm" color="white" _hover={{ color: "primary.200" }} display="block">
                                Phone: +91 9728765494
                            </Link>
                        </Box>
                    </SimpleGrid>

                    {/* Loans for You Section */}
                    <Box textAlign="center" mb={8}>
                        <Text fontSize="2xl" fontWeight="bold" color="gray.500" mb={4}>
                            Loans for You
                        </Text>
                        <SimpleGrid columns={[1, 2]} spacing={8} textAlign="center">
                            <Box>
                                <Text fontSize="lg" color="gray.500" mb={2}>Personal Loans</Text>
                                <Link href="/loans" fontSize="sm" color="white" _hover={{ color: "primary.200" }}>
                                    Learn more
                                </Link>
                            </Box>
                            <Box>
                                <Text fontSize="lg" color="gray.500" mb={2}>Business Loans</Text>
                                <Link href="/loans" fontSize="sm" color="white" _hover={{ color: "primary.200" }}>
                                    Learn more
                                </Link>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Container>
            </Box>
        <Box bg="gray.900" color="white" py={8}>
            <Flex direction={["column", "column", "row"]} justify="space-between" align="center" maxW="1200px" mx="auto" px={6}>

                {/* Left Section: Company Info */}
                <Stack spacing={3} align="center" mb={[6, 6, 0]}>
                    <Text fontSize="xl" fontWeight="semibold">Realturity</Text>
                        <Text fontSize="sm">© 2025 Realturity. All rights reserved.</Text>
                </Stack>

                {/* Middle Section: Links */}
                {/* <Stack direction="row" spacing={6} mb={[6, 6, 0]} align="center">
                    <Link href="/about-us" _hover={{ textDecoration: "underline" }} fontSize="sm">About Us</Link>
                    <Link href="/services" _hover={{ textDecoration: "underline" }} fontSize="sm">Services</Link>
                    <Link href="/contact-us" _hover={{ textDecoration: "underline" }} fontSize="sm">Contact</Link>
                    <Link href="/faq" _hover={{ textDecoration: "underline" }} fontSize="sm">FAQs</Link>
                    <Link href="/" _hover={{ textDecoration: "underline" }} fontSize="sm">Privacy Policy</Link>
                </Stack> */}

                {/* Right Section: Social Icons */}
                <Stack direction="row" spacing={6} align="center">
                    <IconButton
                        as="a"
                        href="https://www.facebook.com"
                        target="_blank"
                        icon={<FaFacebook />}
                        aria-label="Facebook"
                        bg="transparent"
                        color="white"
                        _hover={{ color: "primary.200" }}
                    />
                    <IconButton
                        as="a"
                        href="https://www.twitter.com"
                        target="_blank"
                        icon={<FaTwitter />}
                        aria-label="Twitter"
                        bg="transparent"
                        color="white"
                        _hover={{ color: "primary.200" }}
                    />
                    <IconButton
                        as="a"
                        href="https://www.instagram.com"
                        target="_blank"
                        icon={<FaInstagram />}
                        aria-label="Instagram"
                        bg="transparent"
                        color="white"
                        _hover={{ color: "primary.200" }}
                    />
                    <IconButton
                        as="a"
                        href="https://www.linkedin.com"
                        target="_blank"
                        icon={<FaLinkedin />}
                        aria-label="LinkedIn"
                        bg="transparent"
                        color="white"
                        _hover={{ color: "primary.200" }}
                    />
                </Stack>
            </Flex>
        </Box>
        </>
    );
};

export default Footer;
