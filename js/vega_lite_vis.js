// Embed Choropleth Map
vegaEmbed("#choropleth_map", "js/choropleth_map.json", { actions: true })
  .catch(console.error);

// Embed Grouped Bar Chart
vegaEmbed("#grouped_bar_chart", "js/grouped_bar_chart.json", { actions: true })
  .catch(console.error);