'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheList */
const TheListStyle = ({ id, className, options }) => (
  <TheStyle { ...{ id } }
            className={ classnames('the-list-style', className) }
            styles={ TheListStyle.data(options) }
  />
)

TheListStyle.displayName = 'TheListStyle'
TheListStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheListStyle.defaultProps = {
  options: {}
}

TheListStyle.data = (options) => {
  const { ThemeValues } = TheStyle
  let {
    dominantColor = ThemeValues.dominantColor
  } = options
  return Object.assign({},
    asStyleData('.the-list', {
      '&': {
        margin: 0,
        padding: 0
      },
      '.the-list-item': {
        listStyle: 'none',
        padding: 0,
        margin: 0
      },
      '.the-list-item-inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      '.the-list-item-col': {
        '&.the-list-item-col-wide': {
          width: '100%'
        }
      }
    })
  )
}

export default TheListStyle
