const doughnutData = [
  {
    skill: "Teamwork",
    percent: 65 
  },
  {
    skill: "Accountancy",
    percent: 90
  },
  {
    skill: "Planning",
    percent: 70,
  },
  {
    skill: "Communication",
    percent: 75
  },
  {
    skill: "Problem-solving",
    percent: 80
  }
];

doughnutData.forEach((v, i) => {
  $(`<canvas id="doughnut-${i}" class="doughnut"></canvas>`).appendTo('#doughnuts');

  insertDoughnut(v, i);
})



function insertDoughnut(props, n) {
   
  /* adds doughnut chart with fields as defined by
    <canvas id="doughnut-${props.n}"></canvas>
      the props object passed in */

  const skill = props.skill;
  const percent = props.percent;
  
  const data = {
    datasets: [
      {
        data: [percent, 100-percent],
        backgroundColor: [
          "#2facf9",
          "#fff"
        ],
      }]
  };

  const promisedDeliveryChart = new Chart(document.getElementById(`doughnut-${n}`), {
    type: 'doughnut',
    data: data,
    options: {
      cutoutPercentage: 75,
      responsive: true,
      legend: {
        display: false
      }
    }
  });

  Chart.pluginService.register({
      beforeDraw: function (chart) {
          if (chart.options.centertext) {
              var width = chart.chart.width,
                      height = chart.chart.height,
                      ctx = chart.chart.ctx;

              ctx.restore();
              var fontSize = (height / 80).toFixed(2); // was: 114
              ctx.font = fontSize + "em sans-serif";
              ctx.textBaseline = "middle";

              var text = chart.options.centertext, // "75%",
                      textX = Math.round((width - ctx.measureText(text).width) / 2),
                      textY = height / 2 - (chart.titleBlock.height - 15);

              ctx.fillText(text, textX, textY);
              ctx.save();
          }
      }
  });
}
