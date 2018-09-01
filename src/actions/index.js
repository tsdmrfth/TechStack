/**
 * Created by Fatih Taşdemir on 1.09.2018
 */

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
};