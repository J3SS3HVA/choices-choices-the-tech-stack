<template>
  <section>
    <h2>Soorten foutmeldingen</h2>
    <figure>
      <canvas id="bar-chart" aria-label="Soorten fouten grafiek"></canvas>
      <ul>
        <!-- <li v-for="(item, index) in scans.data.data[0].result.slice(1)" :key="index">
            {{ item.title }}: {{ item.amount }}
        </li> -->
      </ul>
    </figure>
  </section>
</template>

<script>
import { onMounted } from '@vue/composition-api'; // Voor Composition API
import Chart from 'chart.js/auto';


export default {
  setup() {
    // API-call om de scans data op te halen
    const { data: scans, error } = useFetch('/api/scans');

    let chart;

    onMounted(() => {
      if (!scans.value || !scans.value.data || !scans.value.data.data) {
        console.error('Scan data is not available');
        return;
      }

      // Dit haalt de resultaten op van index 0 tot en met 3
      const firstFourResults = scans.value.data.data[0].result.slice(1); // Haal de eerste vier resultaten op

      const errorTitles = firstFourResults.map(result => result.title); // Titels van de eerste vier resultaten
      const errorAmounts = firstFourResults.map(result => result.amount); // Hoeveelheden van de eerste vier resultaten


      // Ophalen van stijlen vanuit CSS variabelen
      const rootStyles = getComputedStyle(document.documentElement);
      const colorBlue = rootStyles.getPropertyValue('--color-blue');
      const colorLightBlue = rootStyles.getPropertyValue('--color-lightblue');
      const fontFamily = rootStyles.getPropertyValue('--font-family');
      const colorBlack = rootStyles.getPropertyValue('--color-black');

      // Chart.js data
      const data = {
        labels: errorTitles,
        datasets: [
          {
            label: 'Fouten',
            data: errorAmounts,
            borderColor: colorBlue,
            backgroundColor: colorLightBlue,
            borderWidth: 3
          }
        ]
      };

      // Chart.js opties
      const options = {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: false,
              text: 'Aantal'
            },
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: fontFamily,
                size: 16
              }
            }
          },
          x: {
            title: {
              display: false,
              text: 'Type fouten'
            },
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: fontFamily,
                size: 16
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: true,
            titleAlign: 'center',
            bodyAlign: 'center',
            backgroundColor: '#FFFFFF',
            borderWidth: 2,
            borderColor: colorBlue,
            padding: 10,
            displayColors: false,
            titleFont: {
              size: 18,
              weight: 'bold',
              family: fontFamily
            },
            titleColor: colorBlue,
            bodyFont: {
              size: 16,
              weight: 'normal',
              family: fontFamily
            },
            bodyColor: colorBlue
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        onHover(event, elements) {
          const canvas = event.native.target;
          if (elements.length) {
            canvas.style.cursor = 'pointer';
          } else {
            canvas.style.cursor = 'default';
          }
        }
      };

      // Creëer de chart
      const ctx = document.getElementById('bar-chart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
      });
    });

    return {
      scans,
      error
    };
  }
};
</script>

<style scoped>
section {
  background-color: var(--color-background-section);
  border-radius: var(--section-border-radius);
  box-shadow: var(--box-shadow);
  padding: var(--average-padding);
}

canvas {
  max-width: 100%;
  height: 300px;
  display: block;
}

h2 {
  margin-bottom: 50px;
}
</style>
