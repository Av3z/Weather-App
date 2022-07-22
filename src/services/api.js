const key = "f74236ca25044e439aa175121222107";

const fetchData = async (city) => {
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
    
    const fetchResponse = await fetch(url);
    const data =  await fetchResponse.json();

    return data;
}


export default fetchData;