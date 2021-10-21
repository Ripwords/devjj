import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      projects: [
        {
          title: "fluidsCalc",
          description: "Fluids Mechanics Calculator",
          link: "https://www.fluidscalc.netlify.app"
        },
        {
          title: "Astroz 🌌",
          description: "Astrophotography related Calculators",
          link: "https://www.astroz.netlify.app"
        },
        {
          title: "Unicorn 🦄",
          description: "Desktop Unit Converter",
          link: "https://www.github.com/Ripwords/unicorn"
        },
      ],
    }
  }
})