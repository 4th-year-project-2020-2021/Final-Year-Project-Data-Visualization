import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../form/MyTextInput';
import ModalWrapper from '../modals/ModalWrapper';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';


export default function LoginForm(){
    const dispatch = useDispatch();

    return (
        <ModalWrapper size='mini' header='Sign in to our website'>
            <Formik
                initialValues={{email:'', password:'' }}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={values =>{
                    console.log(values);
                }}
            >
                {({isSubmitting, isValid, dirty}) => (
                    <Form className='ui form'>
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