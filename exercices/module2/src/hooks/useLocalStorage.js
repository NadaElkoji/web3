function useLocalStorage(key, initialValue){
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem(key)))
    if(!localStorage.getItem(key)) localStorage.setItem(initialValue, JSON.stringify(counter[0]))
    else localStorage.setItem(key, JSON.stringify(counter[0]))  
}

export {useLocalStorage}