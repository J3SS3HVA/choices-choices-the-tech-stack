<template>
   <div>
       <div v-for="scan in scans.data.data" :key="scan.id">
           <ul>
               <li>{{ scan.score }}</li>
           </ul>
       </div>
   </div>
</template>

<script setup>
const { data: scans } = await useFetch('/api/scans');


console.log(JSON.stringify(scans.value, null, 2));
console.log(scans.value); 

const Nieuwekijk = scans.value?.data?.data.slice(0, 5) || []; // Gebruik slice om de eerste 5 items te krijgen
</script>
