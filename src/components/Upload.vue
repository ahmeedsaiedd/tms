<template>
  <div class="space-y-8">
    <br />
    <br />
    <!-- <span>PDF ONLY</span> -->
    <div class="">
      <form @submit.prevent method="post" enctype="multipart/form-data">
        <label>
          <input type="file" id="fileupload" name="fileupload" ref="file" accept=".pdf" required />
        </label>

        <button
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          @click="submitFile()">
          Submit
        </button>
        MAFs Number: {{ response.data?.maf_count }}

      </form>
      <!-- <button
        type="button"
        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Generate UI
      </button> -->
      <button @click="ConfirmAdd" type="confirm" id="confirm" name="conifrm" ref="confirm"
        class="py-2.5 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        Confirm Add
      </button>
    </div>
    <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
    <div class="grid gap-12 mb-10 md:grid-cols-4">
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Org Name</label>
        <input type="text" id="Org Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="" required v-model="confirmData.orgName" />
      </div>
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Group</label>
        <input type="text" id="Group"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="" required v-model="confirmData.group" />
      </div>
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Caption</label>
        <input type="text" id="Caption"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="" required v-model="confirmData.caption" />
      </div>
      <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Env Name</label>
        <input type="text" id="Env Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="" required v-model="confirmData.emvName" />
      </div>
    </div>
    <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
    <div></div>
    <div></div>

    <div id="mo7sen" v-for="data in response.data?.mafs">
      <div class="grid grid-cols-6 gap-2">
        <div class="">ModelID: {{ selected }}</div>
        <select v-model="confirmData.modelId"
          class="text-black hover:bg-white-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
          <option v-for="model in store.loadOption.data?.options?.modelId" :value="model">
            {{ model }}
          </option>
        </select>

        <div>App Name: {{ selected }}</div>

        <select v-model="confirmData.appName"
          class="text-black hover:bg-white-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
          <option v-for="model in store.loadOption.data?.options?.appName" :value="model">
            {{ model }}
          </option>
        </select>

        <div>App Version: {{ selected }}</div>

        <select v-model="confirmData.appVer"
          class="text-black hover:bg-white-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
          <option v-for="model in store.loadOption.data?.options?.appVer" :value="model">
            {{ model }}
          </option>
        </select>
      </div>
      <hr class="h-px my-4 bg-gray-400 border-0 dark:bg-gray-700" />
      <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li v-for="item in response.data?.mafs">
          <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">{{
            response.data?.maf_count
          }}</a>
        </li>
      </ul>
      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

      <center>
        <b> Merchant Application Form (MAF) </b>

      </center>
      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

      <div class="flex">
      </div>

      <div class="grid grid-cols-2 gap-8">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Merchant
          Number:</label>

        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="enter number" required v-model="confirmData.merchantNo" />

        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">MCC:</label>
        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="MCC" required v-model="confirmData.mcc" />
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Merchant
          Name:</label>
        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Merchant Name" required v-model="confirmData.merchantName" />
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Merchant
          Address:</label>
        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Address" required v-model="confirmData.address" />
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City:</label>
        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="City" required v-model="confirmData.city" />
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edcid:</label>
        <input type="text" id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Edcid" required v-model="confirmData.edcID" />
      </div>
      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

      <div class="grid grid-cols-3 gap-8">
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Cards:</h3>

        <ul
          class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="jcb-checkbox" type="checkbox" v-model="jcb"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="react-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">JCB</label>
              <select v-if="jcb == true" v-model="confirmData.JCB"
                class="w-full text-blue-600 border rounded focus:ring-blue-500 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <option v-for="model in store.loadOption.data?.options?.jcb" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="react-checkbox" type="checkbox" v-model="visa"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium ">VISA</label>
              <select v-if="visa == true" v-model="confirmData.visa"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.visa" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="angular-checkbox" type="checkbox" v-model="premium"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="angular-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PERMIUM</label>
              <select v-if="premium == true" v-model="confirmData.premium"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.premium" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="laravel-checkbox" type="checkbox" v-model="meeza"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="laravel-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">MEEZA</label>
              <select v-if="meeza == true" v-model="confirmData.meeza"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.meeza" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
        </ul>
        <ul
          class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="vue-checkbox" type="checkbox" v-model="diners"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="vue-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">diners</label>
              <select v-if="diners == true" v-model="confirmData.diners"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.diners" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="react-checkbox" type="checkbox" v-model="master"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="react-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">MASTER CARD</label>
              <select v-if="master == true" v-model="confirmData.master"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.master" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="angular-checkbox" type="checkbox" v-model="amex"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="angular-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">AMEX</label>
              <select v-if="amex == true" v-model="confirmData.amex"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.amex" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="laravel-checkbox" type="checkbox" v-model="maestro"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="laravel-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">MAESTRO</label>
              <select v-if="maestro == true" v-model="confirmData.maestro"
                class="w-full text-blue-600 rounded border- focus:ring-blue-500 focus:ring-blue-600 ">
                <option v-for="model in store.loadOption.data?.options?.maestro" :value="model">
                  {{ model }}>
                </option>
              </select>
            </div>
          </li>
        </ul>
      </div>
      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
      <br />
      <div class="grid grid-cols-4 gap-8">
        <div class="">Installment: {{ selected }}</div>

        <select v-model="confirmData.installment"
          class="text-black hover:bg-white-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center">
          <option v-for="model in store.loadOption.data?.options?.installment" :value="model">
            {{ model }}
          </option>
        </select>
      </div>
      <br />
      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
      <br />
      <div>
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
          Currency
        </h3>
        <br />

        <ul
          class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="vue-checkbox-list" type="checkbox" v-model="confirmData.le"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="vue-checkbox-list"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">L.E</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="react-checkbox-list" type="checkbox" v-model="confirmData.usd"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="react-checkbox-list"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">USD</label>
            </div>
          </li>
          <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
              <input id="angular-checkbox-list" type="checkbox" v-model="confirmData.euro"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
              <label for="angular-checkbox-list"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">EURO</label>
            </div>
          </li>
        </ul>
      </div>
      <hr class="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
      <br />
      <div class="grid grid-cols-2 gap-4">
        <div id="awl 3amod">
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sale</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Sale Password" required v-model="confirmData.sale" />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Report</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Report Password" required v-model="confirmData.report"/>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Online
                Refund</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Online Refund Password" required  v-model="confirmData.OnlineRefund"/>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Auto
                Settle</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Settlement Time Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">DCC</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="DCC Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manual
                Entry</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Manual Entry Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2"></div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tips</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tips Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FallBack</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="FallBack Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offline
                Mode</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Offline Mode Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Floor
                Limit</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Floor Limit Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mag</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mag Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cash
                Deposit</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cash Deposit Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pre-Auth</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pre-Auth Password" required />
            </div>
          </div>
        </div>
        <div id="tany 3amod">
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Void</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Void Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Settlement</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Settlement Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offline
                Refund</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Offline Refund Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Auto
                Settle</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Settlement Time Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">DCC</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="DCC Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Manual
                Entry</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Manual Entry Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2"></div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tips</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tips Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FallBack</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="FallBack Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offline
                Mode</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Offline Mode Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Floor
                Limit</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Floor Limit Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mag</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mag Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cash
                Deposit</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cash Deposit Password" required />
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div class="py-3 pb-3">
              <input id="default-checkbox" type="checkbox" value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="default-checkbox"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pre-Auth</label>
            </div>
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
              <input type="text" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pre-Auth Password" required />
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";
import { useMainStore } from "@/stores/loadOption";
import { useConfirmStore } from "@/stores/ConfirmAdd";

