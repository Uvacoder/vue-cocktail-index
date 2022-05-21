<template>
  <div class="w-full mt-6 px-6">
    <div class="flex flex-col md:flex-row md:flex-wrap">
      <h1 class="font-bold text-lg mb-4 mt-4 w-full">
        Search for an alcholic beverage
      </h1>
      <input
        v-model="searchInput"
        class="input input-bordered input-secondary w-full md:max-w-xs"
        placeholder="Search for alcohol"
        @keyup.enter="getPlayerDataFromSearch()"
      >

      <button
        aria-label="Search for alcohol"
        name="Search for alcohol"
        class="btn btn-active btn-secondary md:ml-4 mt-4 md:mt-0 w-full md:max-w-xs"
        @click="getPlayerDataFromSearch()"
      >
        Search
      </button>
    </div>

    <div class="flex flex-row flex-wrap">
      <div
        v-for="(drinksData, dataidx) in searchData.drinks"
        :key="dataidx"
        class="mt-6 mb-6 w-full md:max-w-xl md:mr-4 flex md:flex-row flex-col"
      >
        <div
          class="card w-full md:max-w-xl bg-base-100 shadow-xl image-full flex"
        >
          <figure>
            <img
              :src="drinksData.strDrinkThumb"
              :alt="drinksData.strDrink"
            >
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ drinksData.strDrink }}
              <div class="badge badge-secondary">
                {{ drinksData.strCategory }}
              </div>
            </h2>

            <h3 class="font-bold">
              Instrutions:
            </h3>
            <p>{{ drinksData.strInstructions }}</p>
            <div class="card-actions justify-end">
              <div class="badge badge-secondary">
                {{ drinksData.strAlcoholic }}
              </div>
            </div>
            <div
              class="stats stats-vertical lg:stats-horizontal bg-secondary text-primary-content shadow mt-6"
            >
              <div class="stat">
                <div class="stat-title">
                  Type of glass
                </div>
                <div class="font-bold white-text text-2xl">
                  {{ drinksData.strGlass }}
                </div>
              </div>

              <div class="stat">
                <div class="stat-title">
                  Ingredients
                </div>
                <div class="font-bold white-text text-2xl">
                  <span v-if="drinksData.strIngredient1">
                    {{ drinksData.strMeasure1 }}
                    {{ drinksData.strIngredient1 }}</span>
                  <span v-if="drinksData.strIngredient2">, {{ drinksData.strMeasure2 }}
                    {{ drinksData.strIngredient2 }}</span>
                  <span v-if="drinksData.strIngredient3">, {{ drinksData.strMeasure3 }}
                    {{ drinksData.strIngredient3 }}</span>
                  <span v-if="drinksData.strIngredient4">, {{ drinksData.strMeasure4 }}
                    {{ drinksData.strIngredient4 }}</span>
                  <span v-if="drinksData.strIngredient5">, {{ drinksData.strMeasure5 }}
                    {{ drinksData.strIngredient5 }}</span>
                  <span v-if="drinksData.strIngredient6">, {{ drinksData.strMeasure6 }}
                    {{ drinksData.strIngredient6 }}</span>
                  <span v-if="drinksData.strIngredient7">, {{ drinksData.strMeasure7 }}
                    {{ drinksData.strIngredient7 }}</span>
                  <span v-if="drinksData.strIngredient8">, {{ drinksData.strMeasure8 }}
                    {{ drinksData.strIngredient8 }}</span>
                  <span v-if="drinksData.strIngredient9">, {{ drinksData.strMeasure9 }}
                    {{ drinksData.strIngredient9 }}</span>
                  <span v-if="drinksData.strIngredient10">, {{ drinksData.strMeasure10 }}
                    {{ drinksData.strIngredient10 }}</span>
                  <span v-if="drinksData.strIngredient11">, {{ drinksData.strMeasure11 }}
                    {{ drinksData.strIngredient11 }}</span>
                  <span v-if="drinksData.strIngredient12">, {{ drinksData.strMeasure12 }}
                    {{ drinksData.strIngredient12 }}</span>
                  <span v-if="drinksData.strIngredient13">, {{ drinksData.strMeasure13 }}
                    {{ drinksData.strIngredient13 }}</span>
                  <span v-if="drinksData.strIngredient14">, {{ drinksData.strMeasure14 }}
                    {{ drinksData.strIngredient14 }}</span>
                  <span v-if="drinksData.strIngredient15">, {{ drinksData.strMeasure15 }}
                    {{ drinksData.strIngredient15 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="searchData.drinks === null">
      <p class="mt-6">
        No alcohol found!
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSearchData } from '../composables/getApiData.composable'

const { getPlayerDataFromSearch, searchInput, searchData } = useSearchData()
</script>
