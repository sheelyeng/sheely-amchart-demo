import React, { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// import data from './data'

// Themes
am4core.useTheme(am4themes_animated);

export const PieChart1 = () => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chartRef.current = chart;
    chart.innerRadius = am4core.percent(30);
    chart.data = [ {
      "country": "Lithuania",
      "litres": 501.9
    }, {
      "country": "Czechia",
      "litres": 301.9
    }, {
      "country": "Ireland",
      "litres": 201.1
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }
    ];
    
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    chart.hiddenState.properties.radius = am4core.percent(0);
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    }
  }, []);
  
  return (
    <div>
      <div ref={chartRef} id="chartdiv"></div>
    </div>
  );
}
export default PieChart1;
