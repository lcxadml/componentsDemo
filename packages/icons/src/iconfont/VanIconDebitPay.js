/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconDebitPay = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M910.222336 170.667008c31.403008 0 56.88832 25.428992 56.88832 56.88832v568.889344c0 31.459328-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.428992-56.88832-56.88832V227.555328c0-31.459328 25.485312-56.88832 56.88832-56.88832z m0 170.665984H113.77664v455.11168H910.22336V341.332992z m0-113.77664H113.77664v56.88832H910.22336v-56.889344zM479.817728 714.55232c11.094016 11.092992 29.12768 11.092992 40.220672 0l40.220672-40.220672c11.092992-11.094016 11.092992-29.12768 0-40.220672-11.094016-11.092992-29.12768-11.092992-40.220672 0l-40.220672 40.220672c-11.092992 11.092992-11.092992 29.126656 0 40.220672m153.99936 0l40.219648-40.220672c11.092992-11.094016 11.092992-29.12768 0-40.220672-11.092992-11.092992-29.12768-11.092992-40.220672 0l-40.220672 40.220672c-11.092992 11.092992-11.092992 29.126656 0 40.220672 11.094016 11.092992 29.12768 11.092992 40.220672 0m113.777664 0l40.220672-40.220672c11.092992-11.094016 11.092992-29.12768 0-40.220672-11.092992-11.092992-29.126656-11.092992-40.220672 0l-40.220672 40.220672c-11.092992 11.092992-11.092992 29.126656 0 40.220672 11.094016 11.092992 29.12768 11.092992 40.220672 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconDebitPay.defaultProps = {
  size: 18,
};

VanIconDebitPay = React.memo ? React.memo(VanIconDebitPay) : VanIconDebitPay;

export default VanIconDebitPay;
