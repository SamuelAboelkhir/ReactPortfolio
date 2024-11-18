import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myImage from "../images/1675893334798.jpeg";

const greeting = "Hello, I am Samuel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="front-section"
  >
    <VStack>
      <Avatar name="Samuel" src={myImage} />
      <Heading size="sm">{greeting}</Heading>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
