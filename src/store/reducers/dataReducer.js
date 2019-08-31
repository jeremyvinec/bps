const initialState = {
    data: []
}

export default function dataReducer(state = initialState.data, action){
    //console.log(action)
    switch(action.type){
        case 'LOAD_DATA_SUCCESS':
            return action.data
        default:
            return state
    }
}