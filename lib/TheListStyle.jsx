'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheList */
const TheListStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={classnames('the-list-style', className)}
            styles={TheListStyle.data(options)}
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
  const {ThemeValues} = TheStyle
  const {
    contentWidth = ThemeValues.contentWidth,
    backgroundColor = ThemeValues.backgroundColor,
    tappableHeight = ThemeValues.tappableHeight,
    lightBorderColor = ThemeValues.lightBorderColor,
    lightLinkColor = ThemeValues.lightLinkColor,
    lightBackgroundColor = ThemeValues.lightBackgroundColor,
    lightTextColor = ThemeValues.lightTextColor,
    contentPadding = ThemeValues.contentPadding
  } = options
  return Object.assign({},
    asStyleData('.the-list', {
      '&': {
        margin: 0,
        padding: 0,
        backgroundColor,
        position: 'relative',
      },
      '.the-list-item': {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        minHeight: tappableHeight,
        borderBottom: `1px solid ${lightBorderColor}`,
        '&.the-list-item-borderless': {
          border: 'none'
        }
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
      '.the-list-item-image': {
        marginRight: '8px'
      },
      '.the-list-item-title': {
        margin: 0,
        padding: '0 4px',
        fontWeight: 'normal'
      },
      '.the-list-item-sub-title': {
        margin: 0,
        padding: '0 4px',
        fontSize: 'small',
        color: lightTextColor
      }
    }),
    asStyleData('.the-list-horizontal', {
      '&': {
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'auto',
        margin: '0',
        padding: '8px 4px'
      },
      '.the-list-item': {
        display: 'block',
        width: 'auto',
        margin: 0,
        overflow: 'hidden',
        flexShrink: 0,
        maxWidth: '100%',
        border: 'none',
        '.the-list-item-inner': {
          padding: '8px',
          border: `1px solid ${lightBorderColor}`,
          margin: '8px'
        },
        '&.the-list-item-borderless': {
          '.the-list-item-inner': {
            border: 'none'
          }
        }
      }

    }),
    asStyleData('.the-list-group', {
      '&': {
        display: 'block',
        margin: '8px 0'
      },
      '.the-list-group-header': {
        fontSize: 'smaller',
        fontWeight: 'normal',
        backgroundColor: lightBackgroundColor,
        borderBottom: `1px solid ${lightBorderColor}`,
        color: lightTextColor,
        margin: 0,
        padding: '0 8px'
      },
      '.the-list-group-body': {}
    })
  )
}

export default TheListStyle
