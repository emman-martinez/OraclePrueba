import { types } from '../types/types';

const initialState = {
    cities: [],
    countries: [],
    country: [],
    locations: [],
    parameters: [],
};

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_DATA_BY_COUNTRY:
            return {
                ...state,
                country: action.payload.country, 
            }
        case types.GET_DATA_CITIES:
            return {
                ...state,
                cities: action.payload.cities, 
            }
        case types.GET_DATA_COUNTRIES:
            return {
                ...state,
                countries: action.payload.countries, 
            }
        case types.GET_DATA_LOCATIONS_BY_COUNTRY:
            return {
                ...state,
                locations: action.payload.locations,
            }
        case types.GET_DATA_PARAMETERS:
            return {
                ...state,
                parameters: action.payload.parameters, 
            }
        case types.MAKE_REQUEST_GENERAL:
            return {
                cities: [],
                countries: [],
                country: [],
                locations: [],
                parameters: [],
            }
        default:
            return state;
    }
};