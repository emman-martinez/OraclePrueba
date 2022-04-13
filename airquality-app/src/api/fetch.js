const getAirQualityByCountry = async(countryCode, limit = 100) => {
    const url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/countries/${ countryCode }?limit=${ limit }&page=1&offset=0&sort=asc&order_by=country`;
    
    try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const getAirQualityCities = async(limit = 100) => {
    const url = `https://docs.openaq.org/v2/cities?limit=${ limit }&page=1&offset=0&sort=asc&order_by=city`;
    
    try {
        const res = await fetch(url);
        
        if (!res.ok) throw new Error(res.statusText);
        
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const getAirQualityCountries = async(limit = 200) => {
    const url = `https://docs.openaq.org/v2/countries?limit=${ limit }&page=1&offset=0&sort=asc&order_by=country`;
    
    try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(res.statusText);
        
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

const getAirQualityLocationsByCountry = async(countryCode, limit = 100) => {
    const url = `https://docs.openaq.org/v1/locations?limit=${ limit }&page=1&offset=0&sort=desc&radius=1000&country_id=${ countryCode }&order_by=lastUpdated&dumpRaw=false`;
    
    try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(res.statusText);
        
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};


const getAirQualityParameters = async() => {
    const url = `https://docs.openaq.org/v2/parameters?limit=100&page=1&offset=0&sort=asc&order_by=id`;
    
    try {
        const res = await fetch(url);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

export {
    getAirQualityByCountry,
    getAirQualityCities,
    getAirQualityCountries,
    getAirQualityLocationsByCountry,
    getAirQualityParameters,
};