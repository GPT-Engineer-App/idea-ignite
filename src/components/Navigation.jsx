import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontSize="lg">
          Home
        </Link>
        <Link as={RouterLink} to="/ai-prompt" color="white" fontSize="lg">
          AI Prompt
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
