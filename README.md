the-list
==========

<!---
This file is generated by the-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-list
[bd_travis_url]: http://travis-ci.org/the-labo/the-list
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-list.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-list
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-list.svg?token=
[bd_license_url]: https://github.com/the-labo/the-list/blob/master/LICENSE
[bd_npm_url]: http://www.npmjs.org/package/the-list
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-list.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

List of the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-list --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

[Live Demo](https://the-labo.github.io/the-list/doc/demo/index.html#/) is hosted on GitHub Page

```javascript
'use strict'

import React from 'react'
import { TheListGroup, TheList, TheListStyle } from 'the-list'
import { TheSpinStyle } from 'the-spin'
import { TheRouter } from 'the-router'

const IMAGE_URL = 'https://raw.githubusercontent.com/apeman-asset-labo/apeman-asset-images/master/dist/dummy/02.jpg'

class ExampleComponent extends React.PureComponent {
  render () {
    const {Item} = TheList
    return (
      <div>
        <TheRouter.Hash>
          <TheSpinStyle/>
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
                <Item icon='fas fa-car'
                      onThumbnail={() => console.log('Thumbnail clicked')}
                      thumbnail={IMAGE_URL} disclosure>With Icon</Item>

                <Item title='This is Title'
                      subTitle='This is Sub title'
                      appendix='This is appendix'
                />

                <Item title='This is Title'
                      subTitle='This is Sub title'
                >With sub content</Item>
              </TheList>
              <TheList alt={'This is empty list'}>
              </TheList>
            </TheListGroup.Body>

            <TheListGroup.Header>Horizontal List</TheListGroup.Header>
            <TheListGroup.Body>
              <TheList horizontal>
                <Item disclosure>Foo</Item>
                <Item>Bar</Item>
                <Item disclosure>This is a very very very very very very very very very very
                  very very very very very very very very very very very long
                  content!</Item>
                <Item to='/about' disclosure>about</Item>
                <Item thumbnail={IMAGE_URL} disclosure>With Image</Item>

                <Item title='This is Title'
                      subTitle='This is Sub title'
                />

                <Item title='This is Title'
                      subTitle='This is Sub title'
                >With sub content</Item>

                <Item title='This is Title'
                      subTitle='This is Sub title'
                      appendix={'This is appendix'}
                >With sub content</Item>
              </TheList>
            </TheListGroup.Body>
          </TheListGroup>
        </TheRouter.Hash>
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### TheList

List components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `alt` | node  |  | `'No Data Found'` |
| `horizontal` | bool  |  | `false` |
| `spinning` | bool  |  | `false` |
| `role` |   |  | `'list'` |

### TheListGroup

Group of list

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `role` |   |  | `'group'` |

### TheListItem

Item of list

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `appendix` | node  | Appendix | `null` |
| `borderless` | bool  | Render with borderless style | `false` |
| `disclosure` | bool  | Show disclosure icon | `false` |
| `icon` | string  | Icon class | `` |
| `subTitle` | node  | Sub title text | `null` |
| `thumbnail` | string  | Thumbnail image url | `null` |
| `thumbnailHeight` | union  | Height of thumbnail | `72` |
| `thumbnailWidth` | union  | Width of thumbnail | `72` |
| `title` | node  | Title text | `null` |
| `to` | union  | Link to | `null` |
| `onThumbnail` |   |  | `null` |
| `role` |   |  | `'listitem'` |

### TheListStyle

Style for TheList

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-list/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][the_labo_url]

[the_labo_url]: https://github.com/the-labo

<!-- Links End -->
