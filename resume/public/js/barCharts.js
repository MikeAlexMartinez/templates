const ctx = document.getElementById('horizontalBar').getContext('2d');

const chart = new Chart(ctx, {
  // Type of chart
  type: 'horizontalBar',

  // data
  data: {
    labels: ["Javascript", "Node", "SQL", "NoSQL", "HTML5", "CSS3", "React"],
    datasets: [{
      backgroundColor: '#2facf9',
      borderColor: '#2facf9',
      data: [95, 87.5, 78.75, 70, 64, 57.5, 50],
    },{
      backgroundColor: '#EDEDED',
      borderColor: '#EDEDED',
      data: [0, 12.5, 25, 30, 35, 42.5, 50],
    }]
  },

  // Configuration
  options: {
    tooltips: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        stacked: true,
        display: false,
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          suggestedMin: 0, // Will be Zero unless there is a lower value
        }
      }],
      yAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        stacked: true,
      }]
    }
  }
});