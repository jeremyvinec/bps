import { AsyncStorage } from 'react-native'
import data from './dataReducer'
import filter from './filterReducer'
import { persistCombineReducers } from 'redux-persist'

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = persistCombineReducers(rootPersistConfig, {
    data, filter
})

export default rootReducer