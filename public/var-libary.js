 // alle data vanuit frd_scans

  const { data: scans } = await useFetch('/api/scans'); // hier haal ik de de data vanuit de scan.ts file
  let Date = scans.value.data.data[0].Date; // hier haalt hij de Date op van de eerste maand
  let Title = scans.value.data.data[0].title; // hier haalt hij de titel op van de eerste maand


  // all results
  let Results = scans.value.data.data[0].result;

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

  let Description = scans.value.data.data[0].description; // hier haalt hij de beschrijving op van de eerste maand
  let IdScan = scans.value.data.data[0].id; // hier haalt hij de id op van de eerste maand

  let Frd = scans.value.data.data[0].frd_site_id; // hier haalt hij de frd id op van de eerste maand