import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../form/MyTextInput';
import ModalWrapper from '../modals/ModalWrapper';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signInUser } from './authAction';
import { closeModal } from 'modals/modalReducer';


export default function RegisterForm(){
    const dispatch = useDispatch();

    return (
        <ModalWrapper size='mini' header='Register to our website'>
            <Formik
                initialValues={{displayName: '', email:'', password:'' }}
                validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={(values, {setSubmitting}) =>{
                    dispatch(signInUser(values));
                    setSubmitting(false);
                    dispatch(closeModal);
                }}
            >
                {({isSubmitting, isValid, dirty}) => (
                    <Form className='ui form'>
                        <MyTextInput name='displayName' placeholder='DisplayName' />
                        <MyTextInput name='email' placeholder='Email Address' />
                        <MyTextInput name='password' placeholder='Password' type='password'/>
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'
                        />
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    )
}