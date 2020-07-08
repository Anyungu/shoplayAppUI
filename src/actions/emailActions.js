
import {
    SENDEMAILFAIL,
    SENDEMAILSUCCESS,
    SENDEMAIL
} from './types';

import {
    get_email
} from '../graphql/queries';

import { client } from '../graphql/client';

import {Actions} from 'react-native-router-flux';



export const updateErrorMessage = (message) => {
    return ({
        type: SENDEMAILFAIL,
        payload: message
    })
}

export const clearErrorMessage = () => {
    return ({
        type: SENDEMAILFAIL,
        payload: ''
    })
}

export const sendEmail = (email) => {

    return (dispatch) => {

        dispatch({
            type: SENDEMAIL
        });

        client
            .query({
                query: get_email(email)
            })
            .then(result => {
                console.log(result);
                if (result.data.getOneUser.code === 200) {
                    sendEmailSuccess(result.data.getOneUser.message, dispatch);
                }
                else {
                    sendEmailFail(result.data.getOneUser.message, dispatch);
                }
            });

    };

};



const sendEmailSuccess = (res, dispatch) => {

    dispatch({
        type: SENDEMAILSUCCESS,
        payload: res
    })

}

const sendEmailFail = (res, dispatch) => {

    dispatch({
        type: SENDEMAILFAIL,
        payload: res
    })

}
