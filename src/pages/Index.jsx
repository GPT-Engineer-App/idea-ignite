import { useState } from "react";
import { Container, VStack, HStack, Input, Textarea, Box, Text, IconButton } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";
import RoleSwapButton from "../components/RoleSwapButton.jsx";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [role, setRole] = useState("user");

  const addNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content, role }]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const swapRole = (index) => {
    const newNotes = notes.map((note, i) => {
      if (i === index) {
        return { ...note, role: note.role === "user" ? "model" : "user" };
      }
      return note;
    });
    setNotes(newNotes);
  };

  return (
    <Container centerContent maxW="container.md" py={8} bg="gray.50">
      <VStack spacing={4} width="100%">
        <HStack width="100%" spacing={2}>
          <Input placeholder="Idea Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <IconButton aria-label="Add Note" icon={<FaPlus />} onClick={addNote} />
        </HStack>
        <Textarea placeholder="Ignite your idea..." value={content} onChange={(e) => setContent(e.target.value)} resize="vertical" />
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <HStack justifyContent="space-between">
                <Text fontSize="xl" fontWeight="bold" color={note.role === "user" ? "green.500" : "blue.500"}>
                  {note.title}
                </Text>
                <HStack>
                  <RoleSwapButton onSwap={() => swapRole(index)} />
                  <IconButton aria-label="Delete Note" icon={<FaTrash />} onClick={() => deleteNote(index)} colorScheme="red" />
                </HStack>
              </HStack>
              <Text mt={2} color={note.role === "user" ? "green.500" : "blue.500"}>
                {note.content}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
