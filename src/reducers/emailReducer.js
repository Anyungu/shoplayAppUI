

import {
    SENDEMAIL,
    SENDEMAILFAIL,
    SENDEMAILSUCCESS
} from '../actions/types';

const INITIAL = { email: '', loading:false, error: '' };


export default (state=INITIAL, action) => {
     
    switch (action.type) {

        case SENDEMAIL:
            return {...state, loading:true};

        case SENDEMAILSUCCESS:
            return {...state,  loading:false, email: action.payload};

        case SENDEMAILFAIL:
            return {...state, loading:false, error: action.payload };
      
        default:
            return state;
    }


};