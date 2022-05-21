// mouse.js
import { ref } from 'vue'

// by convention, composable function names start with "use"
export function useSearchData() {
  // state encapsulated and managed by the composable

  const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const searchData = ref([])

  const searchInput = ref('')

  // a composable can update its managed state over time.
  async function getPlayerDataFromSearch() {
    try {
      const res = await fetch(apiUrl + searchInput.value)
      return (searchData.value = await res.json())
    } catch (error) {
      console.log(error)
    }
  }

  // expose managed state as return value
  return {
    getPlayerDataFromSearch,
    searchInput,
    searchData,
  }
}
