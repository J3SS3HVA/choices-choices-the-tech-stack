<template>
    <section>
  <h2>Soorten foutmeldingen</h2>
  <figure>
    <canvas id="bar-chart" aria-label="Soorten fouten grafiek">
      <ul>
        {#each results as item}
          <li>{item.title}: {item.amount}</li>
        {/each}
      </ul>
    </canvas>
  </figure>
</section>
</template>

<script setup>



</script>


<style scoped>
  
  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 3 / 1 / 4 / 2;
  }

  canvas {
    max-width: 100%;
    height: 300px;
  }

  h2 {
    margin-bottom: 50px;
  }
</style>
