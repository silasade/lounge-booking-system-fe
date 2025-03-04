import { Statistic, StatisticProps } from "antd";
import React from "react";
import { TrendDown, TrendUp } from "./icons";
type Statistics = StatisticProps & {
  value: number;
  up: boolean;
};
function Statistics({ value, up }: Statistics) {
  return (
    <Statistic
      value={value}
      precision={1}
      rootClassName="text-[16px] font-[600]"
      valueStyle={{ color: up ? "#00B69B" : "#F93C65", fontSize:"16px", display:"flex",alignItems:"center"
       }}
      prefix={up ? <TrendUp /> : <TrendDown />}
      suffix="%"
    />
  );
}

export default Statistics;
