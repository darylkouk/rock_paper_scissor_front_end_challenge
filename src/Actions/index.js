import { OPEN_MODAL, CLOSE_MODAL } from "./types";

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
