'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheIcon } from 'the-icon'
import { TheImage } from 'the-image'
import { TheLink } from 'the-link'

/**
 * Item of list
 */
class TheListItem extends React.Component {
  static Col (props) {
    const {children, className, wide = false} = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           className={classnames('the-list-item-col', className, {
             'the-list-item-col-wide': wide,
           })}>
        {children}
      </div>
    )
  }

  static SubTitle (props) {
    const {className} = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           className={classnames('the-list-item-sub-title', className, {})}>
        {props.subTitle}
      </div>
    )
  }

  static Title (props) {
    const {className} = props
    return (
      <h3 {...htmlAttributesFor(props, {except: ['className']})}
          className={classnames('the-list-item-title', className, {})}>
        {props.title}
      </h3>
    )
  }

  render () {
    const {props} = this
    const {Col, SubTitle, Title} = TheListItem
    const {
      appendix,
      borderless,
      children,
      className,
      disclosure,
      subTitle,
      thumbnail,
      thumbnailHeight,
      thumbnailWidth,
      title,
      to,
    } = props
    const Inner = to ? TheLink : 'span'
    return (
      <li {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={classnames('the-list-item', className, {
            'the-list-item-borderless': borderless,
          })}
      >
        <Inner className='the-list-item-inner' to={to}>
          {
            thumbnail && (
              <Col><TheImage className='the-list-item-image'
                             height={thumbnailHeight}
                             src={thumbnail}
                             width={thumbnailWidth}
              /></Col>
            )
          }
          <Col wide>
            {title && (<Title {...{title}}/>)}
            {subTitle && (<SubTitle {...{subTitle}}/>)}
            {children}
          </Col>
          {
            appendix && (
              <Col>{appendix}</Col>
            )
          }
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
}

TheListItem.DISCLOSURE_ICON = 'fa fa-angle-right'

TheListItem.propTypes = {
  /** Appendix */
  appendix: PropTypes.node,
  borderless: PropTypes.bool,
  /** Show disclosure icon */
  disclosure: PropTypes.bool,
  /** Sub title text */
  subTitle: PropTypes.node,
  /** Thumbnail image url */
  thumbnail: PropTypes.string,
  /** Height of thumbnail */
  thumbnailHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Width of thumbnail */
  thumbnailWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Title text */
  title: PropTypes.node,
  /** Link to */
  to: PropTypes.string,
}

TheListItem.defaultProps = {
  appendix: null,
  borderless: false,
  disclosure: false,
  subTitle: null,
  thumbnail: null,
  thumbnailHeight: 92,
  thumbnailWidth: 92,
  title: null,
  to: null,
}

TheListItem.displayName = 'TheListItem'

export default TheListItem
