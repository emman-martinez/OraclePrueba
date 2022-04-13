import { types } from '../types/types';

const getCities = (res) => {
    return {
        type: types.GET_DATA_CITIES,
        payload: {
            cities: res,
        },
    };
};

const getCountries = (res) => {
    return {
        type: types.GET_DATA_COUNTRIES,
        payload: {
            countries: res,
        },
    };
};

const getDataByCountry = (res) => {
    return {
        type: types.GET_DATA_BY_COUNTRY,
        payload: {
            country: res,
        },
    };
};

const getDataLocationsByCountry = (res) => {
    return {
        type: types.GET_DATA_LOCATIONS_BY_COUNTRY,
        payload: {
            locations: res,
        },
    };
};

const getParameters = (res) => {
    return {
        type: types.GET_DATA_PARAMETERS,
        payload: {
            parameters: res,
        },
    };
};

const makeRequestGeneral = () => {
    return {
        type: types.MAKE_REQUEST_GENERAL,
    };
};

export {
    getCities,
    getCountries,
    getDataByCountry,
    getDataLocationsByCountry,
    getParameters,
    makeRequestGeneral,
};