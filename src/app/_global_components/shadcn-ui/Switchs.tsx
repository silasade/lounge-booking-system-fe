"use client";
import { Switch } from "antd";
import React, { useState } from "react";

type SwicthsProp = {
  isChecked: boolean;
  id: string;
  onChange?: (checked: boolean) => void;
};

function Switchs({ isChecked, onChange, id }: SwicthsProp) {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleChange = () => {
    setChecked((prev) => !prev);
    console.log(id);
    onChange?.(!checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      style={{
        backgroundColor: checked ? "#27AE60" : "#BDBDBD",
      }}
    />
  );
}

export default Switchs;
