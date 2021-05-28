import React from 'react'
import { useQuery } from '@apollo/client'
import { Box, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import { NEXT_LAUNCH } from '../graphql/queries'

const Home = () => {
  const { loading, error, data } = useQuery(NEXT_LAUNCH)

  let launchContent = ''
  if (loading) launchContent = <Spinner size="lg" />
  else if (error)
    launchContent = (
      <>
        <Text fontWeight="bold">Uh oh, something went wrong!</Text>
        <Image src="https://imageresizer.static9.net.au/o26eRiPE_7p2IHQeVf-1xTxzlHg=/800x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2F269575ad-5443-4d4f-845e-7e912b8726c6" />
      </>
    )
  else if (!data?.launchNext?.details)
    launchContent = <Text>Sorry, no info for the next launch!</Text>
  else
    launchContent = (
      <>
        <Heading as="h3">Next SpaceX Launch:</Heading>
        {data.launchNext.launch_date_utc && (
          <Text>Date: {data.launchNext.launch_date_utc}</Text>
        )}
        {data.launchNext.launch_site.site_name_long && (
          <Text>Launch site: {data.launchNext.launch_site.site_name_long}</Text>
        )}
        {data.launchNext.rocket.rocket_name && (
          <Text>Rocket: {data.launchNext.rocket.rocket_name}</Text>
        )}
        {data.launchNext.details && (
          <Text>Details: {data.launchNext.details}</Text>
        )}
      </>
    )
  return (
    <Box w="100%">
      <p>Home</p>
      <Box
        w={{ base: '100%', md: '35%' }}
        borderWidth="2px"
        borderColor="black"
        boxShadow="md"
        minH="10em"
        p="1em"
        lineHeight="1.5em"
      >
        {launchContent}
      </Box>
    </Box>
  )
}

export default Home
