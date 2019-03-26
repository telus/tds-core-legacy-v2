import React from 'react'
import SVGIcon from '../SVGIcon'

const Record = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="10" viewBox="0 0 24 10">
      <defs>
        <path
          id="record-a"
          d="M19,17 L5,17 C4.724,17 4.5,16.776 4.5,16.5 C4.5,16.224 4.724,16 5,16 L19,16 C19.276,16 19.5,16.224 19.5,16.5 C19.5,16.776 19.276,17 19,17 Z M5,17 C2.243,17 0,14.757 0,12 C0,9.243 2.243,7 5,7 C7.757,7 10,9.243 10,12 C10,14.757 7.757,17 5,17 Z M5,8 C2.794,8 1,9.794 1,12 C1,14.206 2.794,16 5,16 C7.206,16 9,14.206 9,12 C9,9.794 7.206,8 5,8 Z M19,17 C16.243,17 14,14.757 14,12 C14,9.243 16.243,7 19,7 C21.757,7 24,9.243 24,12 C24,14.757 21.757,17 19,17 Z M19,8 C16.794,8 15,9.794 15,12 C15,14.206 16.794,16 19,16 C21.206,16 23,14.206 23,12 C23,9.794 21.206,8 19,8 Z"
        />
      </defs>
      <use transform="translate(0 -7)" xlinkHref="#record-a" />
    </svg>
  </SVGIcon>
)

Record.displayName = 'DecorativeIcon'

export default Record
