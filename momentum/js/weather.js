const API_KEY = "d40f85fc471006dde40718e5616ee423"
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(weatherAPIUrl).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        const name = data.name;
        const weather = data.weather[0].main;

        weatherContainer.innerText = weather;
        cityContainer.innerText = name;
    });


}

function onGeoError(){
    alert("위치 정보를 불러오는데 실패했습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
