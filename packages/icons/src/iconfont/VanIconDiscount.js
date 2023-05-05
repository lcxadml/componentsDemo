/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconDiscount = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M481.456128 886.3232l30.570496-19.454976 30.55616 19.479552c33.123328 21.117952 57.868288 27.111424 75.708416 22.330368 17.840128-4.780032 36.273152-22.34368 54.4-57.192448l16.744448-32.190464 36.248576 1.608704c39.21408 1.7408 63.629312-5.43744 76.70784-18.515968 13.078528-13.079552 20.257792-37.49376 18.516992-76.70784l-1.609728-36.2496 32.190464-16.743424c34.849792-18.126848 52.412416-36.559872 57.193472-54.4 4.780032-17.841152-1.21344-42.586112-22.331392-75.70944l-19.479552-30.555136 19.456-30.570496c21.121024-33.189888 27.12064-57.9584 22.35392-75.747328-4.765696-17.787904-22.345728-36.23936-57.233408-54.421504l-32.091136-16.724992 1.54624-36.154368c1.683456-39.334912-5.50912-63.797248-18.511872-76.8s-37.465088-20.195328-76.8-18.512896l-36.154368 1.54624-16.724992-32.090112c-18.182144-34.88768-36.6336-52.467712-54.421504-57.234432-17.788928-4.765696-42.55744 1.232896-75.747328 22.354944l-30.557184 19.446784-30.548992-19.459072c-33.15712-21.118976-57.914368-27.11552-75.728896-22.342656-17.813504 4.773888-36.255744 22.344704-54.411264 57.213952l-16.734208 32.140288-36.201472-1.57696c-39.274496-1.712128-63.71328 5.47328-76.75392 18.51392s-20.226048 37.4784-18.51392 76.75392l1.57696 36.217856-32.160768 16.729088c-34.849792 18.126848-52.412416 36.559872-57.193472 54.4-4.780032 17.840128 1.21344 42.585088 22.331392 75.70944l19.479552 30.554112-19.456 30.570496c-21.121024 33.190912-27.12064 57.959424-22.35392 75.748352 4.765696 17.78688 22.345728 36.23936 57.233408 54.421504l32.091136 16.724992-1.54624 36.154368c-1.683456 39.334912 5.50912 63.797248 18.511872 76.8s37.465088 20.195328 76.8 18.512896l36.154368-1.54624 16.724992 32.090112c18.182144 34.88768 36.6336 52.467712 54.421504 57.233408 17.788928 4.76672 42.55744-1.232896 75.747328-22.35392zM512 934.31808c-45.51168 28.962816-85.850112 38.733824-121.014272 29.310976-35.165184-9.422848-65.214464-38.052864-90.146816-85.892096-53.916672 2.307072-93.735936-9.40032-119.457792-35.1232-25.721856-25.720832-37.429248-65.540096-35.1232-119.456768-47.838208-24.932352-76.469248-54.981632-85.891072-90.146816-9.422848-35.16416 0.34816-75.502592 29.310976-121.014272-28.9792-45.45536-38.74816-85.792768-29.310976-121.015296 9.437184-35.221504 38.068224-65.26976 85.891072-90.145792-2.348032-53.874688 9.35936-93.693952 35.1232-119.457792 25.76384-25.76384 65.583104-37.471232 119.457792-35.1232 24.90368-47.83104 54.95296-76.46208 90.146816-85.891072 35.192832-9.43104 75.531264 0.339968 121.014272 29.310976 45.51168-28.962816 85.850112-38.733824 121.014272-29.310976 35.165184 9.421824 65.214464 38.05184 90.146816 85.891072 53.916672-2.306048 93.735936 9.401344 119.457792 35.1232 25.721856 25.72288 37.429248 65.54112 35.1232 119.457792 47.838208 24.932352 76.469248 54.981632 85.891072 90.145792 9.422848 35.165184-0.34816 75.503616-29.310976 121.015296 28.9792 45.45536 38.74816 85.792768 29.310976 121.014272-9.437184 35.222528-38.068224 65.270784-85.891072 90.146816 2.388992 53.832704-9.3184 93.651968-35.1232 119.457792-25.8048 25.8048-65.624064 37.512192-119.457792 35.1232-24.876032 47.822848-54.924288 76.453888-90.146816 85.891072-35.221504 9.437184-75.559936-0.3328-121.014272-29.310976z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M627.142656 504.718336c25.03168 0 44.146688 8.646656 57.79968 26.851328 11.83232 15.473664 18.204672 36.409344 18.204672 62.350336 0 25.486336-6.372352 46.420992-18.204672 62.350336-13.652992 17.294336-32.768 26.396672-57.79968 26.396672-25.485312 0-45.056-9.10336-58.708992-26.396672-12.288-16.384-18.204672-36.864-18.204672-62.350336 0-25.940992 5.916672-46.876672 18.204672-62.350336 13.652992-18.204672 33.22368-26.851328 58.708992-26.851328z m-45.056-153.372672h37.31968L436.907008 689.03936h-36.864L582.086656 351.34464zM393.216 357.716992c25.030656 0 44.145664 8.64768 57.798656 26.852352 11.833344 15.47264 18.204672 36.40832 18.204672 62.349312 0 25.48736-6.371328 46.422016-18.204672 62.35136-13.652992 17.293312-32.768 26.395648-57.798656 26.395648-25.486336 0-45.056-9.102336-58.708992-26.396672-12.288-16.384-18.204672-36.864-18.204672-62.350336 0-25.940992 5.916672-46.875648 18.204672-62.349312C348.16 366.364672 367.72864 357.716992 393.216 357.716992z m233.926656 178.404352c-11.83232 0-20.48 5.915648-25.940992 17.748992-4.096 9.556992-5.916672 22.755328-5.916672 40.049664 0 16.384 1.820672 29.582336 5.916672 39.595008C606.662656 645.347328 615.31136 651.264 627.142656 651.264c11.378688 0 19.570688-6.371328 25.03168-18.659328 3.64032-9.558016 5.916672-22.300672 5.916672-38.684672 0-16.838656-2.276352-30.036992-6.372352-39.595008-5.005312-12.288-13.197312-18.203648-24.576-18.203648zM393.216 389.12c-11.833344 0-20.48 5.916672-25.940992 17.748992-4.096 9.558016-5.916672 22.756352-5.916672 40.049664 0 16.384 1.820672 29.58336 5.916672 39.595008C372.736 498.347008 381.382656 504.262656 393.216 504.262656c11.377664 0 19.569664-6.371328 25.030656-18.659328 3.641344-9.556992 5.916672-22.300672 5.916672-38.684672 0-16.838656-2.275328-30.036992-6.371328-39.593984-5.006336-12.288-13.198336-18.204672-24.576-18.204672z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

VanIconDiscount.defaultProps = {
  size: 18,
};

VanIconDiscount = React.memo ? React.memo(VanIconDiscount) : VanIconDiscount;

export default VanIconDiscount;
