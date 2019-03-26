import React from 'react'
import SVGIcon from '../SVGIcon'

const Laptop = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="18"
      viewBox="0 0 24 18"
    >
      <defs>
        <path
          id="laptop-a"
          d="M23.5,16.5 L22,16.5 L22,5 C22,4.173 21.327,3.5 20.5,3.5 L3.5,3.5 C2.673,3.5 2,4.173 2,5 L2,16.5 L0.5,16.5 C0.224,16.5 0,16.724 0,17 L0,18 C0,19.378 1.122,20.5 2.5,20.5 L21.5,20.5 C22.878,20.5 24,19.378 24,18 L24,17 C24,16.724 23.776,16.5 23.5,16.5 Z M3,5 C3,4.724 3.224,4.5 3.5,4.5 L20.5,4.5 C20.776,4.5 21,4.724 21,5 L21,16.5 L16,16.5 C15.867,16.5 15.74,16.553 15.648,16.646 L14.794,17.5 L9.208,17.5 L8.354,16.646 C8.26,16.553 8.133,16.5 8,16.5 L3,16.5 L3,5 Z M23,18 C23,18.827 22.327,19.5 21.5,19.5 L2.5,19.5 C1.673,19.5 1,18.827 1,18 L1,17.5 L7.793,17.5 L8.646,18.354 C8.74,18.447 8.867,18.5 9,18.5 L15,18.5 C15.133,18.5 15.26,18.447 15.353,18.354 L16.207,17.5 L23,17.5 L23,18 Z"
        />
      </defs>
      <use transform="translate(0 -3)" xlinkHref="#laptop-a" />
    </svg>
  </SVGIcon>
)

Laptop.displayName = 'DecorativeIcon'

export default Laptop
