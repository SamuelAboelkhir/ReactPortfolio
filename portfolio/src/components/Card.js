import { border, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import FullScreenSection from "./FullScreenSection";

const Card = ({ title, description, imageSrc, link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
        <VStack align="start" bg="white" overflow="hidden" borderRadius="lg" display="grid" color="black">
          <Image width="100%" src={imageSrc} />
          <Heading paddingLeft="4">{title}</Heading>
          <Text paddingLeft="4" fontWeight="semibold" color="gray.500">{description}</Text>
          <a href={link} target="_blank"><Text padding="4" fontWeight="semibold">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /> </Text></a>
        </VStack>
  );
};

export default Card;
