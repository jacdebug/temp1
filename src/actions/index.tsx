import * as constants from '../constants';
import * as types from '../types';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}


export interface AddContactAction {
    type: constants.ADD_CONTACT_DATA;
    data: types.ContactInfo;
}


export function addContactAction(data: types.ContactInfo): AddContactAction {
    return {
        type: constants.ADD_CONTACT_DATA,
        data
    };
}