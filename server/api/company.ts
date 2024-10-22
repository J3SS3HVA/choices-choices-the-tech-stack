import { defineEventHandler } from "h3";

function delay() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default defineEventHandler(async () => {
    const companies = await $fetch("https://fdnd-agency.directus.app/items/frd_site")

    await delay();
    return {
        data: companies,
    };

});

