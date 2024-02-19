import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Tariq!";
const bio1 = "A React developer";
const bio2 = "specialised in Web Developmert";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
    <VStack spacing={3}>

<Avatar name="Tariq" src="https://tariq-portfolio.netlify.app/img/face-1.jpg" size="2xl"/>
<Heading size="md">{greeting}</Heading>
    </VStack>
<Heading size="2xl">{bio1}</Heading>
<Heading size="2xl">{bio2}</Heading>


    </VStack>
  </FullScreenSection>
);

export default LandingSection;