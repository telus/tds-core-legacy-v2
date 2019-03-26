import React from 'react'
import SVGIcon from '../SVGIcon'

const Visible = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14">
      <defs>
        <path
          id="visible-a"
          d="M12,19 C5.839,19 0.349,12.596 0.118,12.323 C-0.039,12.136 -0.039,11.863 0.118,11.677 C0.349,11.404 5.839,5 12,5 C19.18,5 23.722,11.441 23.911,11.716 C24.04,11.902 24.027,12.151 23.882,12.323 C23.651,12.596 18.161,19 12,19 Z M1.172,12 C2.365,13.29 7.061,18 12,18 C16.981,18 21.704,13.222 22.854,11.973 C21.858,10.703 17.779,6 12,6 C7.054,6 2.363,10.709 1.172,12 Z M12,16 C9.794,16 8,14.206 8,12 C8,9.794 9.794,8 12,8 C14.206,8 16,9.794 16,12 C16,14.206 14.206,16 12,16 Z M12,9 C10.346,9 9,10.346 9,12 C9,13.654 10.346,15 12,15 C13.654,15 15,13.654 15,12 C15,10.346 13.654,9 12,9 Z"
        />
      </defs>
      <use transform="translate(0 -5)" xlinkHref="#visible-a" />
    </svg>
  </SVGIcon>
)

Visible.displayName = 'DecorativeIcon'

export default Visible
