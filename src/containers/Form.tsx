import { connect } from 'react-redux';
import Form from '../components/Form';
//import * as actions from '../actions/';
//import { StoreState } from '../types/index';
/*
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}
*/

export default connect()(Form);
