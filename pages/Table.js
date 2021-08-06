import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React from 'react';
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "first quarter of 2021",
   
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "candy"
  },
  data: [
    {
      label: "January",
      value: "5"
    },
    {
      label: "Febrauary",
      value: "8"
    },
    {
      label: "March",
      value: "6"
    },
    {
      label: "April",
      value: "11"
    }
  ]
};

export class Table extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="pie2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
