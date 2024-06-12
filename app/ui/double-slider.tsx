"use client";

import { Stack, Slider } from "@mui/material";

function valuetext(value: number) {
  return `${value}$`;
}

const marks = [
  {
    value: 100,
    label: "100$",
  },
  {
    value: 500,
    label: "500$",
  },
  {
    value: 1000,
    label: "1000$",
  },
  {
    value: 1500,
    label: "1500$",
  },
  {
    value: 2000,
    label: "2000$",
  },
];

export default function DoubleSlider({
  setSliderValues,
}: {
  setSliderValues: any;
}) {
  return (
    <Stack spacing={1} direction="row" className="text-white w-[95%] m-auto">
      <Slider
        getAriaLabel={() => "Range"}
        orientation="horizontal"
        getAriaValueText={valuetext}
        defaultValue={[500, 1000]}
        valueLabelDisplay="auto"
        marks={marks}
        min={100}
        max={2000}
        className={`text-[#bc43f0]`}
        onChange={(e, newValue) => setSliderValues(newValue)}
      />
    </Stack>
  );
}
