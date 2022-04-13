import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CountryInfo } from './CountryInfo';
import { CountryOptionList } from './CountryOptionList';
import arrow from '../../assets/img/arrow.png';

export const CountryOption = () => {
    const { country } = useSelector(state => state.airQualityData);
    const [option, setOption] = useState('Select Country');
    const [hideListClass, setHideListClass] = useState(true);
    
    const handleHideClass = () => {
        setHideListClass(!hideListClass);
    };

    return (
        <div className='countryOption__container'>
            <div className='countryOption__selector'>
                <div 
                    className='countryOption__selectField'
                    onClick={ handleHideClass }
                >
                    <p>{ option }</p>
                    <img alt='arrow' src={ arrow } />
                </div>
                {
                    country.length > 0 && hideListClass
                        ?   <CountryInfo />
                        :   <CountryOptionList 
                                hideListClass={ hideListClass }
                                setHideListClass={ setHideListClass }
                                setOption={ setOption }
                            />
                }
            </div>
        </div>
    );
};
