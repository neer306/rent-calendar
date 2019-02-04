
const initialState = {
    currentDate: new Date(),
    daysArray: [],
    selectedDays: {
        count: 0,
        from: null,
        to: null,
    },
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'MONTH_CHANGE':
            const { date, daysArray } = action;

            return { ...state, ...{ currentDate: date, daysArray }};

        case 'SET_SELECTED':
            const { selectedIndexArray } = action;

            return {
                ...state,
                ...{
                    daysArray: state.daysArray.map((item, index) => {
                        if (selectedIndexArray.includes(index)) {
                            item.selected = true;
                        }
                        return item;
                    }),
                }
            };
        case 'CLEAR_SELECTED':
            return {
                ...state,
                ...{
                    daysArray: state.daysArray.map(item => {
                        item.selected = false;
                        return item;
                    })
                }
            };
        default:
            return state;
    }
}

export default rootReducer;