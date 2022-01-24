import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./Reducers";
import { loadState, saveState } from "./sessionStorage";

function RootReducer(props) {

    const persistedState = loadState();
    const store = createStore(Reducers, persistedState);

    store.subscribe(() => {
        saveState(store.getState('score'));
    })

    return ( 
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default RootReducer;
