import { combineReducers } from "redux";
import handleModal from "./handleModal";
import handlePlayer from "./handlePlayer";

export default combineReducers({
    modal: handleModal,
    playerPick: handlePlayer
});