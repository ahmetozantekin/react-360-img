import React from 'react';
import PropTypes from 'prop-types';

import useScript from './utils/useScript';
import {AFRAME_URL} from './utils/configs';

function React360Img(props) {
  const {width, height, rotation, imgPath} = props;

  useScript(AFRAME_URL)

  const WH= {
    width,
    height
  }

  return (
    <>
      <div style={WH}>
        <a-scene embedded>
          <a-sky src={imgPath} rotation={rotation}></a-sky>
        </a-scene>
      </div>
    </>

  )
}

React360Img.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  rotation: PropTypes.string,
  imgPath: PropTypes.string.isRequired
}

React360Img.defaultProps = {
  width: '100vw',
  height: '100vh',
  rotation: '0 -130 0'
};

export default React360Img
