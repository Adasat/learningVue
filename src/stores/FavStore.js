import { defineStore } from "pinia";

export const useFavorites = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    controlFavorites(meme) {
        const index = this.favorites.findIndex((f) => f.id === meme.id);      console.log(index)
        console.log(index)
        if (index >= 0) {
            // Si el meme ya está en la lista, quítalo
            this.favorites.splice(index, 1);
        } else {
            // Si el meme no está en la lista, añádelo
            this.favorites.push(meme);
            console.log(this.favorites);
        }

        },
  },
});