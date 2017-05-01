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
    contentWidth = ThemeValues.contentWidth,
    backgroundColor = ThemeValues.backgroundColor,
    tappableHeight = ThemeValues.tappableHeight,
    lightBorderColor = ThemeValues.lightBorderColor,
    lightLinkColor = ThemeValues.lightLinkColor,
    lightBackgroundColor = ThemeValues.lightBackgroundColor,
    contentPadding = ThemeValues.contentPadding
  } = options
  return Object.assign({},
    asStyleData('.the-list', {
      '&': {
        margin: 0,
        padding: 0,
        backgroundColor,
        maxWidth: contentWidth
      },
      '.the-list-item': {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        minHeight: tappableHeight,
        borderBottom: `1px solid ${lightBorderColor}`
      },
      '.the-list-item-inner': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: lightLinkColor,
        textDecoration: 'none',
        padding: `${contentPadding}px ${contentPadding * 2}px`,
        margin: 0,
        '&:hover': {},
        '&:active': {}
      },
      '.the-list-item-col': {
        '&.the-list-item-col-wide': {
          width: '100%'
        }
      },
      '.the-list-item-image': {}
    }),
    asStyleData('.the-list-group', {
      '&': {
        display: 'block'
      },
      '.the-list-group-header': {
        fontSize: 'smaller',
        backgroundColor: lightBackgroundColor,
        borderBottom: `1px solid ${lightBorderColor}`,
        margin: 0,
        padding: '0 8px'
      },
      '.the-list-group-body': {}
    })
  )
}

export default TheListStyle
