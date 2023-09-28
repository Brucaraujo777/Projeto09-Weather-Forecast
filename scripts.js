
const key = "362107088aebd29eb15c66d77232e932"


function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city-weather").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperature").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".condition").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + " %"
    document.querySelector(".image-icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}


function cliqueiNoBotao(){
    const cidade = document.querySelector(".city").value
    
    buscarCidade(cidade)
}