<template>
  <div class="w-100%">
    <div class="container">
      <p>XML File ONLY</p>
      <div class="">
        <form @submit.prevent method="post" enctype="multipart/form-data">
          <label>
            <input
              type="file"
              id="fileupload"
              name="fileupload"
              ref="file"
              accept=".XML"
              required
            />
          </label>

          <button
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            @click="submitFile()"
          >
            Submit
          </button>
          MAFs Number: {{ response.data?.maf_count }}
        </form>

        <button
          @click="GenerateUI()"
          type="button"
          class="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Generate UI
        </button>
        <button
          type="button"
          class="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Confirm Edit
        </button>
      </div>

      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
    </div>

    <br />
    <div class="grid gap-12 mb-10 md:grid-cols-4">
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Org Name</label
        >
        <input
          type="text"
          id="Org Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Group</label
        >
        <input
          type="text"
          id="Group"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Caption</label
        >
        <input
          type="text"
          id="Caption"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Env Name</label
        >
        <input
          type="text"
          id="Env Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
    </div>
    <br />
    <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
  </div>
  <br />
  <div></div>
  <div></div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const response = ref("");
async function GenerateUI() {
  let formData = new FormData();
}
async function submitFile() {
  let formData = new FormData();
  formData.append("file", fileupload.files[0]);
  try {
    response.value = await axios.post(
      "http://localhost:7531/tms-tool/v1/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/from-data",
        },
      }
    );
    console.log(response.value.data);
  } catch (error) {
    console.log(error);
  }
}
</script>
