/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconMinus = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M550.4 550.4h-409.6c-21.20704 0-38.4-17.19296-38.4-38.4s17.19296-38.4 38.4-38.4h742.4c21.20704 0 38.4 17.19296 38.4 38.4s-17.19296 38.4-38.4 38.4h-332.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconMinus.defaultProps = {
  size: 18,
};

VanIconMinus = React.memo ? React.memo(VanIconMinus) : VanIconMinus;

export default VanIconMinus;
