/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconEyeO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M807.954432 376.316928C725.117952 301.010944 623.844352 256 512 256c-111.844352 0-213.117952 45.010944-295.954432 120.316928-58.077184 52.79744-101.267456 119.9616-102.250496 135.175168 0.137216-2.134016 1.082368 0.739328 3.4816 5.76512 4.56704 9.558016 11.793408 21.54496 21.1456 34.748416 21.890048 30.90432 52.386816 64.439296 87.351296 94.84288C312.73984 722.471936 412.740608 768 512 768c99.259392 0 199.261184-45.529088 286.226432-121.150464 34.96448-30.404608 65.461248-63.939584 87.351296-94.84288 9.352192-13.203456 16.57856-25.191424 21.1456-34.74944 2.217984-4.645888 3.192832-7.452672 3.43552-6.269952-1.860608-16.139264-44.746752-82.43712-102.204416-134.670336zM512 199.110656c284.444672 0 455.110656 256 455.110656 312.889344C967.110656 568.889344 768 824.889344 512 824.889344c-256 0-455.110656-256-455.110656-312.889344 0-56.889344 170.665984-312.889344 455.110656-312.889344z m0 142.22336c-94.256128 0-170.667008 76.409856-170.667008 170.665984S417.743872 682.667008 512 682.667008 682.667008 606.256128 682.667008 512 606.256128 341.332992 512 341.332992z m0 56.88832c62.83776 0 113.777664 50.939904 113.777664 113.777664S574.83776 625.777664 512 625.777664 398.222336 574.83776 398.222336 512 449.16224 398.222336 512 398.222336z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconEyeO.defaultProps = {
  size: 18,
};

VanIconEyeO = React.memo ? React.memo(VanIconEyeO) : VanIconEyeO;

export default VanIconEyeO;
