import {SIGN_IN_USER, SIGN_OUT_USER} from './authConstants.js';
import firebase from '../config/firebase';
import { dispatch } from 'd3-dispatch';

export function signInUser(creds){
   return async function(dispatch){
       try{
            const result = await firebase
                .auth()
                .signInWithEmailAndPassword(creds.email, creds.password);
            dispatch({ type: SIGN_IN_USER, payload: result.user });
        }catch (error) {
            throw error
       }
   }
}

export function verifyAuth(){
    return function (dispatch){
        return firebase.auth().onAuthStateChanged(user=>{
            if(user){
                dispatch({type: SIGN_IN_USER, payload:user})
            }else{
                dispatch(signOutUser())
            }
        })
    }
}

export function signOutUser(){
    return {
        type: SIGN_OUT_USER
    }
}