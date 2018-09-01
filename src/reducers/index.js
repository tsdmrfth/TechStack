import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})
;