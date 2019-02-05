import { combineReducers } from 'redux'

const initialState = {
    currentDate: new Date(),
    daysArray: [],
    selectedDays: {
        count: 0,
        indexFrom: null,
        indexTo: null,
    },
};

function currentDate(state = initialState.currentDate, action) {
    switch (action.type) {
        case 'MONTH_CHANGE':
            return action.currentDate;
        default:
            return state
    }
}

function daysArray(state = [], action) {
    switch (action.type) {
        case 'MONTH_CHANGE':
            return action.daysArray;
        case 'SET_SELECTED':
            return state.map((item, index) => {
                if (action.selectedIndexArray.includes(index)) {
                    item.selected = true;
                }
                return item;
            });
        case 'CLEAR_SELECTED':
            return state.map(item => {
                item.selected = false;
                return item;
            });

        default:
            return state
    }
}

function selectedDays(state = initialState.selectedDays, action) {
    switch (action.type) {
        case 'SET_SELECTED':
            const firstClick =  action.selectedIndexArray.length === 1;

            console.log('SET_SELECTED', action, firstClick)

            return {
                count: firstClick ? 1 : 0,
                indexFrom: action.selectedIndexArray[0],
                indexTo: firstClick ? null : action.selectedIndexArray[action.selectedIndexArray.length - 1]
            };
        default:
            return state
    }
}

const rootReducer = combineReducers({
    currentDate,
    daysArray,
    selectedDays
});

export default rootReducer;