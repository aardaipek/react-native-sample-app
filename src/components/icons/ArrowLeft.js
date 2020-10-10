import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeft(props) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-left_svg__feather arrow-left_svg__feather-arrow-left"
      {...props}
    >
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );
}

export default SvgArrowLeft;
