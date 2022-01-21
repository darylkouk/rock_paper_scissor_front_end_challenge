import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./Reducers";

function RootReducer(props) {
    return ( 
        <Provider store={createStore(Reducers, {})}>
            {props.children}
        </Provider>
    );
}

export default RootReducer;
