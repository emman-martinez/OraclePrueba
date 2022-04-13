import React from 'react';
import { useSelector } from 'react-redux';

export const CountryInfo = () => {
    const { country } = useSelector(state => state.airQualityData);

    return (
        <ul className='countryInfo__list'>
            <li className='countryInfo__options'>Cities: { country[0].cities }</li>
            <li className='countryInfo__options'>Code: { country[0].code }</li>
            <li className='countryInfo__options'>Counts: { country[0].count }</li>
            <li className='countryInfo__options'>First update: { country[0].firstUpdated }</li>
            <li className='countryInfo__options'>Last update: { country[0].lastUpdated }</li>
            <li className='countryInfo__options'>Locations: { country[0].locations }</li>
            <li className='countryInfo__options'>
                Parameters:
                <ul>
                    {
                        country[0].parameters.map(param => {
                            return (
                                <li className='countryInfo__options'>{ param }</li>
                            );
                        })
                    }
                </ul>
            </li>
            <li className='countryInfo__options'>Sources: { country[0].sources }</li>
        </ul>
    );
};
