/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconGiftCardO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M113.777664 227.555328v568.889344H910.22336V227.555328H113.77664z m0-56.88832H910.22336c31.418368 0 56.88832 25.469952 56.88832 56.88832v568.889344c0 31.418368-25.469952 56.88832-56.88832 56.88832H113.77664c-31.418368 0-56.88832-25.469952-56.88832-56.88832V227.555328c0-31.418368 25.469952-56.88832 56.88832-56.88832z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M597.584896 547.371008l73.4208 36.7104c14.051328 7.026688 19.746816 24.112128 12.721152 38.163456-7.02464 14.050304-24.111104 19.745792-38.161408 12.720128l-105.120768-52.559872v270.927872h-56.889344V582.40512l-105.120768 52.559872c-14.050304 7.025664-31.136768 1.3312-38.161408-12.720128-7.025664-14.051328-1.3312-31.136768 12.720128-38.162432l73.66656-36.83328c-33.435648-7.036928-59.881472-17.62304-73.867264-30.80192-42.267648-39.8336-42.267648-106.343424-0.605184-148.005888 20.073472-20.073472 46.845952-31.17056 75.23328-31.17056 20.145152 0 39.469056 5.583872 56.13568 15.968256V227.555328h56.88832v126.201856c16.850944-10.71616 36.481024-16.4864 56.957952-16.4864 28.387328 0 55.160832 11.097088 75.23328 31.17056 41.663488 41.662464 41.663488 108.172288-0.60416 148.004864-14.066688 13.256704-40.737792 23.888896-74.446848 30.9248zM462.426112 408.66816c-9.41056-9.41056-21.706752-14.508032-35.00544-14.508032-13.294592 0-25.598976 5.09952-35.006464 14.508032-19.245056 19.245056-19.245056 48.812032-0.605184 66.378752 9.276416 8.741888 45.273088 18.622464 90.057728 22.8608-3.59424-44.246016-11.695104-81.560576-19.44064-89.239552z m99.971072 0c-7.744512 7.68-15.845376 44.99456-19.439616 89.239552 44.78464-4.238336 80.781312-14.118912 90.056704-22.8608 18.639872-17.56672 18.639872-47.13472-0.60416-66.378752-9.408512-9.408512-21.712896-14.508032-35.007488-14.508032-13.298688 0-25.593856 5.097472-35.00544 14.508032z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

VanIconGiftCardO.defaultProps = {
  size: 18,
};

VanIconGiftCardO = React.memo ? React.memo(VanIconGiftCardO) : VanIconGiftCardO;

export default VanIconGiftCardO;
