import React from "react";
import ReactDOM from "react-dom";
import { Funnel } from "@ant-design/plots";
import { groupBy } from "lodash";

const DemoFunnel = ({ fieldName, dataArray }) => {
  const data = Object.entries(groupBy(dataArray, fieldName)).map((pair) => {
    return { stage: pair[0], number: pair[1].length };
  });
  const config = {
    data,
    xField: "stage",
    yField: "number",
    label: {
      text: (d) => `${d.stage}\n${d.number}`,
    },
    legend: false,
  };

  return <Funnel {...config} />;
};

export default DemoFunnel;
