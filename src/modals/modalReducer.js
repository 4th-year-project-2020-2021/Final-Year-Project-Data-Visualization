// constants for opening and closing modals
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


// action creator
export function openModal(payload){
    return {
        type: OPEN_MODAL,
        payload
    }
}

// action creator
export function closeModal(){
    return {
        type: CLOSE_MODAL
    }
}

const initialState = null;

export default function modalReducer(state = initialState, {type, payload}) {
    switch (type) {
        case OPEN_MODAL:
            const {modalType, modalProps} = payload;
            return {modalType, modalProps};
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}