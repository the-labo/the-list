'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheIcon } from 'the-icon'

/**
 * Group of list
 */
class TheListGroup extends React.Component {
  static Body (props) {
    let {children, className} = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={classnames('the-list-group-body', className)}
      >
        {children}
      </div>
    )
  }

  static Header (props) {
    let {children, className} = props
    return (
      <h3 {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={classnames('the-list-group-header', className)}
      >
        {children}
      </h3>
    )
  }

  render () {
    const {props} = this
    const {
      children,
      className,
    } = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={classnames('the-list-group', className)}
      >
        {children}
      </div>
    )
  }
}

TheListGroup.propTypes = {}

TheListGroup.defaultProps = {}

TheListGroup.displayName = 'TheListGroup'

export default TheListGroup
