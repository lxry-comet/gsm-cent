import { useEffect, useState } from 'react'
import brandsData from '../json/brands.json'

const useFilter = () => {
	const [state, setState] = useState({
		uslugi: [
			{ id: 1, name: 'Naprawa wyświetlacza' },
			{ id: 2, name: 'Wymiana baterii' }
		],
		modeleTel: [],
		currentView: 'home'
	})

	useEffect(() => {
		setState(prev => ({ ...prev, modeleTel: brandsData.brands }))
	}, [])

	const setView = view => setState(prev => ({ ...prev, currentView: view }))

	return { state, setView }
}

export default useFilter
