import React from 'react';
import { Box, Grid, Image, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import bank1 from '../assets/banks/1.jpg';
import bank2 from '../assets/banks/2.png';
import bank3 from '../assets/banks/3.png';
import bank4 from '../assets/banks/4.jpg';
import bank5 from '../assets/banks/5.png';
import bank6 from '../assets/banks/6.jpg';
import bank7 from '../assets/banks/7.png';
import bank8 from '../assets/banks/8.png';
import bank9 from '../assets/banks/9.png';
import bank10 from '../assets/banks/10.png';
import bank11 from '../assets/banks/11.png';
import bank12 from '../assets/banks/12.png';
import bank13 from '../assets/banks/13.jpg';
import bank14 from '../assets/banks/14.png';
import bank15 from '../assets/banks/15.jpg';
import bank16 from '../assets/banks/16.jpg'
import bank17 from '../assets/banks/17.png'
import bank18 from '../assets/banks/18.jpg'
import bank19 from '../assets/banks/19.png'
import bank20 from '../assets/banks/20.png'
import bank21 from '../assets/banks/21.png'
import bank22 from '../assets/banks/22.png'
import bank23 from '../assets/banks/23.png'
import bank24 from '../assets/banks/24.png'
import bank25 from '../assets/banks/25.jpg'
import bank26 from '../assets/banks/26.png'
import bank27 from '../assets/banks/27.png'
import bank28 from '../assets/banks/28.png'
import bank29 from '../assets/banks/29.png'
import bank30 from '../assets/banks/30.png'


const BankingPartners = () => {
    const partners = [
        { image: bank1 }, { image: bank2 }, { image: bank7 }, { image: bank10 },
        { image: bank3 }, { image: bank5 }, { image: bank8 }, { image: bank11 },
        { image: bank4 }, { image: bank6 }, { image: bank9 }, { image: bank12 },
        { image: bank13 }, { image: bank18 }, { image: bank20 }, { image: bank21 },
        { image: bank14 }, { image: bank19 }, { image: bank22 }, { image: bank23 },
        { image: bank15 }, { image: bank24 }, { image: bank25 }, { image: bank26 },
        { image: bank16 }, { image: bank27 }, { image: bank28 }, { image: bank29 },
        { image: bank17 }, 
      
    ];

    return (
        <Box bg="gray.200" py={10} textAlign="center">
            <Heading textAlign="center" as="h1" size="xl" my={16} color="primary.900">
                 Banking <Text as="span" color="accent.300">Partners</Text>
                </Heading>
            <Flex wrap="wrap" justify="center" align="center">
                {/* Banks Container with wrapping */}
                {partners.map((bank, index) => (
                    <Box
                        key={index}
                        minWidth={{base:"60px",md:"80px",lg:"120px" }}
                        maxWidth={{ base: "60px", md: "80px", lg: "120px" }}
                        mx={4}  
                        mb={4} 
                        borderRadius="md"
                        overflow="hidden"
                    >
                        <Image src={bank.image} alt={bank.name || `Bank ${index + 1}`} />
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default BankingPartners;
