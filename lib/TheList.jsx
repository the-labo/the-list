'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheListStyle from './TheListStyle'
import TheListItem from './TheListItem'
import { TheSpin } from 'the-spin'
import { TheCondition } from 'the-condition'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * List components
 */
class TheList extends React.PureComponent {
  render () {
    const {props} = this
    const {
      className,
      children,
      horizontal,
      spinning,
    } = props
    return (
      <ul {...htmlAttributesFor(props, {except: ['className']})}
          {...eventHandlersFor(props, {except: []})}
          className={classnames('the-list', className, {
            'the-list-horizontal': horizontal
          })}
      >
        <TheCondition if={!!spinning}>
          <TheSpin cover
                   enabled
                   size='x-large'
          />
        </TheCondition>
        {children}
      </ul>
    )
  }
}

TheList.Style = TheListStyle
TheList.Item = TheListItem

TheList.propTypes = {
  horizontal: PropTypes.bool,
  spinning: PropTypes.bool,
}

TheList.defaultProps = {
  horizontal: false,
  spinning: false,
}

TheList.displayName = 'TheList'

export default TheList
