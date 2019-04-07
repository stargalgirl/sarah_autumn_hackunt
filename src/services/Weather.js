import React from 'react';

class Weather extends React.Component{
    render(){

    }
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);        
        const response = await api_call.json();
        console.log(response);
    }
}
export default Weather;