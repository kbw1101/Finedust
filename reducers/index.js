import {combineReducers} from 'redux';

const INITIAL_BLUETOOTH_STATE = {
    current: null,
}

const bluetoothReducer = (state = INITIAL_BLUETOOTH_STATE, action) => {
    let {
        current
    } = state;

    switch(action.type)
    {
        case 'ACTION_SET_BLUETOOTH':
            current = action.payload;

            newState = {current}
            return newState;
        default:
            return state;
    }
}

export default combineReducers({
    bluetoothReducer,
})