
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const temp = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind'); 
    const place_name = document.getElementById('place_name');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const place = input.value.trim().toLowerCase();
        if (place) {
            try {
                let details = cities[place];
                const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lat=${details[0]}&lon=${details[1]}`;
                const options = {
                    headers: {
                        'x-rapidapi-key': '018da0fd04mshbf95e2f89cad319p1487ebjsnb74d49e39271',
                        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
                    }
                };
                let wheather_details = async () =>{
                    let response = await axios.get(url, options);
                    let data = response.data;
                    place_name.innerText = `${place.toUpperCase()}`;
                    temp.innerText = `Temperature: ${data.temp}°C`;
                    humidity.innerText = `Humidity: ${data.humidity}%`;
                    wind.innerText = `Wind Speed: ${data.wind_speed} km/h`;
                }
                wheather_details(); 
            }catch(err){
                console.log(err);
            }
            
        } else {
            alert("Please enter a place.");
        }
    })
})