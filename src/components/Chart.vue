<template>
  <div class="chart">
    <h5>Basic</h5>
    <Chart type="pie" :data="chartData" :options="lightOptions" class="pie" />
    <div class="card">
      <h5>Vertical</h5>
      <Chart type="bar" :data="basicData" :options="basicOptions" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "chart",
  data() {
    return {
      chartData: {
        labels: ["A", "B", "C"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
          },
        ],
      },
      basicData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "#42A5F5",
            data: [65, 59, 80, 81, 56, 55, 40, 10, 50, 100, 75],
          },
          {
            label: "My Second dataset",
            backgroundColor: "#FFA726",
            data: [28, 48, 40, 19, 86, 27, 90, 80, 81, 56, 55],
          },
        ],
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
              render: "percentage",
              position: "outside",
            },
          },
        },
      },
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chart {
  display: flex;
}
.chart .card {
  width: 750px;
  height: 750px;
}
.chart .pie {
  width: 350px;
  height: 350px;
}
</style>
