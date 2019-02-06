let initialState = {
    allAvengers: [],
    teamCap: [],
    teamStark: []
}

const ADD_TO_CAP = 'ADD_TO_CAP';
const ADD_TO_STARK = 'ADD_TO_STARK'

export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TO_CAP:
            return Object.assign({}, state, {teamCap: [...state.teamCap, action.payload]});
        case ADD_TO_STARK:
            return Object.assign({}, state, {teamStark: [...state.teamStark, action.payload]})
        default:
            return state;
    }
}

export function addToCap(avenger){
    return {
        type: ADD_TO_CAP,
        payload: avenger
    }
}

export function addToStark(avenger){
    return {
        type: ADD_TO_STARK,
        payload: avenger
    }
}