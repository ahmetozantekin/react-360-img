# React 360 Image

Just from the, equirectangular images convert to 360° images using with A-Frame.

## Installation

Install with [npm](https://www.npmjs.com/package/react-360-img) or
[yarn](https://github.com/yarnpkg/yarn).

```
npm i react-360-img
yarn add react-360-img
```

## Usage

```js

import React from 'react'
import React360Img from 'react-360-img'

const App = () => {
  return (
    <>
        <React360Img 
            imgPath="/image/path.jpg" />
    </>
  )
}

```

## Demo

See a live demo on [CodePen](https://codepen.io/ahmetozantekin/full/JjJBqwj)

## Props

| Name            | Type                    | Default Value |
| --------        | -----------------       | ------------- |
| imgPath         | String                  | [required]    |
| width           | String or Number        | 100vw         |
| height          | String or Number        | 100vh         |
| rotation        | String                  | 0 -130 0      |



## License
MIT

## Extra Notes

##### About Equirectangular Image

To be seamless, images should be [equirectangular](https://en.wikipedia.org/wiki/Equirectangular_projection). You can find some sample equirectangular images on [Flickr](https://www.flickr.com/groups/equirectangular/). 
To take an equirectangular photo, check out this [ngokevin](https://github.com/ngokevin/)'s [360-degree photographyguide](http://ngokevin.com/blog/360-photography/) 

##### About Original Project
Checkout the magnificent [A-Frame](https://aframe.io/) project
