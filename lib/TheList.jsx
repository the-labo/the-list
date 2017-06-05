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
      children,
      horizontal
    } = props
    return (
      <ul { ...htmlAttributesFor(props, { except: [ 'className' ] }) }
          { ...eventHandlersFor(props, { except: [] })}
          className={ classnames('the-list', className, {
            'the-list-horizontal': horizontal
          }) }
      >
        { children }
      </ul>
    )
  }
}

TheList.Style = TheListStyle
TheList.Item = TheListItem

TheList.propTypes = {
  horizontal: PropTypes.bool
}

TheList.defaultProps = {
  horizontal: false
}

TheList.displayName = 'TheList'

export default TheList
