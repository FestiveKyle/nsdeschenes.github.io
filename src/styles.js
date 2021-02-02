import { mode } from '@chakra-ui/react'

const styles = {
  global: (props) => ({
    fontFamily: 'body',
    color: mode('gray.800', 'whiteAlpha.900')(props),
    bg: mode('white', 'gray.800')(props),
    lineHeight: 'base',
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: 'proportional-nums',
  }),
}

export default styles
