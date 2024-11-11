import React from "react";
import { Pie } from "@ant-design/plots";
import { groupBy } from "lodash";

function DemoPie({ fieldName, dataArray }) {
  const data = Object.entries(groupBy(dataArray, fieldName)).map((pair) => {
    return { type: pair[0], value: pair[1].length };
  });

  const config = {
    data,
    angleField: "value",
    colorField: "type",
    autoFit: true,
    radius: 0.8,
    label: {
      text: (d) => `${d.type}\n ${d.value}`,
      position: "spider",
    },
    legend: false,
  };
  return <Pie {...config} />;
}

export default DemoPie;
