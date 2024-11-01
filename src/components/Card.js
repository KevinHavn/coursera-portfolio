import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	// Implement the UI for the Card component according to the instructions.
	// You should be able to implement the component with the elements imported above.
	// Feel free to import other UI components from Chakra UI if you wish to.

	return (
		<VStack background="white" borderRadius="md" >
			<Image src={imageSrc} borderRadius="md"/>
			<Heading color="black">{title}</Heading>
			<Text color="black">{description}</Text>
			<HStack>
				<Text color="black">See More</Text>
				<FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
			</HStack>
		</VStack>
	);
};

export default Card;
