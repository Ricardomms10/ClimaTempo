const key = '887c09c79f3eeb35d7733c3bea0c81fd';

export async function locationName(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const response = await fetch(url).then((res) => res.json());
    if (response.cod === '404') {
        return { notFound: true };
    }
    return response;
}




