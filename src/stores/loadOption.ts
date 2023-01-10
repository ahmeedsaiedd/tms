import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore("main", {
  // a function that returns a fresh state
  state: () => ({
    loadOption: "",
  }),
  actions: {
    async fetchLoadOptions() {
      this.loadOption = await axios.post(
        "http://localhost:7531/tms-tool/v1/load-options"
      );
      console.log(this.loadOption)
    },
  },
});
