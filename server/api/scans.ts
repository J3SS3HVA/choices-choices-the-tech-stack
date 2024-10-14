import { defineEventHandler } from "h3";

function delay() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export default defineEventHandler(async () => {
    const scans = await $fetch("https://fdnd-agency.directus.app/items/frd_scans")

    await delay();
    return {
        data: scans,
    };

});

