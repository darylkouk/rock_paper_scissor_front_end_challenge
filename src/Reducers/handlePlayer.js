import { PLAYER_PICK } from "../Actions/types";


function handlePlayer(state='', action) {
    switch(action.type) {
        case PLAYER_PICK:
            state = action.payload;
            return state;
        default:
            state = '';
            return state;
    }
}

export default handlePlayer;