import { openModal } from 'modals/modalReducer';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from 'semantic-ui-react';

export default function Sandbox(){

  const dispatch = useDispatch(); 

  const data = useSelector((state) => state.data);

    return (
      <>
        <h1>Testing</h1>
        <h2>The data is: {data}</h2>
        <Button onClick={ ()=> dispatch(openModal({modalType : 'TestModal', modalProps:{data}}))} 
        content='Open Modal' color='teal' />
      </>   
    );
}