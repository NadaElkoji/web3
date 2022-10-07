function useLocalStorage(key, initialValue){
    var counter= useState('counter')
    if(!localStorage.getItem(key)) localStorage.setItem(initialValue, JSON.stringify(counter[0]))
    else localStorage.setItem(key, JSON.stringify(counter[0]))  
}

export {useLocalStorage}