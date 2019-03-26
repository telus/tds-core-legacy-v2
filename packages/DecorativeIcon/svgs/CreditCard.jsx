import React from 'react'
import SVGIcon from '../SVGIcon'

const CreditCard = props => (
  <SVGIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="16"
      viewBox="0 0 24 16"
    >
      <defs>
        <path
          id="creditcard-a"
          d="M23,7 L23,6.5 C23,5.673 22.327,5 21.5,5 L2.5,5 C1.673,5 1,5.673 1,6.5 L1,7 L23,7 Z M23,11 L1,11 L1,17.5 C1,18.327 1.673,19 2.5,19 L21.5,19 C22.327,19 23,18.327 23,17.5 L23,11 Z M21.5,20 L2.5,20 C1.122,20 0,18.878 0,17.5 L0,6.5 C0,5.122 1.122,4 2.5,4 L21.5,4 C22.878,4 24,5.122 24,6.5 L24,17.5 C24,18.878 22.878,20 21.5,20 Z M1,10 L23,10 L23,8 L1,8 L1,10 Z M9.5,15 L3.5,15 C3.224,15 3,14.776 3,14.5 C3,14.224 3.224,14 3.5,14 L9.5,14 C9.776,14 10,14.224 10,14.5 C10,14.776 9.776,15 9.5,15 Z M9.5,17 L3.5,17 C3.224,17 3,16.776 3,16.5 C3,16.224 3.224,16 3.5,16 L9.5,16 C9.776,16 10,16.224 10,16.5 C10,16.776 9.776,17 9.5,17 Z M19.5,17 L18.5,17 C17.673,17 17,16.327 17,15.5 L17,14.5 C17,13.673 17.673,13 18.5,13 L19.5,13 C20.327,13 21,13.673 21,14.5 L21,15.5 C21,16.327 20.327,17 19.5,17 Z M18.5,14 C18.224,14 18,14.224 18,14.5 L18,15.5 C18,15.776 18.224,16 18.5,16 L19.5,16 C19.776,16 20,15.776 20,15.5 L20,14.5 C20,14.224 19.776,14 19.5,14 L18.5,14 Z"
        />
      </defs>
      <use transform="translate(0 -4)" xlinkHref="#creditcard-a" />
    </svg>
  </SVGIcon>
)

CreditCard.displayName = 'DecorativeIcon'

export default CreditCard
