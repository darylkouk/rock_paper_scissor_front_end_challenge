import { combineReducers } from "redux";
import handleModal from "./handleModal";
import handlePlayer from "./handlePlayer";
import handleScore from "./handleScore";

export default combineReducers({
    modal: handleModal,
    playerPick: handlePlayer,
    score: handleScore
});