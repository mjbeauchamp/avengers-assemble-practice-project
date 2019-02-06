let initialState = {
    allAvengers: [],
    teamCap: [],
    teamStark: []
}

const ADD_TO_CAP = 'ADD_TO_CAP';
const ADD_TO_STARK = 'ADD_TO_STARK';
const GET_ALL = 'GET_ALL'

export default function reducer(state=initialState, action){
    switch(action.type){
        case ADD_TO_CAP:
            return Object.assign({}, state, {teamCap: [...state.teamCap, action.payload]});
        case ADD_TO_STARK:
            return Object.assign({}, state, {teamStark: [...state.teamStark, action.payload]})
        case GET_ALL:
            return Object.assign({}, state, {allAvengers: action.payload})
        default:
            return state;
    }
}

export function getAvengers(avengersList){
    return {
        type: GET_ALL,
        payload: avengersList
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