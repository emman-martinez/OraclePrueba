import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAirQualityByCountry, getAirQualityLocationsByCountry } from '../../api/fetch';
import { getDataByCountry, getDataLocationsByCountry } from '../../redux/actions/data';

export const CountryOptionList = ({ hideListClass, setHideListClass, setOption }) => {
    const { countries } = useSelector(state => state.airQualityData);
    const dispatch = useDispatch();

    const countryCodeOption = (country) => {
        setOption(country.name);
        setHideListClass(!hideListClass);
        fetchData(country);
    };
    
    const fetchData = async(country) => {
        const dataAirQualityByCountry = await getAirQualityByCountry(country.code);
        dispatch(getDataByCountry(dataAirQualityByCountry.results));
        const dataAirQualityLocationsByCountry = await getAirQualityLocationsByCountry(country.code);
        dispatch(getDataLocationsByCountry(dataAirQualityLocationsByCountry.results));
    };

    return (
        <ul className={ `countryOption__list ${ hideListClass && 'hide' }` }>
            {
                countries.map((country, index) => {
                    return (
                        <li 
                            className='countryOption__options'
                            key={ index }
                            onClick={ () => countryCodeOption(country) }
                        >
                                <p>{ country.name }</p>
                        </li>
                    );
                })
            }
        </ul>
    );
};
