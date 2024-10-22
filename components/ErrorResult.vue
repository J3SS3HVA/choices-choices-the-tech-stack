<template>
  <ul>
    <li
      tabindex="6"
      :aria-label="`${ResultTitle0}: ${ResultScore0} fouten`"
    >
      <h2>{{ ResultTitle0 }}</h2>
      <div>
        <p>{{ ResultScore0 }}</p>
        <Icon name="ondekte-fouten" />
      </div>
    </li>

    <li
      tabindex="7"
      :aria-label="`${ResultTitle1}: ${ResultScore1} fouten`"
    >
      <h2>{{ ResultTitle1 }}</h2>
      <div>
        <p>{{ ResultScore1 }}</p>
        <Icon name="contrast-fouten" />
      </div>
    </li>

    <li
      tabindex="8"
      :aria-label="`${ResultTitle2}: ${ResultScore2} fouten`"
    >
      <h2>{{ ResultTitle2 }}</h2>
      <div>
        <p>{{ ResultScore2 }}</p>
        <Icon name="structuele-fouten" />
      </div>
    </li>

    <li
      tabindex="9"
      :aria-label="`${ResultTitle3}: ${ResultScore3} fouten`"
    >
      <h2>{{ ResultTitle3 }}</h2>
      <div>
        <p>{{ ResultScore3 }}</p>
        <Icon name="ontbrekende-alt-teksten" />
      </div>
    </li>

    <li
      tabindex="10"
      :aria-label="`${ResultTitle4}: ${ResultScore4} fouten`"
    >
      <h2>{{ ResultTitle4 }}</h2>
      <div>
        <p>{{ ResultScore4 }}</p>
        <Icon name="aria-label" />
      </div>
    </li>
  </ul>
</template>

<script setup>
  const { data: scans } = await useFetch('/api/scans'); // hier haal ik de de data vanuit de scan.ts file
  
  let ResultTitle0 = scans.value.data.data[0].result[0].title; // hier haalt hij de titel op van de eerste resultaat op in de eerste maand
  let ResultTitle1 = scans.value.data.data[0].result[1].title; // hier haalt hij de titel op van de tweede resultaat op in de eerste maand
  let ResultTitle2 = scans.value.data.data[0].result[2].title; // hier haalt hij de titel op van de derde resultaat op in de eerste maand
  let ResultTitle3 = scans.value.data.data[0].result[3].title; // hier haalt hij de titel op van de vierde resultaat op in de eerste maand
  let ResultTitle4 = scans.value.data.data[0].result[4].title; // hier haalt hij de titel op van de vijfde resultaat op in de eerste maand

  let ResultScore0 = scans.value.data.data[0].result[0].amount; // hier haalt hij de score op van de eerste resultaat op in de eerste maand
  let ResultScore1 = scans.value.data.data[0].result[1].amount; // hier haalt hij de score op van de eerste resultaat op in de eerste maand
  let ResultScore2 = scans.value.data.data[0].result[2].amount; // hier haalt hij de score op van de eerste resultaat op in de eerste maand
  let ResultScore3 = scans.value.data.data[0].result[3].amount; // hier haalt hij de score op van de eerste resultaat op in de eerste maand
  let ResultScore4 = scans.value.data.data[0].result[4].amount; // hier haalt hij de score op van de eerste resultaat op in de eerste maand
</script>

<style scoped>
  
  ul {
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    row-gap: var(--average-gap);
    @media only screen and (max-width: 1600px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }
    @media only screen and (max-width: 700px) {
      display: block;
    }
  }

  li {
    height: 20%;
    background-color: var(--color-background-section);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-padding);

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1600px) {
      height: 100%;
      margin-bottom: var(--average-gap)
    }

  }

  li h2 {
    padding-bottom: 0.5em;
    font-size: 1em;
  }

  li div {
    --size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li div p {
    font-size: var(--size);
  }
</style>
