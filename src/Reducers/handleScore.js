import { PLAYER_SCORE_CAL } from "../Actions/types";

function handleScore(state=0, action) {
    switch(action.type) {
        case PLAYER_SCORE_CAL:
            return state + action.payload;
        default:
            return state;
    }
}

export default handleScore;