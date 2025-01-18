import React from 'react';
import { Box, Grid, Image, Heading, Text, Flex, IconButton } from '@chakra-ui/react';

import award1 from '../assets/awards/1.jpeg';
import award2 from '../assets/awards/2.jpeg';
import award3 from '../assets/awards/3.jpeg';
import award4 from '../assets/awards/4.jpeg';
import award5 from '../assets/awards/5.jpeg';
import award6 from '../assets/awards/6.jpeg';
import award7 from '../assets/awards/7.jpeg';
import award8 from '../assets/awards/8.jpeg';
import award9 from '../assets/awards/9.jpeg';
import award10 from '../assets/awards/10.jpeg';
import award11 from '../assets/awards/11.jpeg';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRef } from 'react';

const Awards = () => {
    const awards = [
        {
            title: 'Best Fintech 2023',
            image: award1, description: 'Awarded for excellence in financial technology.'
        },
        {
            title: 'Customer Choice 2022',
            image: award2, description: 'Recognized for outstanding customer service.'
        },
        {image:award3},
        {image:award4},
        {image:award5},
        {image:award6},
        {image:award7},
        {image:award8},
        {image:award9},
        {image:award10},
        {image:award11},
    ];

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -200 : 200,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box  py={12} textAlign="center">
            <Heading textColor="primary.700" size="lg" my={12}>Awards and Recognitions</Heading>
            <Flex align="center" position="relative">
                <IconButton
                    icon={<ChevronLeftIcon boxSize={6} />}
                    onClick={() => scroll('left')}
                    position="absolute"
                    left="0"
                    zIndex="1"
                    aria-label="Scroll Left"
                    bg="primary.100"
                    textColor="white"
                    boxShadow="md"
                    _hover={{ bg: 'primary.200' }}
                />
                <Box
                    ref={scrollRef}
                    overflowX="auto"
                    whiteSpace="nowrap"
                    px={6}
                    css={{
                        '&::-webkit-scrollbar': { display: 'none' },
                    }}
                >
                    <Flex as="ul" listStyleType="none" gap={4}>
                        {awards.map((award, index) => (
                            <Box
                                as="li"
                                key={index}
                                minWidth={{ base: '120px', md: '180px', lg: '200px' }}
                                height={{ base: '120px', md: '180px', lg: '200px' }}
                                flexShrink={0}
                            >
                                <Image
                                    src={award.image}
                                    alt={`Award ${index + 1}`}
                                    boxSize="100%"
                                    objectFit="contain"
                                    borderRadius="lg"
                                    shadow="md"
                                    bg="white"
                                />
                            </Box>
                        ))}
                    </Flex>
                </Box>
                <IconButton
                    icon={<ChevronRightIcon boxSize={6} />}
                    onClick={() => scroll('right')}
                    position="absolute"
                    right="0"
                    zIndex="1"
                    aria-label="Scroll Right"
                    bg="primary.100"
                    textColor="white"
                    boxShadow="md"
                    _hover={{ bg: 'primary.200' }}
                />
            </Flex>
        </Box>
    );
};

export default Awards;
