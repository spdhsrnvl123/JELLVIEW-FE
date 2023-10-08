<template>
  <apexchart
    :options="chartOptions"
    :series="series"
    type="polarArea"
  ></apexchart>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: {
    jellyInfo : {
      type : Object,
    }
  },
  data() {
    return {
      series: [
        this.jellyInfo.jprovince,
        this.jellyInfo.jsaturatedFat,
        this.jellyInfo.jcarbohydrate,
        this.jellyInfo.jsugars,
        this.jellyInfo.jprotein,
        this.jellyInfo.jsalt
      ],
      chartOptions: {
        chart: {
          type: "polarArea",
        },
        labels: ["지방", "포화지방", "탄수화물", "당류", "단백질", "나트륨"],
        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 0.8,
        },
        legend: {
          position: "bottom",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
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
</style>
