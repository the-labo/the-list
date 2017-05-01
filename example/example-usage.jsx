'use strict'

import React from 'react'
import { TheList, TheListStyle } from 'the-list'

class ExampleComponent extends React.PureComponent {
  render () {
    const { Item } = TheList
    return (
      <div>
        <TheListStyle/>
        <TheList>
          <Item disclosure>Foo</Item>
        </TheList>
      </div>

    )
  }
}

export default ExampleComponent
