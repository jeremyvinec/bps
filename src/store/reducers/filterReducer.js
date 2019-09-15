const intialState = {
    filter: []
}

export default function filterReducer(state = intialState.filter, action ){
    console.log(action)
    switch(action.type){
        case 'LOAD_FILTER' :
            return action.value
        default:
            return state
    }
}