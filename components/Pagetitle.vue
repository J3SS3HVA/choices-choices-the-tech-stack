<template>
  <section v-if="companies && companies.data && companies.data.data && companies.data.data.length > 0">
    <div>
      <h1>{{ companies.data.data[0].title }}/home</h1>
      <p tabindex="1" :aria-label="'Automatic Scan ' + companies.data.data[0].title">Automatische Scan</p>
    </div>
    <nav>
      <button tabindex="3" :aria-label="'maand terug'"><Icon name="arrow-left" /></button>
      <span tabindex="2" :aria-label="'Maand augustus'">Aug.</span>
      <button tabindex="4" :aria-label="'maand verder'"><Icon name="arrow-right" /></button>
    </nav>
  </section>
</template>

<script setup>
const { data: companies } = await useFetch('/api/company');
</script>

<style scoped>
  section {
    padding-top: var(--average-padding);
    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 500px) {
    section {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
  }

  section div {
    display: flex;
    flex-direction: column-reverse;
  }

  h1 {
    font-size: 2em;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  button, span {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: 10px 20px;
  }
</style>
