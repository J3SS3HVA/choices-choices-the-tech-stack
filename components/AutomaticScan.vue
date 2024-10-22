<template>
  <section
    v-if="scans && scans.data && scans.data.data && scans.data.data.length > 0"
    tabindex="5"
    :aria-label="`Automatische scan: ${Score}% ${Description}`"
  >
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
const { data: scans } = await useFetch('/api/scans'); // Hier haal ik de data vanuit de scan.ts file
let Score = scans.value.data.data[0].score; // Hier haalt hij de score op van de eerste maand
let Title = scans.value.data.data[0].title; // Hier haalt hij de titel op van de eerste maand
let Description = scans.value.data.data[0].description; // Hier haalt hij de beschrijving op van de eerste maand

// Import required components and plugins for the chart
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { onMounted } from 'vue';

// Register required components and plugins
Chart.register(DoughnutController, ArcElement, Tooltip, Legend, ChartDataLabels);

onMounted(() => {
  let doughnutColor = Score < 50 ? '#c30010' : Score < 80 ? '#faa800' : '#228b22';
  let doughnutColorAlt = doughnutColor + "33";

  if (scans && scans.value && scans.value.data && scans.value.data.data.length > 0) {
    const ctx = document.getElementById('doughnut-chart').getContext('2d');
    const chartscore = Score;

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
        plugins: {
          datalabels: {
            display: false, // Disable data labels
          }
        }
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
