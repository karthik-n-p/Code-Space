import { useState } from "react";
import { Icon, Box, Flex, Collapse } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex align="center">
      <Icon
        as={FontAwesomeIcon}
        icon={faBars}
        boxSize={6}
        cursor="pointer"
        onClick={handleMenuToggle}
      />
      <Collapse in={isMenuOpen} animateOpacity>
        <Box
          bg="gray.200"
          p={4}
          position="absolute"
          top="100%"
          right={0}
          zIndex={10}
        >
          {/* Menu content goes here */}
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </Box>
      </Collapse>
    </Flex>
  );
}