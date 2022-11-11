import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'
import { saveAs } from "file-saver";

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1TihnMT0tmJcVRd20Klfn-o8Khfb3Sagv/view?usp=share_link"
    );
  };
  return (
    <Container>
      <Head>
        <title>Home - Muhammad Anjotho Satru</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Muhammad Anjotho Satru</Heading>
          <Text color={colorSecondary[colorMode]}>Freshgraduate from Computer Engineering student at Institut Teknologi Sepuluh Nopember. I have passion in technology. Especially in Web Development, Cloud Computing, and Network</Text>
          <br></br>
          <Button data-splitbee-event="Button Click" data-splitbee-event-type="Resume" onClick={saveFile}>View Resume</Button>
        </Flex>
      </Stack>
    </Container>
  )
}
