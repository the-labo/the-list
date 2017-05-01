'use strict'

import React from 'react'
import { TheListGroup, TheList, TheListStyle } from 'the-list'
import TheRouter from 'the-router'

const IMAGE_URL = 'https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/dummy/02.jpg'

class ExampleComponent extends React.PureComponent {
  render () {
    const { Item } = TheList
    return (
      <div>
        <TheRouter.Hash>
          <TheListStyle/>
          <TheListGroup>
            <TheListGroup.Header>Normal List</TheListGroup.Header>
            <TheListGroup.Body>
              <TheList>
                <Item disclosure>Foo</Item>
                <Item>Bar</Item>
                <Item disclosure>This is a very very very very very very very very very very
                  very very very very very very very very very very very long
                  content!</Item>
                <Item to='/about' disclosure>about</Item>
                <Item thumbnail={IMAGE_URL} disclosure>With Image</Item>
              </TheList>
            </TheListGroup.Body>
          </TheListGroup>
        </TheRouter.Hash>
      </div>

    )
  }
}

export default ExampleComponent
