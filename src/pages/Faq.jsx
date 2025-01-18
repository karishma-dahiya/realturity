import { useState } from 'react';
import { Box, InputGroup, Input, InputLeftElement, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Container, Text, Center } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const FAQs = [
    { question: 'What is Realturity?', answer: 'Realturity is a company offering a range of financial services...' },
    { question: 'How can I apply for a loan?', answer: 'You can apply for a loan by visiting our application page...' },
    { question: 'How do I contact customer service?', answer: 'You can reach customer service through our contact page or by calling our toll-free number...' },
];

const FAQPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFAQs, setFilteredFAQs] = useState(FAQs);

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query === '') {
            setFilteredFAQs(FAQs);
        } else {
            const filtered = FAQs.filter((faq) =>
                faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query)
            );
            setFilteredFAQs(filtered);
        }
    };

    return (
        <Container bg="background.100" maxW="7xl" p={10}>
          
            <Heading color="primary.800" as="h1" size="xl" textAlign="center" my={6}>
                Frequently Asked Questions
            </Heading>
            {/* Search Bar */}
            <Center my={6}>
                <InputGroup width="60%">
                    <InputLeftElement pointerEvents="none" display="flex" alignItems="center">
                        <SearchIcon color="gray.300" boxSize={6} />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder="Search FAQs"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        size="lg"
                        border="1px solid #ccc" 
                        borderRadius="md"
                    />
                </InputGroup>
            </Center>

           
            {filteredFAQs.length > 0 ? (
                <Accordion allowToggle>
                    {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index}>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton
                                            _expanded={{
                                                bg: 'gray.200',
                                               // transform: 'rotate(90deg)',
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            <Box
                                                flex="1"
                                                textAlign="left"
                                                fontWeight={isExpanded ? 'bold' : 'semibold'}
                                                color={isExpanded ? 'primary.600' : 'gray.600'}
                                                transition="color 0.3s ease"
                                                fontSize="lg"
                                            >
                                                {faq.question}
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel fontSize="md" textColor="gray.600" pb={4}>{faq.answer}</AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            ) : (
                <Box textAlign="center">
                    <Text fontSize="lg" color="gray.500">
                        Sorry, we were not able to find a match.
                    </Text>
                    <Text mt={4} fontSize="md">
                        Get a Call Back – Our team will get in touch with you to answer any of your questions.
                    </Text>
                </Box>
            )}
        </Container>
    );
};

export default FAQPage;
