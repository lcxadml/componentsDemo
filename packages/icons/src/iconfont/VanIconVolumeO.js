/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconVolumeO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.667008 711.110656l224.561152 157.500416V155.388928L298.667008 312.889344H113.77664v398.221312h184.889344z m0 56.889344H99.555328c-23.564288 0-42.665984-17.19296-42.665984-38.4v-435.2c0-21.20704 19.101696-38.4 42.665984-38.4h199.11168L526.222336 85.332992c31.418368 0 56.88832 17.90976 56.88832 40.000512v773.332992c0 22.091776-25.469952 40.000512-56.88832 40.000512L298.667008 768zM833.81248 190.18752C916.170752 272.54784 967.110656 386.32448 967.110656 512c0 125.67552-50.939904 239.453184-133.298176 321.81248l-40.226816-40.226816C865.649664 721.521664 910.222336 621.966336 910.222336 512c0-109.966336-44.572672-209.52064-116.636672-281.585664l40.226816-40.226816zM713.133056 310.866944C764.606464 362.3424 796.444672 433.453056 796.444672 512c0 78.546944-31.838208 149.6576-83.31264 201.133056l-40.225792-40.226816c41.179136-41.179136 66.649088-98.06848 66.649088-160.90624 0-62.83776-25.469952-119.72608-66.649088-160.90624l40.226816-40.226816z m-20.4032 411.0336c-15.70816 0-28.443648-12.734464-28.443648-28.443648 0-15.710208 12.734464-28.444672 28.443648-28.444672 15.710208 0 28.444672 12.734464 28.444672 28.444672 0 15.70816-12.734464 28.443648-28.444672 28.443648z m1.072128-361.91744c-15.709184 0-28.444672-12.734464-28.444672-28.444672 0-15.70816 12.735488-28.443648 28.444672-28.443648s28.444672 12.734464 28.444672 28.443648c0 15.710208-12.735488 28.444672-28.444672 28.444672z m119.45472 482.414592c-15.70816 0-28.443648-12.735488-28.443648-28.444672s12.734464-28.444672 28.443648-28.444672c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672z m0.111616-604.019712c-15.710208 0-28.444672-12.734464-28.444672-28.443648 0-15.710208 12.734464-28.444672 28.444672-28.444672 15.70816 0 28.443648 12.734464 28.443648 28.444672 0 15.70816-12.734464 28.443648-28.443648 28.443648z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconVolumeO.defaultProps = {
  size: 18,
};

VanIconVolumeO = React.memo ? React.memo(VanIconVolumeO) : VanIconVolumeO;

export default VanIconVolumeO;
