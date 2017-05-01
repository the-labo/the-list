'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TheListStyle from './TheListStyle'
import TheListItem from './TheListItem'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

/**
 * List components
 */
class TheList extends React.PureComponent {
  render () {
    const s = this
    const { props } = s
    let {
      className,
      children
    } = props
    return (
      <ul { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          { ...eventHandlersFor(props, { except: [] })}
          className={ classnames('the-list', className) }
      >
        { children }
      </ul>
    )
  }
}

TheList.Style = TheListStyle
TheList.Item = TheListItem

TheList.propTypes = {}

TheList.defaultProps = {}

TheList.displayName = 'TheList'

export default TheList
