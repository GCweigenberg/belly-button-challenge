// 
function charts(subjectID) {
    d3.json("samples.json").then((data) => {
      var plottingData = data.samples;
      var subject = plottingData.filter(
        (sample) => sample.id == subjectID
      )[0];
  
      console.log(subject);
      var ids = subject.otu_ids;
      var labels = subject.otu_labels;
      var values = subject.sample_values;
  
      // Bar 
      var trace1 = {
        x: values.slice(0, 10).reverse(),
        y: ids
          .slice(0, 10)
          .map((otuID) => `OTU ${otuID}`)
          .reverse(),
        text: labels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "horizontal",
      };
  
      var data = [trace1];
  
      var layout = {
        xaxis: { autorange: true },
        yaxis: { autorange: true },
        margin: { t: 70, l: 100 },
        height: 380,
      };
  
      Plotly.newPlot("bar", data, layout);
  
      // Bubble Chart
      var trace1 = {
        x: ids,
        y: values,
        text: labels,
        mode: "markers",
        marker: {
          color: ids,
          size: values,
          colorscale: "RdBu",
        },
      };
  
      var data = [trace1];
  
      var layout = {
        margin: { t: 0 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        width: window.width,
      };
  
      Plotly.newPlot("bubble", data, layout);
    });
  }