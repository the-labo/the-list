'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { TheIcon } from 'the-icon'
import { TheImage } from 'the-image'
import { TheLink } from 'the-link'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Item of list
 */
class TheListItem extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    const { Col } = TheListItem
    let {
      className,
      children,
      thumbnail,
      disclosure,
      to,
      thumbnailWidth,
      thumbnailHeight
    } = props
    const Inner = to ? TheLink : 'span'
    return (
      <li { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          { ...eventHandlersFor(props, { except: [] })}
          className={ classnames('the-list-item', className) }
      >
        <Inner to={to} className='the-list-item-inner'>
          {
            thumbnail && (
              <Col><TheImage className='the-list-item-image'
                             src={thumbnail}
                             width={thumbnailWidth}
                             height={thumbnailHeight}
              /></Col>
            )
          }
          <Col wide>
            { children }
          </Col>
          {
            disclosure && (
              <Col>
                <TheIcon className={classnames('the-list-item-icon', TheListItem.DISCLOSURE_ICON)}/>
              </Col>
            )
          }
        </Inner>
      </li>
    )
  }

  static Col ({ className, children, wide = false }) {
    return (
      <div className={classnames('the-list-item-col', className, {
        'the-list-item-col-wide': wide
      })}>
        { children }
      </div>
    )
  }
}

TheListItem.DISCLOSURE_ICON = 'fa fa-angle-right'

TheListItem.propTypes = {
  /** Thumbnail image url */
  thumbnail: PropTypes.string,
  thumbnailHeight: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  thumbnailWidth: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** Show disclosure icon */
  disclosure: PropTypes.bool,
  /** Link to */
  to: PropTypes.string
}

TheListItem.defaultProps = {
  thumbnailHeight: 92,
  thumbnailWidth: 92,
  thumbnail: null,
  disclosure: false,
  to: null
}

TheListItem.displayName = 'TheListItem'

export default TheListItem
