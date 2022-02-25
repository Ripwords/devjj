import { defineStore } from "pinia";
import { useSessionStorage } from "@vueuse/core";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      projects: [
        {
          title: "fluidsCalc",
          description: "Fluids Mechanics Calculator",
          link: "https://fluidscalc.netlify.app"
        },
        {
          title: "Astroz 🌌",
          description: "Astrophotography related Calculators",
          link: "https://astroz.netlify.app"
        },
        {
          title: "Unicorn 🦄",
          description: "Desktop Unit Converter",
          link: "https://www.github.com/Ripwords/unicorn"
        },
        {
          title: "Window Reader 📚",
          description: "Simple transparent note taking app",
          link: "https://www.github.com/Ripwords/window-reader"
        },
        {
          title: "StarnetGUI",
          description: "GUI for Starnet++",
          link: "https://www.github.com/Ripwords/starnetGUI"
        }
      ],
      animation: useSessionStorage("animation", true)
    }
  }
})