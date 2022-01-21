import { combineReducers } from "redux";
import handleModal from "./handleModal";

export default combineReducers({
    modal: handleModal
});