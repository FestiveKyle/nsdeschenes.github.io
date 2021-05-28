import { gql } from '@apollo/client'

export const NEXT_LAUNCH = gql`
  query LaunchNext {
    launchNext {
      details
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      is_tentative
      launch_site {
        site_name_long
      }
      launch_date_utc
    }
  }
`
