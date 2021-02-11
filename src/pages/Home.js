import React, { useEffect, useRef } from 'react'
import Particles from 'react-particles-js'
import { Center, Heading, Text, useBreakpoint } from '@chakra-ui/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Layout } from '../components/Layout'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)

  const currentBreakpoint = useBreakpoint()
  let particleCount
  switch (currentBreakpoint) {
    case 'sm':
      particleCount = 25
      break
    case 'md':
      particleCount = 75
      break
    default:
      particleCount = 200
      break
  }

  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('.particles'),
      {
        opacity: 0.4,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector('.particles'),
          start: 'top top',
          endTrigger: element.querySelector('.welcomeParagraph'),
          scrub: true,
        },
      },
    )
  }, [])

  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element.querySelector('.welcomeText'),
      {
        opacity: 1,
      },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element.querySelector('.particles'),
          start: 'top top-=100px',
          endTrigger: element.querySelector('.welcomeParagraph'),
          scrub: true,
        },
      },
    )
  }, [])

  return (
    <Layout mb="5em">
      <Center height="100vh" ref={ref}>
        <Particles
          className="particles"
          params={{
            particles: {
              color: {
                value: '#E10098',
              },
              line_linked: {
                color: '#E10098',
                opacity: 1,
              },
              number: {
                value: particleCount,
              },
              shape: {
                type: 'circle',
              },
              opacity: {
                value: 1,
              },
              size: {
                random: false,
                value: 2,
              },
            },
            fpsLimit: 30,
          }}
          height="100vh"
          width="90vw"
        />
        <Heading position="absolute" size="4xl" className="welcomeText">
          WELCOME
        </Heading>
      </Center>
      <Text pt="50px" pb="500px" className="welcomeParagraph">
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
