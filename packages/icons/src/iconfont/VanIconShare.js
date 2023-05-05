/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconShare = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M591.135744 143.848448c0-23.177216 13.52704-29.034496 30.53056-12.76928L953.89696 449.153024c16.856064 16.160768 16.98304 42.308608 0.316416 58.405888L621.349888 828.832768c-16.687104 16.09728-30.214144 10.155008-30.214144-12.853248V647.947264C103.977984 647.94624 57.344 902.51264 57.344 902.51264s-7.51616-514.000896 533.791744-590.61248V143.849472z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconShare.defaultProps = {
  size: 18,
};

VanIconShare = React.memo ? React.memo(VanIconShare) : VanIconShare;

export default VanIconShare;
