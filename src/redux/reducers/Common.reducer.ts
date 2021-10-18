import Immutable from 'seamless-immutable';
/**
 * request form reducer action execute based on types
 * @param {initialState it cannot change} state 
 * @param {default actions} action 
 */

/**
 * set initial state as immutable
 */
const commonState = Immutable({
    // activeTheme: {
    //     primaryColor: 'red',
    //     accentColor: '#458622',
    //     backgroundColor: '#FFC777',
    //     textColor: '#504f4d',
    //     secondaryColor: '#7F5315',
    // }
    commonSettings: {
        activeTheme: 'LIGHT_THEME',
    }
});

export default function CommonReducer(state: any = commonState, actions: any = {}) {
    return {
        ...state,
        [actions.index]: {
            ...state[actions.index],
            ...actions.data
        }
    }
}




