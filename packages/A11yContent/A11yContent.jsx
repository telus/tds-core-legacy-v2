import React from 'react'
import PropTypes from 'prop-types'

import styles from './A11yContent.modules.scss'
import safeRest from '../../shared/utils/safeRest'

/**
 * @version ./package.json
 */

const A11yContent = ({ children, ...rest }) => {
  return (
    <span {...safeRest(rest)} className={styles.a11yContent}>
      {children}
    </span>
  )
}

A11yContent.propTypes = {
  children: PropTypes.string.isRequired,
}
A11yContent.defaultProps = {}

export default A11yContent
