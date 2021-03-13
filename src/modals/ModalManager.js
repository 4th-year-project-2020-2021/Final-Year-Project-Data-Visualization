import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../auth/LoginForm';
import TestModal from '../sandbox/TestModal';

export default function ModalManager() {
    const modalLookup = {
        TestModal,
        LoginForm
    };

    const currentModal = useSelector((state) => state.modals);
    let renderedModal;

    if(currentModal){
        const {modalType, modalProps} = currentModal;
        const ModalComponent = modalLookup[modalType];
        renderedModal = <ModalComponent {...modalProps} />;
    }

    return <span>{renderedModal}</span>;
}