const response = ref("");
const confirmData = ref({
  modelId: '',
  appName: '',
  appVer: '',
  orgName: '',
  group: '',
  caption: '',
  emvName: '',
  title: '',
  name: '',
  merchantNo: '',
  JCB: '',
  visa: '',
  premium: '',
  diners: '',
  mastercard: '',
  amex: '',
  meeza: '',
  maestro: '',
  installment: '',
  caption: '',
  mcc: '',
  merchantName: '',
  address: '',
  city: '',
  edcId: '',
})

function submitData() {
  console.log(confirmData)
}
// const loadOption = ref("");

const store = useMainStore();
// const download = useConfirmStore();
const jcb = ref(false);
const visa = ref(false);
const premium = ref(false);
const meeza = ref(false);
const diners = ref(false);
const master = ref(false);
const amex = ref(false);
const maestro = ref(false);
const confirm = ref();

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

    // confirmData.value.merchantNo=response.value.data.mafs.content.merchantNo 
    for (let i = 0; i < response.value.data.mafs.length; i++) {

      // console.log(response.value.data.mafs[i].content.merchantNo);
      confirmData.value.merchantNo = response.value.data.mafs[i].content.merchantNo
    }
    for (let i = 0; i < response.value.data.mafs.length; i++) {

      console.log(response.value.data.mafs[i].content.mcc);
      confirmData.value.mcc = response.value.data.mafs[i].content.mcc
    }
    for (let i = 0; i < response.value.data.mafs.length; i++) {

      console.log(response.value.data.mafs[i].content.merchantName);
      confirmData.value.merchantName = response.value.data.mafs[i].content.merchantName
    }
    for (let i = 0; i < response.value.data.mafs.length; i++) {

      console.log(response.value.data.mafs[i].content.address);
      confirmData.value.address = response.value.data.mafs[i].content.address
    }
    for (let i = 0; i < response.value.data.mafs.length; i++) {

      console.log(response.value.data.mafs[i].content.city);
      confirmData.value.city = response.value.data.mafs[i].content.city
    }
    for (let i = 0; i < response.value.data.mafs.length; i++) {

      console.log(response.value.data.mafs[i].content.edcId);
      confirmData.value.edcId = response.value.data.mafs[i].content.edcId
    }
    // alert("Success upload")
  } catch (error) {
    console.log(error);
  }
}
async function ConfirmAdd() {
  console.log(confirmData.value)

  // axios.post("http://localhost:7531/tms-tool/v1/confirm"); 
}

onMounted(() => {
  store.fetchLoadOptions();
  // download.fetchConfirmBtn();
})
// axios
//   .get('http://localhost:7531/tms-tool/v1/confirm',)
//   .then(response => (this.info = response.data?.maf_count )) 
</script>
