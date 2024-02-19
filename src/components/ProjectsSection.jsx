import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit iure autem maiores rerum ipsa hic sapiente itaque corporis ea sint facilis, aliquid repellat adipisci accusantium recusandae quaerat repellendus dicta",
    getImageSrc: () => require("../images/1.png"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum similique dicta eos. Ratione totam blanditiis labore ducimus ut et. Nostrum praesentium eius ex fugit amet provident atque quis quia mollitia. ",
    getImageSrc: () => require("../images/beyond-eris-solutions-task.netlify.app_.png"),
  },
  {
    title: "Photo Gallery",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptas praesentium sed quae voluptatum sequi, natus placeat temporibus repellat error ipsum. Distinctio quibusdam cupiditate sapiente consequuntur error, deserunt tempore? Quae? ",
    getImageSrc: () => require("../images/14.png"),
  },
  {
    title: "Event planner",
    description:
     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia provident iure incidunt, suscipit ex nobis adipisci quia blanditiis deleniti officiis totam nesciunt vitae, laboriosam sapiente, culpa consectetur vel exercitationem aliquam! ",
    getImageSrc: () => require("../images/bookmark.png"),
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
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;