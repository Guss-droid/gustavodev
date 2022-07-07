import { Dispatch, SetStateAction } from "react";
import { Grid } from "@chakra-ui/react";

import { IconsComp } from "./IconsComp";

import { TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiChakraui,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";

interface ITecButtons {
  setTec: Dispatch<SetStateAction<number>>
}

export function TecButtons({ setTec }: ITecButtons) {
  return (
    <Grid
      gap={4}
      templateColumns={["1fr 1fr", "1fr 1fr", "repeat(4, 1fr)"]}
      minHeight="17rem"
      maxH="17.1rem"
    >
      <IconsComp
        label="React"
        color="blue.400"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(1)}
        icon={FaReact}
      />

      <IconsComp
        label="React native"
        color="blue.500"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(2)}
        icon={TbBrandReactNative}
      />

      <IconsComp
        label="NodeJs"
        color="green.500"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(3)}
        icon={FaNodeJs}
      />

      <IconsComp
        label="NextJs"
        color="gray.800"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(4)}
        icon={SiVercel}
      />

      <IconsComp
        label="Typescript"
        color="blue.600"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(5)}
        icon={SiTypescript}
      />

      <IconsComp
        label="Javascript"
        color="yellow.500"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(6)}
        icon={SiJavascript}
      />

      <IconsComp
        label="CSS"
        color="blue.400"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(7)}
        icon={SiCss3}
      />

      <IconsComp
        label="HTML"
        color="red.400"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(8)}
        icon={FaHtml5}
      />

      <IconsComp
        label="Sass, Scss"
        color="pink.400"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(9)}
        icon={FaSass}
      />

      <IconsComp
        label="Tailwind"
        color="cyan.600"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(10)}
        icon={SiTailwindcss}
      />

      <IconsComp
        label="ChakraUi"
        color="cyan.400"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(11)}
        icon={SiChakraui}
      />

      <IconsComp
        label="Git"
        color="red.500"
        bg="gray.50"
        borderWidth={1}
        borderColor="gray.150"
        onClick={() => setTec(12)}
        icon={FaGitAlt}
      />
    </Grid>
  )
}