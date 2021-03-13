import ModalWrapper from 'modals/ModalWrapper';
import React from 'react';

export default function TestModal({data}){
    return (
        <ModalWrapper size='mini' header='Test modal'>
            <div>The data is : {data}</div>
        </ModalWrapper>
    )
}