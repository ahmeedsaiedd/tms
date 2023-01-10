import { defineStore } from "pinia";
import axios from "axios";

export const useConfirmStore = defineStore("confirm", {
  // a function that returns a fresh state
  state: () => ({
    confirm: "",
  }),
  actions: {
    async fetchConfirmBtn() {
      this.confirm = await axios.post(
        "http://localhost:7531/tms-tool/v1/confirm"
      );
      console.log(this.confirm)
    },
  },
});
