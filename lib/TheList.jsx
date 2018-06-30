'use strict'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheCondition } from 'the-condition'
import { TheSpin } from 'the-spin'
import TheListItem from './TheListItem'
import TheListStyle from './TheListStyle'

/**
 * List components
 */
class TheList extends React.Component {
  render () {
    const {props} = this
    const {
      alt,
      children,
      className,
      horizontal,
      spinning,
    } = props
    const empty = props.empty || React.Children.count(children) === 0
    return (
      <ul {...htmlAttributesFor(props, {except: ['className', 'alt']})}
          {...eventHandlersFor(props, {except: []})}
          className={classnames('the-list', className, {
            'the-list-horizontal': horizontal,
          })}
      >
        <TheCondition if={!!spinning}>
          <TheSpin cover
                   enabled
                   size='x-large'
          />
        </TheCondition>
        <TheCondition if={empty}>
          <li className='the-list-alt'>{alt}</li>
        </TheCondition>
        {children}
      </ul>
    )
  }
}

TheList.Style = TheListStyle
TheList.Item = TheListItem

TheList.propTypes = {
  alt: PropTypes.node,
  horizontal: PropTypes.bool,
  spinning: PropTypes.bool,
}

TheList.defaultProps = {
  alt: 'No Data Found',
  horizontal: false,
  role: 'list',
  spinning: false,
}

TheList.displayName = 'TheList'

export default TheList
