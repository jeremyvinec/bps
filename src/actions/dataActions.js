import Api from '../api/Api'

export function loadDataSuccess(data){
    return { type: 'LOAD_DATA_SUCCESS', data }
}

export function loadData(){
    return dispatch => {
        return Api.getDataFromApi().then(data => {
            dispatch(loadDataSuccess(data))
        }).catch((error) => {
            throw(error)
        })
    }
}