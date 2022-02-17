import { PLAYER_PICK } from "../Actions/types";


function handlePlayer(state='', action) {
    switch(action.type) {
        case PLAYER_PICK:
            return action.payload;
        default:
            return state;
    }
}

export default handlePlayer;