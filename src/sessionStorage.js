export const loadState = () => {
    const toRetrieve = sessionStorage.getItem('score');
    if(toRetrieve == null) {
        return {score: 0};
    }
    return JSON.parse(toRetrieve);
}

export const saveState = (state) => {
    const serialised = JSON.stringify(state);
    sessionStorage.setItem('score', serialised);
}