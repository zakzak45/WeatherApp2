const apikey ="9545317b796bbc74686fe9e1b0dce392"
const apiURL ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const search  =document.querySelector('.search input')
const searchBtn  =document.querySelector('.search button')

async function CheckWeather(city){
  const response=await fetch(apiURL +city+`&appid=${apikey}`)
  var data = await response.json()
  console.log(data)

  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=data.main.temp;
  document.querySelector('.humidity').innerHTML=data.main.humidity;
}

searchBtn.addEventListener('click',()=>{
  CheckWeather(search.value)
})


