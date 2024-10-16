<template>
    <section>
        <ul v-for="scan in scans.data.data" :key="scan.id">
            <li>{{ scan.score }}</li>
        </ul>
    </section>
</template>

<script setup>
const { data: scans } = await useFetch('/api/scans');


// console.log(JSON.stringify(scans.value, null, 2));
console.log(scans.value); 

const Nieuwekijk = scans.value?.data?.data.slice(0, 5) || []; // Gebruik slice om de eerste 5 items te krijgen
</script>

<style scoped>

  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 4 / 1 / 5 / 3;
  }
  
  canvas {
    max-width: 100%;
    height: 300px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
