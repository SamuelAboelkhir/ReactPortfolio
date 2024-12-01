import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "NoThanks boardgame",
    description:
      "A boardgame created using React and BoardGame.io.",
    getImageSrc: () => require("../images/BoardGameUI.png"),
    link: "https://github.com/BlackDovah/NoThanksBoardGame",
  },
  {
    title: "React simple calculator",
    description:
      "A calculator created using React and tailwindcss as my very first project.",
    getImageSrc: () => require("../images/reactCalculator.png"),
    link: "https://github.com/BlackDovah/ReactCalculator"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
