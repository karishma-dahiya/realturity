import React from 'react';
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Text,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    VStack,
    useDisclosure,
    useMediaQuery,
    Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const navigate = useNavigate();

    return (
        <Box bg="white"  boxShadow="md" position="sticky" top={0} zIndex={10}>
            <Flex justify="space-between" align="center " px={10} py={1} maxW="1200px" mx="auto">
              
                <Image
                    onClick={() => navigate('/')}
                    src={logo}
                    alt="DSA Website Logo"
                    boxSize={{ base: '64px', sm: '72px', md: '80px', lg: '96px' }}
                    maxW={{ base: '140px', md: '200px' }}
                />

                {/* Desktop Navigation Links */}
                <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                    {/* <Button onClick={()=>navigate('/')} fontSize="lg" variant="link" color="text.300" _hover={{ color: "primary.200" }}>
                        Home
                    </Button> */}
                    <Button onClick={() => navigate('/loans')} fontSize="lg" variant="link" color="text.300" _hover={{ color: "primary.200" }}>
                        Loans
                    </Button>
                    <Button onClick={() => navigate('/tools/emi-calculator')} fontSize="lg" variant="link" color="text.300" _hover={{ color: "primary.200" }}>
                        Services
                    </Button>
                    <Button onClick={() => navigate('/about-us')} fontSize="lg" variant="link" color="text.300" _hover={{ color: "primary.200" }}>
                        About
                    </Button>
                    <Button onClick={() => navigate('/contact-us')} fontSize="lg" variant="link" color="text.300" _hover={{ color: "primary.200" }}>
                        Contact
                    </Button>
                  
                </HStack>

                {/* Mobile Hamburger Menu */}
                <IconButton
                    aria-label="Open Menu"
                    icon={isOpen ? <CloseIcon colorScheme="text.100" /> : <HamburgerIcon colorScheme="text.200" />}
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
            
                />
            </Flex>

            {/* Mobile Drawer Menu */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader bg="primary.200" color="white">
                        <Text fontSize="xl" fontWeight="bold">DSA Website</Text>
                        <IconButton
                            aria-label="Close Menu"
                            icon={<CloseIcon />}
                            onClick={onClose}
                            position="absolute"
                            right={4}
                            top={4}
                           // color="white"
                        />
                    </DrawerHeader>
                    <DrawerBody bg="white" p={4}>
                        <VStack spacing={4} align="start">
                            <Button variant="link" color="primary.800" onClick={onClose}>
                                Home
                            </Button>
                            <Button variant="link" color="primary.800" onClick={onClose}>
                                About
                            </Button>
                            <Button variant="link" color="primary.800" onClick={onClose}>
                                Services
                            </Button>
                            <Button variant="link" color="primary.800" onClick={onClose}>
                                Contact
                            </Button>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
