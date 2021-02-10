import React from 'react'
import Particles from 'react-particles-js'
import { Box, Center, Heading, Text } from '@chakra-ui/react'

import { Layout } from '../components/Layout'

const Home = () => {
  const dotOpacity = 1
  const lineOpacity = dotOpacity

  return (
    <Layout mb="5em">
      <Center height="100vh" bg="gray.800">
        <Particles
          params={{
            particles: {
              color: {
                value: '#E10098',
              },
              line_linked: {
                color: '#E10098',
                opacity: lineOpacity,
              },
              number: {
                value: 200,
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: dotOpacity,
              },
              size: {
                random: false,
                value: 2,
              },
            },
          }}
          height="100%"
          width="100vw"
        >
          <Box
            textAlign="center"
            display="inline-block"
            color="#5CA17C"
            bgGradient="linear(to-b, green.200, pink.200)"
            backgroundAttachment="fixed"
            style={{
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}
          >
            <Heading size="4xl" textAlign="center" top="0">
              WELCOME
            </Heading>
          </Box>
        </Particles>
      </Center>
      <Text pt="50px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
        varius justo. Vivamus porttitor turpis in tortor feugiat dapibus. Nulla
        non interdum turpis, quis facilisis massa. Suspendisse nec tellus
        sagittis, pellentesque sapien eget, tincidunt dolor. Aenean non massa
        dapibus, euismod eros ut, tincidunt sapien. Nulla sagittis placerat nisi
        id placerat. Sed quis nisl et leo tincidunt ullamcorper a eget nisi.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod
        leo a varius tempor.
      </Text>
    </Layout>
  )
}

export default Home
