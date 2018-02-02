'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { TheIcon } from 'the-icon'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * Group of list
 */
class TheListGroup extends React.Component {
  render () {
    const {props} = this
    const {
      className,
      children
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

  static Header (props) {
    let {className, children} = props
    return (
      <h3 {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={classnames('the-list-group-header', className)}
      >
        {children}
      </h3>
    )
  }

  static Body (props) {
    let {className, children} = props
    return (
      <div {...htmlAttributesFor(props, {except: ['className']})}
           {...eventHandlersFor(props, {except: []})}
           className={classnames('the-list-group-body', className)}
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
