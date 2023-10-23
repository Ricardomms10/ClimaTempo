import React, { useState } from 'react';
import { locationName } from '../Api/request';
import { Box, BoxCity, BoxDescription, BoxInfo, MsgErr } from './styles';

export const Home = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    async function handleClick() {
        const response = await locationName(city);
        setWeatherData(response);
    }

    const isButtonDisabled = city.trim() === '';

    return (
        <Box>
            <input
                className="cidade"
                placeholder="Digite sua cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleClick} disabled={isButtonDisabled}>
                <img
                    alt="icone"
                    src="https://www.svgrepo.com/show/488200/find.svg"
                />
            </button>

            <BoxInfo>
                {weatherData && !weatherData.notFound && (
                    <>
                        <BoxCity>
                            <h2><i nameclass="fa-solid fa-location-dot"></i> {`${weatherData.name}`}</h2>
                            <img alt="icone-tempo" src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
                        </BoxCity>

                        <BoxDescription>
                            <h1>{`${Math.floor(weatherData.main.temp)}°C`}</h1>
                            <p>{weatherData.weather[0].description}</p>
                            <p>{`Umidade: ${weatherData.main.humidity}% | Vento: ${weatherData.wind.speed}M/S `}</p>
                        </BoxDescription>
                    </>
                )}
                {weatherData && weatherData.notFound &&
                    <MsgErr>
                        <h1><i class="fa-solid fa-triangle-exclamation"></i></h1>
                        <p>CIDADE NÃO ENCONTRADA</p>
                    </MsgErr>}
            </BoxInfo>
        </Box>
    );
};
