<template>
  <section v-if="scans && scans.data && scans.data.data && scans.data.data.length > 0">
    <div>
      <h2>{{ Title }}</h2>
      <p>{{ Description }}</p>
    </div>
    <figure>
      <canvas id="doughnut-chart" height="150" width="150"></canvas>
      <figcaption>{{ Score }}%</figcaption> <!-- Display first score -->
    </figure>
  </section>
</template>

<script setup>


const { data: scans } = await useFetch('/api/scans'); // hiier haal ik de de data vanuit de scan.ts file
let Score = scans.value.data.data[0].score; // hier haalt hij  de score op van de eerste maand
let Title = scans.value.data.data[0].title; // hier haalt hij  de titel op van de eerste maand
let Description = scans.value.data.data[0].description; // hier haalt hij  de score op van de eerste maand

import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { onMounted } from 'vue';

// Register required components for the chart
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

onMounted(() => {

  let doughnutColor = Score < 50 ? '#c30010' : Score < 80 ? '#faa800' : '#228b22';
  let doughnutColorAlt = doughnutColor + "33";


  if (scans && scans.value && scans.value.data && scans.value.data.data.length > 0) {
    const ctx = document.getElementById('doughnut-chart').getContext('2d');
    const chartscore = Score; // hier haalt hij  de score op van de Score var

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [chartscore, 100 - chartscore],
          backgroundColor: [doughnutColor, doughnutColorAlt],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
      }
    });
  }
});
</script>

<style scoped>
 section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }

  canvas {
    max-width: 100%;
    height: auto;
  }

  figcaption {
    position: absolute;
    font-size: 2em;
    top: 52%;
    left: 50%; 
    transform: translate(-50%, -50%);
    font-weight: 700;
  }

  figure {
    position: relative;
    width: 100%;
    max-width: fit-content;
    height: min-content;
    align-self: center;
    @media screen and (max-width: 700px) {
      margin-top: 50px;
    }
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }

  div {
    padding-right: 160px;
    @media screen and (max-width: 700px) {
      padding-right: 0;
    }
  }
</style>
