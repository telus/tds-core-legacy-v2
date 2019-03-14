import React from 'react'
import SVGIcon from '../SVGIcon'

const Camera = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="22"
      viewBox="0 0 24 22"
    >
      <defs>
        <path
          id="channels-a"
          d="M17.5,17 L0.5,17 C0.224,17 0,16.776 0,16.5 L0,1.5 C0,1.224 0.224,1 0.5,1 L17.5,1 C17.776,1 18,1.224 18,1.5 L18,16.5 C18,16.776 17.776,17 17.5,17 Z M1,16 L17,16 L17,2 L1,2 L1,16 Z M20.5,20 L3.5,20 C3.224,20 3,19.776 3,19.5 L3,17.5 C3,17.224 3.224,17 3.5,17 C3.776,17 4,17.224 4,17.5 L4,19 L20,19 L20,5 L18.5,5 C18.224,5 18,4.776 18,4.5 C18,4.224 18.224,4 18.5,4 L20.5,4 C20.776,4 21,4.224 21,4.5 L21,19.5 C21,19.776 20.776,20 20.5,20 Z M23.5,23 L6.5,23 C6.224,23 6,22.776 6,22.5 L6,20.5 C6,20.224 6.224,20 6.5,20 C6.776,20 7,20.224 7,20.5 L7,22 L23,22 L23,9 L21.5,9 C21.224,9 21,8.776 21,8.5 C21,8.224 21.224,8 21.5,8 L23.5,8 C23.776,8 24,8.224 24,8.5 L24,22.5 C24,22.776 23.776,23 23.5,23 Z"
        />
      </defs>
      <use fillRule="evenodd" transform="translate(0 -1)" xlinkHref="#channels-a" />
    </svg>
  </SVGIcon>
)

export default Camera
