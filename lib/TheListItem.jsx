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
    const { Col, Title, SubTitle } = TheListItem
    let {
      className,
      children,
      thumbnail,
      disclosure,
      to,
      thumbnailWidth,
      thumbnailHeight,
      title,
      subTitle,
      borderless
    } = props
    const Inner = to ? TheLink : 'span'
    return (
      <li { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          { ...eventHandlersFor(props, { except: [] })}
          className={ classnames('the-list-item', className, {
            'the-list-item-borderless': borderless
          }) }
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
            {title && (<Title {...{ title }}/>)}
            {subTitle && (<SubTitle {...{ subTitle }}/>)}
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

  static Col (props) {
    const { className, children, wide = false } = props
    return (
      <div { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
           className={classnames('the-list-item-col', className, {
             'the-list-item-col-wide': wide
           })}>
        { children }
      </div>
    )
  }

  static Title (props) {
    const { className } = props
    return (
      <h3 { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          className={classnames('the-list-item-title', className, {})}>
        {props.title}
      </h3>
    )
  }

  static SubTitle (props) {
    const { className } = props
    return (
      <div { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
           className={classnames('the-list-item-sub-title', className, {})}>
        {props.subTitle}
      </div>
    )
  }
}

TheListItem.DISCLOSURE_ICON = 'fa fa-angle-right'

TheListItem.propTypes = {
  /** Thumbnail image url */
  thumbnail: PropTypes.string,
  /** Height of thumbnail */
  thumbnailHeight: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** Width of thumbnail */
  thumbnailWidth: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  /** Show disclosure icon */
  disclosure: PropTypes.bool,
  /** Link to */
  to: PropTypes.string,
  /** Title text */
  title: PropTypes.string,
  /** Sub title text */
  subTitle: PropTypes.string,
  borderless: PropTypes.bool
}

TheListItem.defaultProps = {
  thumbnailHeight: 92,
  thumbnailWidth: 92,
  thumbnail: null,
  disclosure: false,
  to: null,
  borderless: false
}

TheListItem.displayName = 'TheListItem'

export default TheListItem
