import { Popover, PopoverProps } from "antd";
import React from "react";
type Props = PopoverProps & {
  children: React.ReactNode;
};
function Popovers({ children, ...rest }: Props) {
  return (
    <Popover
      {...rest}
      styles={{ body: {padding:0} }} // This removes the padding
    >
      {children}
    </Popover>
  );
}

export default Popovers;
