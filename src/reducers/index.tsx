import { AddContactAction } from '../actions';
import { StoreState } from '../types/index';
import { ADD_CONTACT_DATA } from '../constants/index';

export function enthusiasm(state: StoreState, action: AddContactAction): StoreState {
  switch (action.type) {
    case ADD_CONTACT_DATA:
      return { ...state, contactdata: state.contactdata.concat([action.data]) };
  }
  return state;
}