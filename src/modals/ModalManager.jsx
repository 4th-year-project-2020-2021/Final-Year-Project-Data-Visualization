import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';

export default function ModalManager() {
    const modalLookup = {
        LoginForm,
        RegisterForm
    };

    // if you have a modal open, modal types and modal types will be stored in currentmodal
    const currentModal = useSelector(state => state.modals);
    let renderedModal;

    if(currentModal){
        //destructure the modal type and modal props from the current modal
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalType} />;
    }

    return <span>{renderedModal}</span>;
}