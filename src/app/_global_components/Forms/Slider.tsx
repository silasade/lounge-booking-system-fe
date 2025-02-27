import React, { useState } from "react";
import { Slider } from "antd";

type Range = {
  from: number;
  to: number;
};

interface SlidersProps {
  defaultValue?: [number, number];
  onRangeChange: (range: Range) => void;
  handleColor?: string;
  trackColor?: string;
}

const Sliders: React.FC<SlidersProps> = ({
  defaultValue = [20, 50],
  onRangeChange,
  handleColor = "#ff4d4f", // Default handle color (reddish)
  trackColor = "#1890ff", // Default track color (blueish)
}) => {
  const [range, setRange] = useState<number[]>(defaultValue);

  const handleChange = (value: number[]) => {
    if (value.length === 2) {
      setRange(value);
      onRangeChange({ from: value[0], to: value[1] });
    }
  };

  return (
    <div className="w-full sm:w-2/5">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <p>
          From &#8358; <strong>{range[0]}</strong>
        </p>
        <p>
          To &#8358; <strong>{range[1]}</strong>
        </p>
      </div>
      <Slider
        range={{ draggableTrack: true }}
        value={range}
        onChange={handleChange}
        handleStyle={[
          { backgroundColor: handleColor, borderColor: handleColor },
          { backgroundColor: handleColor, borderColor: handleColor },
        ]}
        trackStyle={[{ backgroundColor: trackColor }]}
        railStyle={{ backgroundColor: "#d9d9d9" }} // Optional rail color
      />
    </div>
  );
};

export default Sliders;
