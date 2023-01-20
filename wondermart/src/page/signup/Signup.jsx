import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton
  } from "@chakra-ui/react";
  
  export const Signup=()=> {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      toast({
        title: "Welcome",
        description: "You are now signed up.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    };
  
    return (
      <>
        <Button variantColor="teal" onClick={onOpen}>
          Signup
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Signup</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    aria-describedby="email-helper-text"
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    aria-describedby="password-helper-text"
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    aria-describedby="name-helper-text"
                  />
                </FormControl>
  
                <FormControl mt={4}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    aria-describedby="phone-helper-text"
                  />
                </FormControl>
              </form>
            </ModalBody>
  
            <ModalFooter>
            <Button variantColor="teal" mr={3} onClick={handleSubmit}>
              Signup
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
          </ModalContent>
          </Modal>

          </>
  );
  }