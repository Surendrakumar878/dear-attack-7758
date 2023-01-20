// import {
//     Flex,
//     Link,
//     useColorMode,
//     IconButton,
//     Drawer,
//     DrawerBody,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//     useTheme
//   } from "@chakra-ui/react";
//   import React, { useState } from "react";
//   function Navbar() {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const [show, setShow] = React.useState(false);
//     const btnRef = React.useRef();
//     const theme = useTheme();
//     const handleToggle = () => setShow(!show);
  
//     return (
//       <Flex
//         as="nav"
//         align="center"
//         justify="space-between"
//         wrap="wrap"
//         padding="1.5rem"
//         bg={colorMode === "light" ? "white" : "gray.800"}
//         color={colorMode === "light" ? "gray.800" : "white"}
//         position="fixed"
//       top={0}
//       width="100%"
//       zIndex={""}
//       >
//         <Flex align="center" mr={5}>
//           <Link href="#" fontWeight="bold" fontSize="xl">
//             MyApp
//           </Link>
//         </Flex>
//         <Flex align="center" mr={5}>
//           <Link href="#" mr={3}>
//             Home
//           </Link>
//           <Link href="#" mr={3}>
//             About
//           </Link>
//           <Link href="#" mr={3}>
//             Contact
//           </Link>
//         </Flex>
//         <Flex align="center" ml="auto" ref={btnRef}>
//           <IconButton
//             variant="outline"
//             onClick={toggleColorMode}
//             icon={colorMode === "light" ? "moon" : "sun"}
//             size="lg"
//             mr={3}
//           />
//           <IconButton
//             variant="outline"
//             onClick={handleToggle}
//             icon="menu"
//             size="lg"
//           />
//         </Flex>
//         <Drawer
//           isOpen={show}
//           placement="right"
//           onClose={() => setShow(false)}
//           finalFocusRef={btnRef}
//         >
//           <DrawerOverlay />
//           <DrawerContent>
//             <DrawerHeader>Menu</DrawerHeader>
//             <DrawerCloseButton />
//             <DrawerBody>
//               <Link href="#" mr={3}>
//                 Home
//               </Link>
//               <Link href="#" mr={3}>
//                 About
//               </Link>
//               <Link href="#" mr={3}>
//                 Contact
//               </Link>
//             </DrawerBody>
//             <DrawerFooter>
//               <IconButton
//                 variant="outline"
//                 onClick={toggleColorMode}
//                 icon={colorMode === "light" ? "moon" : "sun"}
//                 size="lg"
//                 mr={3}
//               />
//             </DrawerFooter>
//           </DrawerContent>
//         </Drawer>
//       </Flex>
//     );
//   }
  
//   export default Navbar;
  

import {
    Flex,
    Link,
    useColorMode,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useTheme,
    DrawerCloseButton
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [show, setShow] = React.useState(false);
    const btnRef = React.useRef();
    const theme = useTheme();
  
    const handleToggle = () => setShow(!show);
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg={colorMode === "light" ? "white" : "gray.800"}
        color={colorMode === "light" ? "gray.800" : "white"}
        position="fixed"
        top={0}
        width="100%"
        zIndex={"999"}
      >
        <Flex align="center" mr={5}>
          <Link href="#" fontWeight="bold" fontSize="xl">
            MyApp
          </Link>
        </Flex>
        <Flex align="center" mr={5}>
          <Link href="#" mr={3}>
            Home
          </Link>
          <Link href="#" mr={3}>
            About
          </Link>
          <Link href="#" mr={3}>
            Contact
          </Link>
        </Flex>
        <Flex align="center" ml="auto" ref={btnRef}>
          <IconButton
            variant="outline"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
            size="lg"
            mr={3}
          />
          <IconButton
            variant="outline"
            onClick={handleToggle}
            icon="menu"
            size="lg"
          />
        </Flex>
        <Drawer
          isOpen={show}
          placement="right"
          onClose={() => setShow(false)}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
              <Link href="#" mr={3}>
                Home
              </Link>
              <Link href="#" mr={3}>
                About
              </Link>
              <Link href="#" mr={3}>
                Contact
              </Link>
            </DrawerBody>
            <DrawerFooter>
              <IconButton
                variant="outline"
                onClick={toggleColorMode}
                icon={colorMode === "light" ? "moon" : "sun"}
                size="lg"
                mr={3}
             
                />
                             </DrawerFooter>
                           </DrawerContent>
                         </Drawer>
                       </Flex>
                    );
                   }
                  
                   export default Navbar;