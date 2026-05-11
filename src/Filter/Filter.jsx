import { useState, useEffect } from 'react';

const useFilter = () => {
  const [state, setState] = useState({
    uslugi: [
      { id: 1, name: "Naprawa wyświetlacza" },
      { id: 2, name: "Wymiana baterii" }
    ],
    modeleTel: [],
    currentView: 'home'
  });

  useEffect(() => {
    fetch('../json/brands.json') 
      .then(res => res.json())
      .then(data => setState(prev => ({ ...prev, modeleTel: data.brands })))
      .catch(err => console.error(err));
  }, []);

  const setView = (view) => setState(prev => ({ ...prev, currentView: view }));

  return { state, setView };
};

export default useFilter;