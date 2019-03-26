import React from 'react'
import SVGIcon from '../SVGIcon'

const Diagram = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id="diagram-a"
          d="M1.4385,22.958 L8.3135,22.958 L8.3135,16.083 L1.4385,16.083 L1.4385,22.958 Z M8.5635,7.917 L15.4385,7.917 L15.4385,1.042 L8.5635,1.042 L8.5635,7.917 Z M15.6875,22.958 L22.5615,22.958 L22.5615,16.083 L15.6875,16.083 L15.6875,22.958 Z M23.0835,15.041 L19.6455,15.041 L19.6455,14.374 C19.6455,12.949 18.5715,11.875 17.1465,11.875 L12.5215,11.875 L12.5215,8.958 L15.9595,8.958 C16.2665,8.958 16.4795,8.744 16.4795,8.438 L16.4795,0.521 C16.4795,0.214 16.2665,0 15.9595,0 L8.0425,0 C7.7355,0 7.5215,0.214 7.5215,0.521 L7.5215,8.438 C7.5215,8.744 7.7355,8.958 8.0425,8.958 L11.4795,8.958 L11.4795,11.875 L6.8545,11.875 C5.4295,11.875 4.3545,12.949 4.3545,14.374 L4.3545,15.041 L0.9175,15.041 C0.6105,15.041 0.3965,15.255 0.3965,15.562 L0.3965,23.479 C0.3965,23.786 0.6105,24 0.9175,24 L8.8335,24 C9.1405,24 9.3545,23.786 9.3545,23.479 L9.3545,15.562 C9.3545,15.255 9.1405,15.041 8.8335,15.041 L5.3965,15.041 L5.3965,14.374 C5.3965,13.571 6.0505,12.917 6.8545,12.917 L17.1465,12.917 C17.9495,12.917 18.6035,13.571 18.6035,14.374 L18.6035,15.041 L15.1675,15.041 C14.8605,15.041 14.6455,15.255 14.6455,15.562 L14.6455,23.479 C14.6455,23.786 14.8605,24 15.1675,24 L23.0835,24 C23.3905,24 23.6035,23.786 23.6035,23.479 L23.6035,15.562 C23.6035,15.255 23.3905,15.041 23.0835,15.041 L23.0835,15.041 Z"
        />
      </defs>
      <use fillRule="evenodd" xlinkHref="#diagram-a" />
    </svg>
  </SVGIcon>
)

Diagram.displayName = 'DecorativeIcon'

export default Diagram
