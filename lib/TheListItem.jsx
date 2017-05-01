'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { TheIcon } from 'the-icon'
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
      disclosure
    } = props
    return (
      <li { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          { ...eventHandlersFor(props, { except: [] })}
          className={ classnames('the-list-item', className) }
      >
        <div className='the-list-item-inner'>
          <Col wide>
            { children }
          </Col>
          {
            disclosure && (
              <Col><TheIcon className={TheListItem.DISCLOSURE_ICON}/></Col>
            )
          }
        </div>
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

TheListItem.DISCLOSURE_ICON = 'fa fa-direction-right'

TheListItem.propTypes = {
  /** Show disclosure icon */
  disclosure: PropTypes.bool
}

TheListItem.defaultProps = {
  disclosure: false
}

TheListItem.displayName = 'TheListItem'

export default TheListItem
