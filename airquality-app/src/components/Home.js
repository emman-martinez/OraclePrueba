import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
    getAirQualityCities, 
    getAirQualityCountries,
    getAirQualityParameters, 
} from '../api/fetch';
import { 
    getCities, 
    getCountries, 
    getParameters, 
    makeRequestGeneral,
} from '../redux/actions/data';
import { CountryOption } from './CountryOption/CountryOption';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
// import { ShowData } from './ShowData/ShowData';

export const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(makeRequestGeneral());
        const fetchData = async() => {
            const dataAirQualityCountries = await getAirQualityCountries();
            dispatch(getCountries(dataAirQualityCountries.results));
            const dataAirQualityCities = await getAirQualityCities();
            dispatch(getCities(dataAirQualityCities.results));
            const dataAirQualityParameters = await getAirQualityParameters();
            dispatch(getParameters(dataAirQualityParameters.results));
        };
        fetchData();
    }, [dispatch]);

    return (
        <div className='home__container'>
            <Header />
            {/* <ShowData /> */}
            <CountryOption />  
            <Footer />
        </div>
    );
};
