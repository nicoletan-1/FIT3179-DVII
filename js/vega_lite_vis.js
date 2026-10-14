var vg_grouped = "js/grouped_bar_chart.json";

vegaEmbed("#grouped_bar_chart", vg_grouped, { actions: true })
  .then(function(result) {
    console.log("Grouped bar chart successfully loaded!");
  })
  .catch(console.error);