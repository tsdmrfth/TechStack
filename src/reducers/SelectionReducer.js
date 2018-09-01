/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
}