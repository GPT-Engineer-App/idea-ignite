import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/ai-prompt" colorScheme="teal" variant="ghost">
          AI Prompt
        </Button>
        <Button as={Link} to="/creative-professionals" colorScheme="teal" variant="ghost">
          Creative Pros
        </Button>
        <Button as={Link} to="/students-researchers" colorScheme="teal" variant="ghost">
          Students & Researchers
        </Button>
        <Button as={Link} to="/business-professionals" colorScheme="teal" variant="ghost">
          Business Pros
        </Button>
        <Button as={Link} to="/technical-writers" colorScheme="teal" variant="ghost">
          Tech Writers
        </Button>
        <Button as={Link} to="/ai-enthusiasts" colorScheme="teal" variant="ghost">
          AI Enthusiasts
        </Button>
      </Flex>
    </Box>
  );
}

export default Navigation;
