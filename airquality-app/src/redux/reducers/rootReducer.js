import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
    airQualityData: dataReducer,
});