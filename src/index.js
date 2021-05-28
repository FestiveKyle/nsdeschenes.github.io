import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import App from './App'
import theme from './theme'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router basename="/">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Router>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
