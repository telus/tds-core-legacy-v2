import React from 'react'
import SVGIcon from '../SVGIcon'

const Success = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <defs>
        <path
          id="success-a"
          d="M12,23 C5.93469565,23 1,18.0653043 1,12 C1,5.93469565 5.93469565,1 12,1 C18.0653043,1 23,5.93469565 23,12 C23,18.0653043 18.0653043,23 12,23 Z M12,1.95652174 C6.46173913,1.95652174 1.95652174,6.46173913 1.95652174,12 C1.95652174,17.5382609 6.46173913,22.0434783 12,22.0434783 C17.5382609,22.0434783 22.0434783,17.5382609 22.0434783,12 C22.0434783,6.46173913 17.5382609,1.95652174 12,1.95652174 Z M10.5652174,16.7826087 C10.4427826,16.7826087 10.3203478,16.7357391 10.2266087,16.6429565 L5.444,11.8603478 C5.25747826,11.6738261 5.25747826,11.3706087 5.444,11.184087 C5.63052174,10.9975652 5.93373913,10.9975652 6.12026087,11.184087 L10.5652174,15.628087 L17.8787826,8.31452174 C18.0653043,8.128 18.3685217,8.128 18.5550435,8.31452174 C18.7415652,8.50104348 18.7415652,8.80426087 18.5550435,8.99078261 L10.9028696,16.6429565 C10.810087,16.7357391 10.6876522,16.7826087 10.5652174,16.7826087 Z"
        />
      </defs>
      <use transform="translate(-1 -1)" xlinkHref="#success-a" />
    </svg>
  </SVGIcon>
)

Success.displayName = 'DecorativeIcon'

export default Success
