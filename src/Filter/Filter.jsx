
import brandsData from '../json/brands.json'

const useFilter = () => {
  const state = {
    uslugi: [
      { id: 1, name: 'Naprawa wyświetlacza' },
      { id: 2, name: 'Wymiana baterii' },
    ],
    modeleTel: brandsData.brands,
  }

  return { state }
}

export default useFilter
