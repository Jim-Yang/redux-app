// Creating our own store

function createStore() {
    let state: any
    let listeners: any = []

    const getState = () => state

    const subscribe = (listener: Function) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter( (l: any) => l !== listener)
        }
    }

    return {
        getState,
        subscribe
    }
}

const store = createStore()

store.subscribe(() => {

})