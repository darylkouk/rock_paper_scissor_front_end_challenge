import { OPEN_MODAL, CLOSE_MODAL, PLAYER_PICK } from "./types";

export function openModal() {
    return ( {
        type: OPEN_MODAL,
        payload: true
    } );
}

export function closeModal() {
    return ( {
        type: CLOSE_MODAL,
        payload: false
    } );
}


export function handlePlayerPick(payload) {
    return ( {
        type: PLAYER_PICK,
        payload: payload
    } )
}
