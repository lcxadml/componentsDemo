/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconNewspaperO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M796.444672 853.332992h56.88832V682.667008h-56.88832v170.665984z m56.88832-227.555328c31.460352 0 56.889344 25.428992 56.889344 56.889344v170.665984c0 31.460352-25.428992 56.889344-56.889344 56.889344H170.667008c-31.460352 0-56.889344-25.428992-56.889344-56.889344V170.667008c0-31.460352 25.428992-56.889344 56.889344-56.889344h568.88832c31.459328 0 56.889344 25.428992 56.889344 56.889344V625.77664h56.88832zM170.667008 853.332992h568.88832V170.667008H170.667008v682.665984z m113.77664-227.555328H398.22336V455.110656H284.444672v170.667008zM256 682.667008c-15.709184 0-28.444672-12.735488-28.444672-28.444672V426.667008c0-15.710208 12.735488-28.444672 28.444672-28.444672h170.667008c15.70816 0 28.443648 12.734464 28.443648 28.444672v227.555328c0 15.709184-12.734464 28.444672-28.443648 28.444672H256z m0-341.334016c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672h398.222336c15.709184 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H256z m284.444672 113.777664c-15.709184 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.735488-28.444672 28.444672-28.444672h113.77664c15.710208 0 28.445696 12.734464 28.445696 28.444672 0 15.70816-12.735488 28.443648-28.444672 28.443648H540.444672z m0 113.778688c-15.709184 0-28.444672-12.735488-28.444672-28.444672S524.735488 512 540.444672 512h113.77664c15.710208 0 28.445696 12.735488 28.445696 28.444672s-12.735488 28.444672-28.444672 28.444672H540.444672z m0.028672 113.77664c-15.725568 0-28.473344-12.746752-28.473344-28.47232 0-15.724544 12.747776-28.47232 28.473344-28.47232H654.19264c15.725568 0 28.473344 12.747776 28.473344 28.47232 0 15.725568-12.7488 28.473344-28.473344 28.473344H540.473344z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconNewspaperO.defaultProps = {
  size: 18,
};

VanIconNewspaperO = React.memo ? React.memo(VanIconNewspaperO) : VanIconNewspaperO;

export default VanIconNewspaperO;
