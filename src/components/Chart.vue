<template>
  <div id="app">
    <h1>-맛 평가-</h1>
    <apexchart :options="chartOptions" :series="series" type="polarArea"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [14, 23, 21, 17, 15],
      chartOptions: {
        chart: {
          type: 'polarArea',
        },
        labels: ['단맛', '신맛', '쓴맛', '짠맛', '매운맛',],
        stroke: {
          colors: ['#fff'],
        },
        fill: {
          opacity: 0.8,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
#app h1{
    font-size: 5vw;
    text-align: center;
    padding: 20px;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.15);

}
</style>
