let city;
const API_URL ="https://api.openweathermap.org/data/2.5/weather?q=`${city}`&appid=9545317b796bbc74686fe9e1b0dce392&units=metric"


async function CheckWeather(city){
  const response=await fetch(API_URL)
  var data = await response.json()
  console.log(data)

  document.querySelector('.city').innerHTML=data.name;
}


CheckWeather();

