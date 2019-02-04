//
// const initialState = {
//     currentMonthDate: new Date()
// };
//
// const monthSelector = (state = initialState, action) => {
//     switch (action.type) {
//         case 'NEXT_MONTH':
//             return Object.assign(
//                 {},
//                 state,
//                 {
//                     currentMonthDate: new Date(state.currentMonthDate.getFullYear(), state.currentMonthDate.getMonth() + 1, 1)
//                 }
//             );
//         case 'PREV_MONTH':
//             return Object.assign(
//                 {},
//                 state,
//                 {
//                     currentMonthDate: new Date(state.currentMonthDate.getFullYear(), state.currentMonthDate.getMonth() - 1, 1)
//                 }
//             );
//         default:
//             return state;
//     }
// };